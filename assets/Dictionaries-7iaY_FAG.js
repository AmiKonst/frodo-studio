import { _ as _export_sfc, i as api, a as useI18n, r as reactive, A as computed, j as onMounted, y as resolveComponent, b as createElementBlock, o as openBlock, h as createBaseVNode, e as createCommentVNode, c as createBlock, g as createVNode, u as unref, k as Field, S as _sfc_main$3, n as normalizeClass, F as Fragment, d as renderList, O as withCtx, q as createTextVNode, t as toDisplayString, H as Img, D as Button, E as EmptyLabel, s as stores, w as withDirectives, v as vShow, K as Teleport, M as Loader, N as delay, G as message, f as ref, I as IconButton } from './index-CB0hEQSU.js';
import { P as PageHeader } from './PageHeader-CKOcrPUo.js';
import { _ as _sfc_main$4 } from './ViewMode-py3Xzb81.js';
import { M as MultilingualField } from './MultilingualField-DQjSW80M.js';
import { F as FileUploader } from './FileUploader-DT3vBmzF.js';

const DICTIONARIES_SORT = [
    {
        icon: 'sort-a-z',
        code: 'title',
        direction: 'asc',
        name: 'sort.default.title'
    }, {
        icon: 'sort-9-1',
        code: 'tracksCount',
        direction: 'asc',
        name: 'sort.default.tracks_count'
    }
];

const _hoisted_1$2 = { class: "items-list" };
const _hoisted_2$2 = { class: "filters" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "dictionary-preview" };
const _hoisted_5$1 = { class: "track-count" };
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = { class: "track-count" };

    
const _sfc_main$2 = {
  __name: 'Dictionaries',
  props: {
        dict: { type: String, required: true },
        sort: { type: Array, default: () => ([]) },
        id: { type: [String, null], default: null }
    },
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {

    const dict = api.dict();
    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        items: [],
        loading: false,
        skip: 0,
        take: 30, // Temp
        total: 0,
        sort: null,
        searchStr: null,
        viewMode: dict.viewModes[props.dict]?.length > 1 ? localStorage[`view-mode-${props.dict}`] || 'list' : dict.viewModes[props.dict][0] || 'list'
    });

    const defaultImg = computed(() => {
        const fns = api.dict();

        if (!fns[props.dict]?.defaultCover) {
            return;
        }

        return fns[props.dict]?.defaultCover();
    });

    const setSort = (item) => {
        if (data.sort?.code === item.code) {
            data.sort = null;
        } else {
            data.sort = item;
        }

        reload();
    };

    const onSearchChange = async (e) => {
        data.searchStr = e.target.value?.toLowerCase().trim() || '';
        data.skip = 0;

        clearTimeout(data.searchTimeout);

        data.searchTimeout = setTimeout(() => {
            delete data.searchTimeout;
            reload();
        }, 200);
    };

    const getItems = async () => {
        const fns = api.dict();

        if (!fns[props.dict]?.list) {
            return;
        }

        data.loading = true;

        if (!data.skip) {
            data.items = [];
        }

        const params = {
            skip: data.skip,
            take: data.take
        };

        if (data.sort) {
            params.sort = data.sort.code;
            params.sort_dir = data.sort.direction;
        }

        if (!!data.searchStr?.trim().length) {
            params.title = data.searchStr.toLowerCase().trim();
        }

        const payload = await fns[props.dict].list(params) || [];

        if (!payload) {
            data.loading = false;
        }

        setTimeout(() => {
            data.items.splice(data.items.length, 0, ...(payload.items || []));

            data.skip = data.items.length;
            data.total = payload.total;

            data.loading = false;

            // data.items.forEach(item => {
            //     fns[props.dict].remove(item.code, props.dict)
            // })

            // window.add = fns[props.dict].add;
        }, 200);
    };

    const reload = () => {
        data.skip = 0;
        getItems();
    };

    const add = (payload) => {
        data.items.unshift(payload);
        data.total += 1;
    };

    const update = (payload) => {
        if (!payload?.code) {
            return;
        }

        const item = data.items.find(item => item.code === payload.code);
        if (item) {
            data.items.splice(data.items.indexOf(item), 1, payload);
        }
    };

    const remove = (code) => {
        if (!code) {
            return;
        }

        const item = data.items.find(item => item.code === code);
        if (item) {
            data.items.splice(data.items.indexOf(item), 1);
            data.skip -= 1;
            data.total -= 1;
        }
    };

    __expose({
        remove,
        add,
        update,
        reload
    });

    onMounted(() => {
        getItems();
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      createVNode(Field, {
        icon: "search",
        placeholder: unref(t)('blocks.dictionaries.search'),
        class: "noerror light",
        onChange: onSearchChange
      }, null, 8, ["placeholder"]),
      (props.sort?.length)
        ? (openBlock(), createBlock(_sfc_main$3, {
            key: 0,
            sort: props.sort,
            code: data.sort?.code,
            onChange: setSort
          }, null, 8, ["sort", "code"]))
        : createCommentVNode("", true),
      (!unref(dict).viewModes[props.dict] || unref(dict).viewModes[props.dict].length > 1)
        ? (openBlock(), createBlock(_sfc_main$4, {
            key: 1,
            code: props.dict,
            modes: unref(dict).viewModes[props.dict],
            onChange: _cache[0] || (_cache[0] = $event => (data.viewMode = $event))
          }, null, 8, ["code", "modes"]))
        : createCommentVNode("", true)
    ]),
    (data.items.length)
      ? (openBlock(), createElementBlock("ul", {
          key: 0,
          class: normalizeClass(['items', data.viewMode])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
            return (openBlock(), createElementBlock("li", {
              class: normalizeClass({ active: props.id === item.code }),
              onClick: $event => (emit('change', item))
            }, [
              createBaseVNode("span", _hoisted_4$1, [
                (item.cover?.resized || defaultImg.value?.resized)
                  ? (openBlock(), createBlock(Img, {
                      key: 0,
                      preview: item.cover?.resized || defaultImg.value?.resized,
                      original: item.cover?.original || defaultImg.value?.original,
                      alt: item?.title,
                      wathermark: data.viewMode === 'list' ? null : props.dict
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_5$1, [
                          createVNode(_component_Icon, { icon: "note" }),
                          createBaseVNode("span", null, toDisplayString(item?.trackCount || 0), 1)
                        ]),
                        createTextVNode(" " + toDisplayString(item?.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["preview", "original", "alt", "wathermark"]))
                  : createCommentVNode("", true),
                (data.viewMode === 'list')
                  ? (openBlock(), createElementBlock("span", _hoisted_6$1, [
                      createTextVNode(toDisplayString(item.title) + " ", 1),
                      createBaseVNode("span", _hoisted_7$1, [
                        createVNode(_component_Icon, { icon: "note" }),
                        createBaseVNode("span", null, toDisplayString(item?.trackCount || 0), 1)
                      ])
                    ]))
                  : createCommentVNode("", true)
              ])
            ], 10, _hoisted_3$1))
          }), 256))
        ], 2))
      : createCommentVNode("", true),
    (data.loading || (data.items.length < data.total))
      ? (openBlock(), createBlock(Button, {
          key: 1,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)(`blocks.dictionaries.load`),
          onClick: getItems
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 2,
          class: "empty",
          title: unref(t)(`pages.${props.dict}.empty.title`),
          description: unref(t)(`pages.${props.dict}.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const Dictionaries$1 = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-c690cca2"]]);

const _hoisted_1$1 = {
  key: 0,
  class: "dictionary"
};
const _hoisted_2$1 = { class: "title" };
const _hoisted_3 = { class: "form-line" };
const _hoisted_4 = { class: "attention" };
const _hoisted_5 = { class: "cover-preview" };
const _hoisted_6 = { class: "form-line" };
const _hoisted_7 = {
  key: 1,
  class: "loader"
};
    
const _sfc_main$1 = {
  __name: 'DictionaryInfo',
  props: {
        dict: { type: String, required: true },
        item: { type: [Object, null], default: null }
    },
  emits: ['update', 'add', 'remove'],
  setup(__props, { emit: __emit }) {

    const modals = stores.modals();

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        code: null,
        title: {},
        cover: {},
        newCover: null,
        loading: true
    });

    const saveDisabled = computed(() => {
        return !data.title || !data.title['en-US'];
    });

    const onTitleChange = (value) => {
        data.title = value || {};
    };

    const remove = async () => {
        const fns = api.dict();

        if (!fns[props.dict]?.remove) {
            return;
        }

        modals.confirm({
            title: t(`pages.${props.dict}.remove.confirm.title`),
            body: t(`pages.${props.dict}.remove.confirm.description`, { name: data.title['en-US'] }),
            onOk: async () => {
                await fns[props.dict].remove(data.code);

                emit('remove', data.code);
                modals.open('success', {
                    data: {
                        title: t(`pages.${props.dict}.remove.done.title`),
                        close: t(`pages.${props.dict}.remove.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    const saveChanges = async () => {
        const fns = api.dict();

        if (!fns[props.dict]?.add) {
            return;
        }

        if (!fns[props.dict]?.update) {
            return;
        }

        data.updating = true;

        let payload;

        if (data.code) {
            payload = await fns[props.dict].update(data);
        } else {
            payload = await fns[props.dict].add(data);
        }

        await delay(200);
        data.updating = false;

        if (payload?.code) {
            message.info(t(`pages.${props.dict}.${ data.code ? 'edit' : 'add' }.done.title`));
            // modals.open('success', {
            //     data: {
            //         timer: 3,
            //         title: t(`pages.${props.dict}.${ data.code ? 'edit' : 'add' }.done.title`),
            //         close: t(`pages.${props.dict}.${ data.code ? 'edit' : 'add' }.done.close`)
            //     },
            //     quietClose: true
            // });
        }

        if (data.code) {
            emit('update', payload);
        } else {
            emit('add', payload);
        }

        data.code = payload.code;
        data.cover = payload.cover || {};
        data.newCover = null;
    };

    const updateCover = (e) => {
        if (e?.name) {
            data.newCover = e;
        }
    };

    const getItem = async () => {
        data.loading = true;

        const fns = api.dict();

        if (!fns[props.dict]?.get) {
            return;
        }

        const payload = await fns[props.dict].get(props.item.code);

        data.code = payload?.code;
        data.title = payload?.title || {};
        data.cover = payload?.cover || {};

        await delay(200);

        data.loading = false;
    };

    onMounted(() => {
        if (props.item?.code) {
            getItem();
        } else {
            data.loading = false;
        }
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (!data.loading)
      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
          createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(t)(`pages.${props.dict}.${ props.item?.code ? 'edit' : 'add' }.title`)), 1),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("label", null, [
              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.${props.dict}.fields.cover`)), 1),
              createBaseVNode("span", _hoisted_4, toDisplayString(unref(t)(`pages.${props.dict}.fields.min-cover-size`)), 1)
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(FileUploader, {
                class: "upload",
                icon: "upload-img",
                acceptedFormats: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/jfif'],
                loading: data.loading,
                dropZone: true,
                showPreview: true,
                preview: data.cover?.resized,
                zoneType: "square-image",
                onChange: updateCover
              }, null, 8, ["loading", "preview"])
            ])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.${props.dict}.fields.title`)), 1),
            createVNode(MultilingualField, {
              value: data.title,
              onChange: onTitleChange
            }, null, 8, ["value"])
          ]),
          (openBlock(), createBlock(Teleport, { to: "#head-buttons" }, [
            (data.code)
              ? (openBlock(), createBlock(Button, {
                  key: 0,
                  icon: "trash",
                  name: unref(t)(`pages.${props.dict}.remove.title`),
                  class: "size-s tertiary invert",
                  onClick: remove
                }, null, 8, ["name"]))
              : createCommentVNode("", true),
            createVNode(Button, {
              name: unref(t)(`pages.${props.dict}.${ props.item?.code ? 'edit' : 'add' }.save`),
              class: "size-s secondary",
              disabled: saveDisabled.value,
              onClick: saveChanges
            }, null, 8, ["name", "disabled"])
          ]))
        ], 512)), [
          [vShow, !data.updating]
        ])
      : createCommentVNode("", true),
    (data.loading || data.updating)
      ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("div", null, [
            createVNode(Loader, {
              inside: true,
              class: "tertiary"
            })
          ])
        ]))
      : createCommentVNode("", true)
  ], 64))
}
}

};
const DictionaryInfo = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-c802e951"]]);

const _hoisted_1 = { class: "box" };
const _hoisted_2 = {
  key: 0,
  class: "item-detail"
};

    
const _sfc_main = {
  __name: 'Dictionaries',
  props: {
        dict: { type: String, required: true },
        sort: { type: Array, default: () => ([]) }
    },
  setup(__props) {

    const props = __props;

    const { t } = useI18n();
    const dictionaries = ref(null);

    const data = reactive({
        item: null
    });

    const onSelectItem = (item) => {
        data.item = null;
        setTimeout(() => {
            data.item = item?.code ? item : null;
        });
    };

    const add = () => {
        data.item = null;
        setTimeout(() => {
            data.item = {};
        });
    };

    const onRemove = (code) => {
        data.item = null;
        dictionaries.value.remove(code);
    };

    const onUpdate = (payload) => {
        dictionaries.value.update(payload);
    };

    const onAdd = (payload) => {
        dictionaries.value.add(payload);
    };


return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(PageHeader, {
      title: unref(t)(`pages.${ props.dict }.title`),
      detail: !!data.item
    }, {
      default: withCtx(() => [
        (!data.item)
          ? (openBlock(), createBlock(Button, {
              key: 0,
              icon: "plus",
              onClick: add,
              class: "size-s",
              name: unref(t)(`pages.${ props.dict }.add.title`)
            }, null, 8, ["name"]))
          : (openBlock(), createBlock(IconButton, {
              key: 1,
              icon: "close",
              onClick: _cache[0] || (_cache[0] = $event => (data.item = null)),
              class: "size-s tertiary invert",
              name: unref(t)(`pages.${ props.dict }.cancel`)
            }, null, 8, ["name"]))
      ]),
      _: 1
    }, 8, ["title", "detail"]),
    createBaseVNode("div", _hoisted_1, [
      createVNode(Dictionaries$1, {
        id: data.item?.code,
        sort: props.sort,
        ref_key: "dictionaries",
        ref: dictionaries,
        dict: props.dict,
        onChange: onSelectItem
      }, null, 8, ["id", "sort", "dict"]),
      (data.item)
        ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(DictionaryInfo, {
              dict: props.dict,
              item: data.item,
              onAdd: onAdd,
              onUpdate: onUpdate,
              onRemove: onRemove
            }, null, 8, ["dict", "item"])
          ]))
        : createCommentVNode("", true)
    ])
  ], 64))
}
}

};
const Dictionaries = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-6e88e9b7"]]);

export { DICTIONARIES_SORT as D, Dictionaries as a };
//# sourceMappingURL=Dictionaries-7iaY_FAG.js.map
