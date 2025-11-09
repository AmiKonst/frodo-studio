import { _ as _export_sfc, b as createElementBlock, o as openBlock, l as renderSlot, h as createBaseVNode, t as toDisplayString, n as normalizeClass } from './index-BWJP78wn.js';

const _hoisted_1 = { class: "position-header" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = ["id"];


const _sfc_main = {
  __name: 'PageHeader',
  props: {
        id: { type: String, default: 'head-buttons' },
        title: { type: String, default: '' },
        detail: { type: Boolean, default: false },
        secondary: { type: Boolean, default: false }
    },
  setup(__props) {

    const props = __props;

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "title", {}, () => [
      createBaseVNode("label", _hoisted_2, toDisplayString(props.title), 1)
    ], true),
    createBaseVNode("div", {
      class: normalizeClass(["actions-box explorer-ignore", { detail: props.detail, secondary: props.secondary }])
    }, [
      createBaseVNode("div", {
        id: props.id
      }, null, 8, _hoisted_3),
      renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ], 2)
  ]))
}
}

};
const PageHeader = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-370a0e47"]]);

export { PageHeader as P };
//# sourceMappingURL=PageHeader-wy7CtAF7.js.map
