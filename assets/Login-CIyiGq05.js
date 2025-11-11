import { _ as _export_sfc, s as stores, a as useI18n, r as reactive, m as watch, j as onMounted, p as onBeforeUnmount, b as createElementBlock, o as openBlock, h as createBaseVNode, u as unref, t as toDisplayString, F as Fragment, d as renderList, g as createVNode, q as createTextVNode, x as _sfc_main$1 } from './index-CuriYjet.js';

const _hoisted_1 = { class: "login" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = { class: "description" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "code" };
const _hoisted_6 = { class: "footer" };
const _hoisted_7 = { class: "terms" };
const _hoisted_8 = {
  href: "https://github.com/Bilbo-Music/bilbo-docs-public/blob/main/terms%20of%20service/Bilbo%20Studio.md",
  target: "_blank"
};


const _sfc_main = {
  __name: 'Login',
  setup(__props) {

const user = stores.user();
const nav = stores.nav();
const locale = stores.locale();

const { t, tm, rt } = useI18n();

const data = reactive({
    steps: []
});

const getSteps = () => {
    data.steps = Array.isArray(tm('pages.login.description.steps')) ? tm('pages.login.description.steps').map(item => rt(item)
    ) : [];
};

const onLanguageChange = (payload) => {
    locale.updateLocale(payload.value);
};

const updateCode = async () => {
    await user.createExternalLogin();

    clearTimeout(data.updateCodeTimeout);
    data.updateCodeTimeout = setTimeout(() => {
        updateCode();
    }, 5 * 60 * 1000); // Каждые 5 минут надо актуализировать токен

    setTimeout(() => {
        checkCode();
    }, 5 * 1000);
};

const checkCode = async () => {
    const result = await user.checkExternalLogin();

    if (!result) {
        clearTimeout(data.checkCodeTimeout);
        data.checkCodeTimeout = setTimeout(() => {
            checkCode();
        }, 4 * 1000); // Каждые 4 секунды надо запрашивать статус
        return;
    }

    await user.getArtists();

    nav.open('/');
};


watch(() => locale.locale, () => {
    getSteps();
});

onMounted(() => {
    getSteps();
    updateCode();
});

onBeforeUnmount(() => {
    clearTimeout(data.checkCodeTimeout);
    delete data.checkCodeTimeout;

    clearTimeout(data.updateCodeTimeout);
    delete data.updateCodeTimeout;
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h1", {
      innerHTML: unref(t)('pages.login.title')
    }, null, 8, _hoisted_2),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("p", null, toDisplayString(unref(t)('pages.login.description.intro')), 1),
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.steps, (item, id) => {
          return (openBlock(), createElementBlock("li", {
            key: id,
            innerHTML: item
          }, null, 8, _hoisted_4))
        }), 128))
      ]),
      createBaseVNode("div", _hoisted_5, toDisplayString(unref(user).externalCode), 1)
    ]),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("div", _hoisted_7, [
        createBaseVNode("span", null, [
          createTextVNode(toDisplayString(unref(t)('pages.login.terms')) + " ", 1),
          createBaseVNode("a", _hoisted_8, toDisplayString(unref(t)('pages.login.terms-button')), 1),
          createTextVNode(" " + toDisplayString(unref(t)('pages.login.terms-2')), 1)
        ])
      ]),
      createVNode(_sfc_main$1, {
        class: "noerror inline icon-only",
        optionList: unref(locale).languages,
        value: unref(locale).locale,
        clearable: false,
        leftAuto: !unref(locale).rtl,
        rightAuto: unref(locale).rtl,
        onChange: onLanguageChange
      }, null, 8, ["optionList", "value", "leftAuto", "rightAuto"])
    ])
  ]))
}
}

};
const Login = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-f18e72c0"]]);

export { Login as default };
//# sourceMappingURL=Login-CIyiGq05.js.map
