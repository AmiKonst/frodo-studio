import { _ as _export_sfc, r as reactive, L as LANGUAGES_LIST, j as onMounted, b as createElementBlock, o as openBlock, e as createCommentVNode, F as Fragment, d as renderList, c as createBlock, n as normalizeClass, k as Field } from './index-D4RMqZs5.js';
import { T as Textarea } from './FileUploader-mG_CKRpq.js';

const _hoisted_1 = { class: "title-field" };

    
const _sfc_main = {
  __name: 'MultilingualField',
  props: {
        value: { type: Object, default: () => ({}) },
        type: { type: String, default: 'field' }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const props = __props;

    const data = reactive({
        value: { ...props.value },
        items: LANGUAGES_LIST
    });

    const emit = __emit;

    const onSearchChange = (e, code) => {
        data.value[code] = e.target.value;

        emit('change', data.value);
    };

    onMounted(() => {
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (props.type === 'field')
      ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(data.items, (item) => {
          return (openBlock(), createBlock(Field, {
            key: item.code,
            icon: item.icon,
            placeholder: item.name,
            value: data.value[item.code],
            class: normalizeClass(["noerror light", { ltr: !item.rtl, rtl: item.rtl }]),
            onChange: $event => (onSearchChange($event, item.code))
          }, null, 8, ["icon", "placeholder", "value", "class", "onChange"]))
        }), 128))
      : (props.type === 'textarea')
        ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(data.items, (item) => {
            return (openBlock(), createBlock(Textarea, {
              key: item.code,
              icon: item.icon,
              placeholder: item.name,
              value: data.value[item.code],
              class: normalizeClass(["noerror light with-placeholder", { ltr: !item.rtl, rtl: item.rtl }]),
              onChange: $event => (onSearchChange($event, item.code))
            }, null, 8, ["icon", "placeholder", "value", "class", "onChange"]))
          }), 128))
        : createCommentVNode("", true)
  ]))
}
}

};
const MultilingualField = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-b018e604"]]);

export { MultilingualField as M };
//# sourceMappingURL=MultilingualField-D8spRJZH.js.map
