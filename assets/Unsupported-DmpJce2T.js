import { _ as _export_sfc, a as useI18n, r as reactive, b as createElementBlock, o as openBlock, h as createBaseVNode, g as createVNode, t as toDisplayString, u as unref, E as EmptyLabel } from './index-CrWbz-pI.js';

const _hoisted_1 = { class: "box" };
const _hoisted_2 = { class: "g-c title" };

    
const _sfc_main = {
  __name: 'Unsupported',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const description = tm('pages.unsupported.descriptions').map(item => rt(item));

    const data = reactive({
        description: description[Math.min(parseInt(Math.random() * description.length), description.length - 1)] 
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("label", _hoisted_2, toDisplayString(unref(t)('pages.unsupported.title')), 1),
    createVNode(EmptyLabel, {
      class: "empty",
      description: data.description
    }, null, 8, ["description"])
  ]))
}
}

};
const Unsupported = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-6cd14e08"]]);

export { Unsupported as default };
//# sourceMappingURL=Unsupported-DmpJce2T.js.map
