var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/garebare/developer/flont/Kal/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = __toESM(require("react"));
var import_react3 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ import_react2.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react2.default.createElement("head", null, /* @__PURE__ */ import_react2.default.createElement(import_react3.Meta, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Links, null)), /* @__PURE__ */ import_react2.default.createElement("body", null, /* @__PURE__ */ import_react2.default.createElement(import_react3.Outlet, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Scripts, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.LiveReload, null)));
}

// route:/home/garebare/developer/flont/Kal/app/routes/article/$id.tsx
var id_exports = {};
__export(id_exports, {
  Index: () => Index,
  loader: () => loader
});
var import_react8 = __toESM(require("react"));
var import_react9 = require("@remix-run/react");

// app/hooks/auth.tsx
var import_react5 = require("react");
var import_react_router_dom = require("react-router-dom");
var import_auth2 = require("firebase/auth");

// app/hooks/firebase.tsx
var import_react4 = __toESM(require("react"));
var import_analytics = require("firebase/analytics");
var import_app = require("firebase/app");
var import_auth = require("firebase/auth");
var import_firestore = require("firebase/firestore");
var FirebaseContext = (0, import_react4.createContext)(null);
var useFirebase = () => {
  const app = (0, import_react4.useContext)(FirebaseContext);
  const [analytics, setAnalytics] = (0, import_react4.useState)(null);
  const [auth, setAuth] = (0, import_react4.useState)(null);
  const [firestore, setFirestore] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
    if (!app)
      return;
    setAnalytics((0, import_analytics.getAnalytics)(app));
    setAuth((0, import_auth.getAuth)(app));
    setFirestore((0, import_firestore.getFirestore)(app));
  }, [app]);
  if (app && analytics && auth && firestore) {
    return {
      app,
      analytics,
      auth,
      firestore
    };
  } else {
    return void 0;
  }
};

// app/hooks/auth.tsx
var useAuth = () => {
  const [user, setUser] = (0, import_react5.useState)(null);
  const [init, setInit] = (0, import_react5.useState)(false);
  const [unmounted, setUnmounted] = (0, import_react5.useState)(false);
  const firebase = useFirebase();
  const auth = firebase == null ? void 0 : firebase.auth;
  const navigate = (0, import_react_router_dom.useNavigate)();
  (0, import_react5.useEffect)(() => {
    if (!auth)
      return;
    auth.onAuthStateChanged((user2) => {
      if (unmounted)
        return;
      setUser(user2);
      setInit(true);
    });
    return () => {
      setUnmounted(true);
    };
  }, [auth]);
  (0, import_react5.useEffect)(() => {
    if (!user && init) {
      navigate("/login");
    }
  }, [init, user]);
  const logIn = async () => {
    return new Promise((resolve, reject) => {
      auth && (0, import_auth2.signInWithPopup)(auth, new import_auth2.TwitterAuthProvider()).then((result) => {
        setUser(result.user);
        navigate("/");
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  };
  const logOut = async () => {
    return new Promise((resolve, reject) => {
      auth && (0, import_auth2.signOut)(auth).then(() => {
        setUser(null);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  };
  const deleteAccount = async () => {
    return new Promise((resolve, reject) => {
      auth && user && (0, import_auth2.deleteUser)(user).then(() => {
        setUser(null);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  };
  return {
    logIn,
    logOut,
    deleteAccount,
    user
  };
};

// app/hooks/microcms.tsx
var import_react6 = require("react");
var ENDPOINT = "https://kal.microcms.io/api/v1/blog";
var useMicrocms = () => {
  const [response, setContents] = (0, import_react6.useState)();
  const [article, setArticle] = (0, import_react6.useState)();
  const Limit = 100;
  const getArticles = async (key, page) => {
    if (!key)
      throw new Error("key is required");
    if (!page)
      throw new Error("page is required");
    const params = new URLSearchParams({
      offset: ((page - 1) * Limit).toString(),
      limit: Limit.toString()
    });
    const res = await fetch(`${ENDPOINT}?${params.toString()}`, {
      method: "GET",
      headers: {
        "X-MICROCMS-API-KEY": key
      }
    });
    setContents(await res.json());
  };
  const getArticle = async (key, id) => {
    if (!key)
      throw new Error("key is required");
    if (!id)
      throw new Error("id is required");
    const res = await fetch(`${ENDPOINT}/${id}`, {
      method: "GET",
      headers: {
        "X-MICROCMS-API-KEY": key
      }
    });
    setArticle(await res.json());
  };
  return {
    response,
    article,
    getArticle,
    getArticles
  };
};

// app/components/ArticleList.tsx
var React4 = __toESM(require("react"));
var import_react_router_dom2 = require("react-router-dom");
var ArticleList = ({ title, subtitle, id, createdAt, isLink }) => {
  const navigate = (0, import_react_router_dom2.useNavigate)();
  return /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("div", null, createdAt.split("T")[0]), isLink && /* @__PURE__ */ React4.createElement("div", {
    onClick: () => {
      navigate(`/article/${id}`);
    }
  }, title), !isLink && /* @__PURE__ */ React4.createElement("div", null, title), /* @__PURE__ */ React4.createElement("div", null, subtitle), /* @__PURE__ */ React4.createElement("hr", null));
};

// app/components/Logo.tsx
var import_react7 = __toESM(require("react"));

// app/assets/image/kal.png
var kal_default = "/build/_assets/kal-TUR2KEIA.png";

// app/components/Logo.tsx
var Logo = () => {
  return /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("img", {
    src: kal_default
  }), /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("div", null, "Kal,"), /* @__PURE__ */ import_react7.default.createElement("div", null, "It", "'", "s me! Garebare")));
};

// route:/home/garebare/developer/flont/Kal/app/routes/article/$id.tsx
var import_react10 = require("@nextui-org/react");
var loader = async ({
  params
}) => {
  return params.id;
};
var Index = ({ apiKey }) => {
  const { user } = useAuth();
  const { getArticle, article } = useMicrocms();
  const id = (0, import_react9.useLoaderData)();
  (0, import_react8.useEffect)(() => {
    if (!user)
      return;
    if (!apiKey || apiKey == "")
      return;
    getArticle(apiKey, id);
  }, [apiKey, user]);
  return /* @__PURE__ */ import_react8.default.createElement(import_react10.Container, null, /* @__PURE__ */ import_react8.default.createElement(Logo, null), !article && apiKey && /* @__PURE__ */ import_react8.default.createElement("div", null, "\u4F55\u3082\u306A\u3044\u304B\u3082\u3057\u308C\u306A\u3044"), article && /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(ArticleList, {
    title: article.title,
    subtitle: article.profile,
    id: article.id,
    key: article.id,
    createdAt: article.date,
    isLink: false
  }), /* @__PURE__ */ import_react8.default.createElement("div", {
    dangerouslySetInnerHTML: { __html: article.content }
  })));
};

// route:/home/garebare/developer/flont/Kal/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  Index: () => Index2
});
var import_react11 = __toESM(require("react"));

// app/components/Card.tsx
var React7 = __toESM(require("react"));
var Card = ({ logOut, deleteAccount, user }) => {
  return /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("div", null, "\u30A2\u30AB\u30A6\u30F3\u30C8"), /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("img", {
    src: user.photoURL,
    alt: user.displayName
  }), /* @__PURE__ */ React7.createElement("div", null, user.displayName)), /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("button", {
    onClick: () => {
      logOut();
    }
  }, /* @__PURE__ */ React7.createElement("div", null, "\u30ED\u30B0\u30A2\u30A6\u30C8"))), /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("button", {
    onClick: () => {
      deleteAccount();
    }
  }, /* @__PURE__ */ React7.createElement("div", null, "\u30A2\u30AB\u30A6\u30F3\u30C8\u524A\u9664"))), /* @__PURE__ */ React7.createElement("div", null, "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u524A\u9664\u3057\u3066\u3082\u307E\u305F\u30ED\u30B0\u30A4\u30F3\u3067\u304D\u307E\u3059\u3002"), /* @__PURE__ */ React7.createElement("div", null, "\u305F\u3060\u30AC\u30EC\u30D0\u30EC\u306E\u9006\u9C57\u306B\u89E6\u308C\u308B\u3068\u5E30\u3063\u3066\u3053\u308C\u307E\u305B\u3093\u3002"));
};

// route:/home/garebare/developer/flont/Kal/app/routes/index.tsx
var Index2 = ({ apiKey }) => {
  const [page, setPage] = (0, import_react11.useState)(1);
  const [isNextPage, setIsNextPage] = (0, import_react11.useState)(false);
  const [isPrevPage, setIsPrevPage] = (0, import_react11.useState)(false);
  const { logOut, deleteAccount, user } = useAuth();
  const { response, getArticles } = useMicrocms();
  const [articles, setArticles] = (0, import_react11.useState)([]);
  (0, import_react11.useEffect)(() => {
    if (!user)
      return;
    if (!apiKey || apiKey == "")
      return;
    getArticles(apiKey, page);
  }, [apiKey, user, page]);
  (0, import_react11.useEffect)(() => {
    if (!response)
      return;
    setArticles([]);
    for (let i = 0; i < response.contents.length; i++) {
      const c = response.contents[i];
      setArticles((articles2) => [...articles2, /* @__PURE__ */ import_react11.default.createElement(ArticleList, {
        title: c.title,
        subtitle: c.profile,
        id: c.id,
        key: c.id,
        createdAt: c.date,
        isLink: true
      })]);
    }
    setIsNextPage(response.totalCount % 10 == 0 && response.contents.length == 10);
    setIsPrevPage(page != 1);
  }, [response]);
  return /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement(Logo, null), /* @__PURE__ */ import_react11.default.createElement("div", null), articles.length == 0 && apiKey != "" && /* @__PURE__ */ import_react11.default.createElement("div", null, "\u8AAD\u307F\u8FBC\u307F\u4E2D..."), articles.length == 0 && apiKey == "" && /* @__PURE__ */ import_react11.default.createElement("div", null, "\u30D5\u30A9\u30ED\u30FC\u3055\u308C\u3066\u3044\u307E\u305B\u3093\uFF01\u5BDD\u3066\u5F85\u3066\uFF01"), articles, user && apiKey != "" && /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("button", {
    disabled: !isPrevPage,
    onClick: () => {
      setPage(page - 1);
    }
  }, /* @__PURE__ */ import_react11.default.createElement("div", null, "<")), /* @__PURE__ */ import_react11.default.createElement("div", null, page), /* @__PURE__ */ import_react11.default.createElement("button", {
    disabled: !isNextPage,
    onClick: () => {
      setPage(page + 1);
    }
  }, /* @__PURE__ */ import_react11.default.createElement("div", null, ">"))), user && /* @__PURE__ */ import_react11.default.createElement(Card, {
    logOut,
    deleteAccount,
    user
  }));
};

// route:/home/garebare/developer/flont/Kal/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  Index: () => Index3
});
var import_react12 = __toESM(require("react"));
var import_react13 = require("@remix-run/react");

// app/components/Intro.tsx
var React9 = __toESM(require("react"));
var Intro = () => {
  return /* @__PURE__ */ React9.createElement("div", null, /* @__PURE__ */ React9.createElement("div", null, "Kal\u306F", /* @__PURE__ */ React9.createElement("a", {
    href: "https://twitter.com/garebare521"
  }, "\u30AC\u30EC\u30D0\u30EC"), "\u306E\u30D6\u30ED\u30B0\u3067\u3059\u3002 "), /* @__PURE__ */ React9.createElement("div", null, "Twitter\u3067\u30D5\u30A9\u30ED\u30FC\u3055\u308C\u3066\u306A\u3044\u3068\u898B\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React9.createElement("div", null, "\u30D5\u30A9\u30ED\u30FC\u3055\u308C\u3066\u3044\u308B\u304B\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /* @__PURE__ */ React9.createElement("div", null, /* @__PURE__ */ React9.createElement("div", null, "\u30A2\u30AB\u30A6\u30F3\u30C8\u306EID\u4EE5\u5916\u306F\u4F7F\u7528\u3057\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React9.createElement("div", null, "Firebase AuthCation\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002")));
};

// app/components/LoginButton.tsx
var React10 = __toESM(require("react"));
var LoginButton = ({ logIn }) => {
  return /* @__PURE__ */ React10.createElement("div", null, /* @__PURE__ */ React10.createElement("button", {
    onClick: () => {
      logIn();
    }
  }, "Twitter\u3067\u30ED\u30B0\u30A4\u30F3"));
};

// route:/home/garebare/developer/flont/Kal/app/routes/login.tsx
var Index3 = () => {
  const { logIn, user } = useAuth();
  const navigate = (0, import_react13.useNavigate)();
  (0, import_react12.useEffect)(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement(Logo, null)), /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement(Intro, null)), /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement(LoginButton, {
    logIn
  })));
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "1a16411f", "entry": { "module": "/build/entry.client-SYNATENL.js", "imports": ["/build/_shared/chunk-PNNKWNTV.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YHZD4DR6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/article/$id": { "id": "routes/article/$id", "parentId": "root", "path": "article/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/article/$id-WDRWHZ5Z.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-Z3WVEBA2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-7S72WYL4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1A16411F.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/article/$id": {
    id: "routes/article/$id",
    parentId: "root",
    path: "article/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
