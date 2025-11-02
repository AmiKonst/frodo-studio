import { _ as _export_sfc, a as useI18n, f as ref, j as onMounted, y as resolveComponent, b as createElementBlock, o as openBlock, h as createBaseVNode, c as createBlock, e as createCommentVNode, z as withKeys, n as normalizeClass, t as toDisplayString, I as IconButton, r as reactive, A as computed, B as withModifiers, C as normalizeStyle, q as createTextVNode, g as createVNode, u as unref, D as Button, G as message } from './index-WKVrv8ZX.js';

const _hoisted_1$1 = ["name", "maxlength", "disabled", "placeholder", "autocomplete", "readonly"];
const _hoisted_2 = ["title"];
const _hoisted_3 = { class: "actions-block" };
const _hoisted_4 = { class: "error" };


const _sfc_main$1 = {
  __name: 'Textarea',
  props: {
    isError: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    name: { type: [String, Number], default: '' },
    placeholder: { type: String, default: '' },
    maxlength: { type: [Number, null], default: null },
    disabled: { type: Boolean, default: false },
    error: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
    readonly: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    info: { type: [String, Boolean], default: false },
    autofocus: { type: [String, Boolean], default: false }
},
  emits: ['change', 'pressEnter'],
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;

const { t } = useI18n();

const textarea = ref(null);

const emit = __emit;

__expose({ textarea });

const clean = () => {
    textarea.value.value = '';
    setTimeout(() => {
        onInput({ target: textarea.value });
        textarea.value.focus();
    });
};

onMounted(() => {
    if (props.value !== null) {
        textarea.value.value = props.value;

        textarea.value.style.height = 'auto';
        textarea.value.style.height = `${textarea.value.scrollHeight}px`;
    }

    if (props.autofocus) {
        textarea.value.focus();
    }
});

const onPressEnter = (evn) => {
    onInput(evn);
    emit('pressEnter');
};

const onInput = (evn) => {
    evn.target.style.height = 'auto';
    evn.target.style.height = `${ evn.target.scrollHeight }px`;

    let value = evn.target.value.trimStart().replace(/\n{4,}/g, '\n\n\n');
    evn.target.value = value;
    emit('change', evn);
};

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["textarea", [
        props.icon ? 'with-icon' : '',
        props.isError || props.error ? 'with-error' : ''
    ]])
  }, [
    createBaseVNode("div", null, [
      createBaseVNode("textarea", {
        class: normalizeClass({
                    'without-placeholder': !props.placeholder,
                    clearable: props.clearable && !props.readonly,
                    info: !!props.info
                }),
        ref_key: "textarea",
        ref: textarea,
        name: props.name,
        maxlength: props.maxlength,
        disabled: props.disabled,
        placeholder: props.placeholder,
        autocomplete: __props.autocomplete,
        readonly: props.readonly,
        onInput: onInput,
        onKeyup: withKeys(onPressEnter, ["enter"])
      }, null, 42, _hoisted_1$1),
      createBaseVNode("span", {
        class: "placeholder",
        title: props.placeholder
      }, toDisplayString(props.placeholder), 9, _hoisted_2),
      (props.icon)
        ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: props.icon
          }, null, 8, ["icon"]))
        : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_3, [
        (props.clearable && !props.readonly)
          ? (openBlock(), createBlock(IconButton, {
              key: 0,
              tabindex: "-1",
              icon: "close",
              class: "tertiary size-s clean",
              onClick: clean
            }))
          : createCommentVNode("", true),
        (props.info)
          ? (openBlock(), createBlock(_component_Icon, {
              key: 1,
              icon: "help",
              class: "icon-info",
              title: props.info
            }, null, 8, ["title"]))
          : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("span", _hoisted_4, toDisplayString(props.error), 1)
  ], 2))
}
}

};
const Textarea = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-ce845033"]]);

const _hoisted_1 = ["accept", "multiple"];
const _sfc_main = {
  __name: "FileUploader",
  props: {
    acceptedFormats: { type: Array, default: () => [] },
    maxSize: { type: Number, default: 50 * 1024 * 1024 },
    maxFiles: { type: Number, default: 1 },
    icon: { type: String, default: "upload" },
    loading: { type: Boolean, default: false },
    dropZone: { type: Boolean, default: false },
    description: { type: String, default: "ui.file-uploader.drop.description" },
    zoneType: { type: String, default: "" },
    zoneSize: { type: [Object, null], default: null },
    showPreview: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    preview: { type: [String, null], default: null }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const fileInput = ref(null);
    const emit = __emit;
    const data = reactive({
      over: false,
      files: []
    });
    const selectFile = () => {
      if (props.disabled) {
        return;
      }
      if (props.loading) {
        return;
      }
      fileInput.value.click();
    };
    const props = __props;
    const previewSrc = computed(() => {
      if (!props.showPreview || !(data.files.length || props.preview) || props.maxFiles !== 1) {
        return;
      }
      if (data.files?.length) {
        return URL.createObjectURL(data.files[0]);
      }
      if (props.preview) {
        return encodeURI(`${"https://api.wetap-tech-service.ru"}${props.preview}`);
      }
    });
    const onDragEnter = () => data.over = true;
    const onDragLeave = () => data.over = false;
    const handleFiles = (e) => {
      data.over = false;
      if (!e?.target?.files?.length) {
        return;
      }
      const files = Array.from(e.target.files);
      handleFileChange(files);
    };
    const handleDrop = (e) => {
      const files = Array.from(e.dataTransfer.files);
      handleFileChange(files);
    };
    const handleFileChange = (files) => {
      if (props.disabled) {
        return;
      }
      data.over = false;
      if (!files.length) {
        return;
      }
      if (files.length > props.maxFiles) {
        message.info(t("ui.file-uploader.max-files", { msg: props.maxFiles }));
        return;
      }
      let error = false;
      const items = files.splice(0, props.maxFiles);
      const extensions = props.acceptedFormats.map((item) => item.split("/")[1] || item);
      items.forEach((file) => {
        const ext = file.name.split(".").pop().toLowerCase();
        if (!extensions.includes(ext)) {
          message.info(t("ui.file-uploader.format", { msg: extensions.join(", ") }));
          error = true;
          return;
        }
        if (file.size > props.maxSize) {
          message.info(t("ui.file-uploader.size", { name: file.name, size: parseInt(props.maxSize / (1024 * 1024)) }));
          error = true;
          return;
        }
      });
      if (error) {
        return;
      }
      data.files = items;
      if (items.length > 1) {
        emit("change", items);
      } else {
        emit("change", items[0]);
      }
    };
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["upload", { "dropzone-upload": props.dropZone }]),
        style: normalizeStyle({ "background-image": previewSrc.value ? `url(${previewSrc.value})` : null })
      }, [
        createBaseVNode("input", {
          type: "file",
          ref_key: "fileInput",
          ref: fileInput,
          style: { "display": "none" },
          accept: __props.acceptedFormats.join(", "),
          multiple: props.maxFiles !== 1,
          onChange: handleFiles
        }, null, 40, _hoisted_1),
        !props.dropZone ? (openBlock(), createBlock(IconButton, {
          key: 0,
          icon: props.icon,
          class: "size-m round upload",
          loading: props.loading,
          onClick: selectFile
        }, null, 8, ["icon", "loading"])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["dropzone", [props.zoneType, data.over ? "over" : "", previewSrc.value ? "light" : "", props.loading ? "loading" : ""]]),
          style: normalizeStyle({ width: props.zoneSize?.width, height: props.zoneSize?.height }),
          onClick: selectFile,
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onDragenter: withModifiers(onDragEnter, ["self"]),
          onDragleave: withModifiers(onDragLeave, ["self"]),
          onDrop: withModifiers(handleDrop, ["prevent"])
        }, [
          createBaseVNode("p", {
            class: normalizeClass({ loading: props.loading })
          }, [
            createTextVNode(toDisplayString(unref(t)(props.description)) + " ", 1),
            createVNode(_component_Icon, {
              icon: props.icon
            }, null, 8, ["icon"])
          ], 2),
          props.loading ? (openBlock(), createBlock(Button, {
            key: 0,
            loading: true,
            class: "tertiary size-l loader",
            name: unref(t)(props.description)
          }, null, 8, ["name"])) : createCommentVNode("", true)
        ], 38))
      ], 6);
    };
  }
};
const FileUploader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e8bfd5d"]]);

export { FileUploader as F, Textarea as T };
//# sourceMappingURL=FileUploader-CNexPYMz.js.map
