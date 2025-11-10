import { a as useI18n, r as reactive, b as createElementBlock, o as openBlock, d as renderList, F as Fragment, c as createBlock, e as createCommentVNode, n as normalizeClass, u as unref, I as IconButton } from './index-CT6y-4pe.js';

const _sfc_main = {
  __name: 'ViewMode',
  props: {
        code: { type: String, default: '' },
        modes: { type: Array, default: (['list', 'dashboard']) },
        mode: { type: String, default: 'list' },
        invert: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const modes = {
        list: {
            icon: 'preview-list',
            title: 'ui.view-mode.list'
        },
        dashboard: {
            icon: 'preview-dashboard',
            title: 'ui.view-mode.dashboard'
        },
        table: {
            icon: 'preview-table',
            title: 'ui.view-mode.table'
        }
    };

    const data = reactive({
        mode: localStorage[`view-mode-${props.code}`] || props.mode || props.modes[0]
    });

    const setMode = (mode) => {
        if (props.disabled) {
            return;
        }

        let index = props.modes.indexOf(mode) + 1;

        if (index === props.modes.length) {
            index = 0;
        }

        data.mode = props.modes[index];
        emit('change', data.mode);

        localStorage[`view-mode-${props.code}`] = data.mode;
    };

return (_ctx, _cache) => {
  return (openBlock(true), createElementBlock(Fragment, null, renderList(props.modes, (mode) => {
    return (openBlock(), createElementBlock(Fragment, { key: mode }, [
      (mode === data.mode)
        ? (openBlock(), createBlock(IconButton, {
            key: 0,
            icon: modes[mode]?.icon,
            title: `${unref(t)(modes[mode]?.title)}`,
            class: normalizeClass([{ invert: props.invert }, "size-m tertiary"]),
            disabled: props.disabled,
            onClick: $event => (setMode(mode))
          }, null, 8, ["icon", "title", "class", "disabled", "onClick"]))
        : createCommentVNode("", true)
    ], 64))
  }), 128))
}
}

};

export { _sfc_main as _ };
//# sourceMappingURL=ViewMode-B34Duc8y.js.map
