/**
 * Basic user management
 * @module User
 * */

import { gun, SEA } from "./gun";
import { color } from "./color";

export const user = reactive({
  initiated: false,
  is: null,
  name: "",
  pub: computed(() => user?.is?.pub),
  color: computed(() => (user.pub ? color.deep.hex(user.pub) : "gray")),
  pulse: 0,
  pulser: null,
  blink: false,
  db: gun.user(),
  safe: {
    saved: null,
    password: null,
  },
  pair() {
    return gun.user()._.sea;
  },
});

export function useUser() {
  if (!user.is) {
    gun.user().recall({ sessionStorage: true }, () => {
      console.log("user was recalled");
      init();
    });

    gun.on("auth", () => {
      init();
      console.log("user authenticated");
    });
  }

  return { user, auth, leave };
}

function init() {
  if (user.initiated) return;
  user.is = gun.user().is;
  if (user.pulser) {
    clearInterval(user.pulser);
  }
  user.pulser = setInterval(() => {
    gun.user().get("pulse").put(Date.now());
  }, 1000);

  gun
    .user()
    .get("pulse")
    .on((d) => {
      user.blink = !user.blink;
      user.pulse = d;
    })
    .back()
    .get("safe")
    .map()
    .on((d, k) => {
      user.safe[k] = d;
    });
  gun
    .user()
    .get("profile")
    .get("name")
    .on((d) => (user.name = d));

  user.initiated = true;
}

/**
 * Authenticate with a SEA key pair
 * @param {Object} pair
 */

export async function auth(pair) {
  if (!pair || !pair.pub || !pair.priv) {
    pair = await SEA.pair();
    console.log("new user was created");
  }
  gun.user().auth(pair, async () => {
    console.log("user is authenticated");
  });
}

/**
 * Log out the user
 **/

export function leave() {
  let is = !!user.is?.pub;
  user.initiated = false;
  clearInterval(user.pulser);
  gun.user().leave();
  setTimeout(() => {
    if (is && !user.pair()) {
      user.is = null;
      console.info("User logged out");
    }
  }, 500);
}

async function hasPass(pub) {
  return await gun.get(`~${pub}`).get("pass").get("pair").then();
}

async function getFromPass(pub, password) {
  let encPair = await gun.get(`~${pub}`).get("pass").get("pair").then();
  return await SEA.decrypt(encPair, password);
}

function isMine(soul) {
  if (!soul) return;
  return soul.slice(1, 88) == user.pub;
}

export function updateProfile(field, data) {
  if (field && data !== undefined) {
    gun.user().get("profile").get(field).put(data);
  }
}