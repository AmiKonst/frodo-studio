import { _ as _export_sfc, a as useI18n, r as reactive, b as createElementBlock, o as openBlock, h as createBaseVNode, g as createVNode, u as unref, E as EmptyLabel, F as Fragment } from './index-Bz30UdvB.js';

const _hoisted_1 = ["innerHTML"];

    
const _sfc_main = {
  __name: 'Error',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const description = tm('pages.error.descriptions').map(item => rt(item));

    const data = reactive({
        description: description[Math.min(parseInt(Math.random() * description.length), description.length - 1)] 
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("label", {
      class: "g-c title",
      innerHTML: unref(t)('pages.error.title')
    }, null, 8, _hoisted_1),
    createVNode(EmptyLabel, {
      class: "empty",
      description: data.description
    }, null, 8, ["description"])
  ], 64))
}
}

};
const Error = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-1ef175fe"]]);

export { Error as default };
//# sourceMappingURL=Error-CAIlYL_s.js.map
