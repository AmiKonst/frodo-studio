import { _ as _export_sfc, a as useI18n, A as computed, i as api, b as createElementBlock, e as createCommentVNode, o as openBlock, c as createBlock, h as createBaseVNode, H as Img, t as toDisplayString, u as unref, r as reactive, ap as code, j as onMounted, X as mergeProps, Y as AutoComplete, y as resolveComponent, ar as resolveDirective, w as withDirectives, s as stores, O as withCtx, F as Fragment, d as renderList, g as createVNode, D as Button, n as normalizeClass, V as _sfc_main$s, p as onBeforeUnmount, f as ref, C as normalizeStyle, q as createTextVNode, as as onUnmounted, I as IconButton, l as renderSlot, aq as draggable, E as EmptyLabel, at as resolveDynamicComponent, au as useSlots, av as nextTick, m as watch, B as withModifiers, k as Field, v as vShow, a2 as createSlots, x as _sfc_main$u, ak as TRACK_CONTRIBUTOR_ROLES, aw as TRACK_VERSIONS, ax as maskPreviewTime, J as Toggler, ay as ALL_LANGUAGES_LIST, az as maskISRC, aA as maskISWC, a0 as DateField, P as hooks, U as markRaw, K as Teleport, M as Loader, N as delay, G as message, W as TrackPreview } from './index-DFUN-JeE.js';
import { P as PageHeader } from './PageHeader-weH05Po4.js';
import { _ as _sfc_main$t } from './ViewMode-FyRSJmQ_.js';
import { F as FileUploader, T as Textarea } from './FileUploader-DpheBOFm.js';

const _hoisted_1$h = {
  key: 0,
  class: "artist-preview"
};

    
const _sfc_main$r = {
  __name: 'PageHeaderArtistTitle',
  props: {
        artist: { type: [Object, null], default: null }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

    const defaultProfileImage = computed(() => {
        return api.artists().defaultProfileImage;
    });

return (_ctx, _cache) => {
  return (props.artist)
    ? (openBlock(), createElementBlock("div", _hoisted_1$h, [
        (props.artist?.profileImage?.resized || defaultProfileImage.value?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: props.artist?.profileImage?.resized || defaultProfileImage.value?.resized,
              original: props.artist?.profileImage?.original || defaultProfileImage.value?.original,
              alt: props.artist?.name
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("span", null, toDisplayString(props.artist?.name || unref(t)('pages.artists.menu.empty-name')), 1)
      ]))
    : createCommentVNode("", true)
}
}

};
const PageHeaderArtistTitle = /*#__PURE__*/_export_sfc(_sfc_main$r, [['__scopeId',"data-v-da79143e"]]);

const _sfc_main$q = {
  __name: 'DictAutoComplete',
  props: {
        dict: { type: String, default: '' }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const props = __props;

    const data = reactive({
        code: code(),
        optionList: []
    });

    const onAutoCompleteSearch = async (value) => {
        if (!props.dict || !api.dict()[props.dict]) {
            return;
        }
        const searchStr = value?.toLowerCase().trim();

        const params = {
            skip: 0,
            take: 20,
            sort: 'title',
            sort_dir: 'asc'
        };

        if (searchStr?.trim()) {
            params.title = searchStr.trim().toLowerCase();
        }

        const payload = await api.dict()[props.dict].list(params, data.code);

        if (!payload?.items) {
            data.optionList = [];
            return;
        }

        data.optionList = await payload.items.map(item => ({ code: item.code, name: item.title, id: item.id }));
    };

    onMounted(() => {
        onAutoCompleteSearch();
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(AutoComplete, mergeProps(props, {
    optionList: data.optionList || [],
    onSearch: onAutoCompleteSearch,
    onChange: _cache[0] || (_cache[0] = $event => (emit('change', $event)))
  }), null, 16, ["optionList"]))
}
}

};

const _hoisted_1$g = {
  key: 0,
  class: "state"
};

    
const _sfc_main$p = {
  __name: 'IconState',
  props: {
        state: { type: String, default: '' }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");
  const _directive_tooltip = resolveDirective("tooltip");

  return (props.state)
    ? (openBlock(), createElementBlock("span", _hoisted_1$g, [
        (props.state === 'PENDING')
          ? withDirectives((openBlock(), createBlock(_component_Icon, {
              key: 0,
              icon: "workflow-pending",
              class: "pending"
            }, null, 512)), [
              [_directive_tooltip, unref(t)('ui.icon-state.pending')]
            ])
          : createCommentVNode("", true),
        (props.state === 'CONFIRMED')
          ? withDirectives((openBlock(), createBlock(_component_Icon, {
              key: 1,
              icon: "workflow-confirmed",
              class: "confirmed"
            }, null, 512)), [
              [_directive_tooltip, unref(t)('ui.icon-state.confirmed')]
            ])
          : createCommentVNode("", true),
        (props.state === 'REJECTED')
          ? withDirectives((openBlock(), createBlock(_component_Icon, {
              key: 2,
              icon: "workflow-rejected",
              class: "rejected"
            }, null, 512)), [
              [_directive_tooltip, unref(t)('ui.icon-state.rejected')]
            ])
          : createCommentVNode("", true)
      ]))
    : createCommentVNode("", true)
}
}

};
const IconState = /*#__PURE__*/_export_sfc(_sfc_main$p, [['__scopeId',"data-v-d028e323"]]);

const _hoisted_1$f = ["onClick"];

    
const _sfc_main$o = {
  __name: 'StateKebabMenu',
  props: {
        to: { type: Boolean, default: true },
        invert: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
        state: { type: String, default: '' },
        states: { type: Array, default: () => ([]) }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const locale = stores.locale();
    const { t } = useI18n();
    const emit = __emit;

    const data = reactive({});

    const props = __props;

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        (props.state && props.states?.length)
          ? (openBlock(), createBlock(_sfc_main$s, {
              key: 0,
              leftAuto: !unref(locale).rtl,
              rightAuto: unref(locale).rtl,
              secondary: true,
              diabled: props.disabled || !!props.states?.length,
              size: "size-s",
              onToggle: _cache[0] || (_cache[0] = $event => (data.stateOpened = !data.stateOpened))
            }, {
              trigger: withCtx(() => [
                createVNode(Button, {
                  icon: `workflow-${ props.state.toLowerCase() }`,
                  class: normalizeClass(["size-s tertiary", {
                        active: data.stateOpened,
                        invert: !!props.invert
                    }]),
                  name: unref(t)(`state.default.code.${ props.state.toLowerCase() }`),
                  kebabTrigger: !!props.states?.length
                }, null, 8, ["icon", "class", "name", "kebabTrigger"])
              ]),
              default: withCtx(() => [
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.states, (item) => {
                    return (openBlock(), createElementBlock("li", {
                      key: item,
                      onClick: $event => (emit('change', item))
                    }, [
                      createVNode(_component_Icon, {
                        icon: `workflow-${ item.toLowerCase() }`
                      }, null, 8, ["icon"]),
                      createBaseVNode("span", null, toDisplayString(unref(t)(`state.default.${props.to ? 'to' : 'code'}.${ item.toLowerCase() }`)), 1)
                    ], 8, _hoisted_1$f))
                  }), 128))
                ])
              ]),
              _: 1
            }, 8, ["leftAuto", "rightAuto", "diabled"]))
          : createCommentVNode("", true)
      ], 64))
    
}
}

};

function useGlobalDigitListener(callback) {
    const handleKeydown = (e) => {
        const activeEl = document.activeElement;
        const isInputFocused = activeEl && (
            activeEl.tagName === 'INPUT' ||
            activeEl.tagName === 'TEXTAREA' ||
            activeEl.isContentEditable
        );

        if (isInputFocused) {
            return;
        }

        // Проверяем, что на странице нет modal-box-background или dp__outer_menu_wrap
        if (
            document.querySelector('.modal-box-background') ||
            document.querySelector('.dp__outer_menu_wrap')
        ) {
            return;
        }

        // Проверяем, что нажата цифра (0–9)
        if (e.key >= '0' && e.key <= '9') {
            callback(e.key);
        }
    };

    onMounted(() => {
        window.addEventListener('keydown', handleKeydown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleKeydown);
    });
}

const _hoisted_1$e = { class: "items-editor-header" };
const _hoisted_2$8 = ["id"];
const _hoisted_3$6 = { class: "title" };
const _hoisted_4$4 = { key: 0 };
const _hoisted_5$3 = {
  key: 0,
  class: "fields"
};
const _hoisted_6$1 = { key: 0 };

    
const _sfc_main$n = {
  __name: 'ItemsEditorHeader',
  props: {
        sections: { type: Array, default: () => ([]) }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {
    const locale = stores.locale();

    const { t } = useI18n();
    const sectionRefs = ref([]);

    const props = __props;

    const items = computed(() => {
        return [
            {
                id: 'preview',
                width: 324
            },
            ...props.sections.map(item => ({
                ...item,
                fields: Object.keys(item.metadata.fields).map(id => ({
                        id,
                        ...item.metadata.fields[id],
                        width: item.metadata.fields[id].width || 200
                    })),
                width: item.metadata?.direction === 'row' ? 
                    Object.values(item.metadata.fields).reduce((acc, field) => acc + (field.width || 200), 0) : 
                    Math.max(...Object.values(item.metadata.fields).map(field => field.width || 200))
            })),
            {
                id: 'actions',
                width: 140
            }
        ]
    });

    const scrollToSection = (id) => {
        const el = sectionRefs.value.find((e) => e?.id === id);
        const container = sectionRefs.value[0]?.closest('.box.table');

        if (el && container) {
            const offsetLeft = el.offsetLeft;
            const elementWidth = el.offsetWidth;
            container.clientWidth;
            const scrollWidth = container.scrollWidth;
            const extraOffset = 300;

            if (locale.rtl) {
                // Расстояние от правого края контейнера до правого края элемента
                const elementRightOffset = scrollWidth - offsetLeft - elementWidth;
                // При отрицательном scrollLeft целевое значение = -elementRightOffset + extraOffset
                const targetScrollLeft = -(elementRightOffset - extraOffset);

                container.scrollTo({
                    left: targetScrollLeft,
                    behavior: 'smooth'
                });
            } else {
                container.scrollTo({
                    left: offsetLeft - extraOffset,
                    behavior: 'smooth'
                });
            }
        }
    };

    useGlobalDigitListener((digit) => {
        if (items.value[digit ? digit : 10]) {
            scrollToSection(items.value[digit ? digit : 10].id);
        }
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock("div", _hoisted_1$e, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
      return (openBlock(), createElementBlock("div", {
        key: item.id,
        ref_for: true,
        ref: el => (sectionRefs.value[id] = el),
        id: item.id,
        style: normalizeStyle({
                width: item.width + 'px',
                'max-width': item.width + 'px',
                'min-width': item.width + 'px'
            }),
        class: "section"
      }, [
        createBaseVNode("div", _hoisted_3$6, [
          (item.name)
            ? (openBlock(), createElementBlock("label", _hoisted_4$4, [
                createTextVNode(toDisplayString(unref(t)(item.name)) + " ", 1),
                (item.metadata?.help?.length)
                  ? withDirectives((openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      icon: "help",
                      class: "help"
                    }, null, 512)), [
                      [_directive_tooltip, item.metadata.help.map(item => `<b>${item.title}</b><br/>${item.description}`).join('<br/><br/>')]
                    ])
                  : createCommentVNode("", true)
              ]))
            : createCommentVNode("", true)
        ]),
        (item.fields)
          ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(item.fields, (field) => {
                return (openBlock(), createElementBlock("div", {
                  key: field.id,
                  style: normalizeStyle({
                        width: field.width + 'px',
                        'max-width': field.width + 'px',
                        'min-width': field.width + 'px'
                    })
                }, [
                  createBaseVNode("label", null, [
                    createTextVNode(toDisplayString(field.name) + " ", 1),
                    (field.attentions?.length)
                      ? withDirectives((openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          icon: "help",
                          class: "help"
                        }, null, 512)), [
                          [_directive_tooltip, field.attentions.join('<br/>')]
                        ])
                      : createCommentVNode("", true)
                  ]),
                  (field.attention)
                    ? (openBlock(), createElementBlock("span", _hoisted_6$1, toDisplayString(field.attention), 1))
                    : createCommentVNode("", true)
                ], 4))
              }), 128))
            ]))
          : createCommentVNode("", true)
      ], 12, _hoisted_2$8))
    }), 128))
  ]))
}
}

};
const ItemsEditorHeader = /*#__PURE__*/_export_sfc(_sfc_main$n, [['__scopeId',"data-v-bf7b8356"]]);

const _sfc_main$m = {
  __name: 'FullScreenToggle',
  props: {
        target: { type: String, default: 'body' },
        invert: { type: Boolean, default: false }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

    const isFullScreen = ref(false);
    let targetElement = null;

    const getTargetElement = () => {
        if (props.target === 'body') {
            return document.body;
        } else {
            return document.querySelector(props.target);
        }
    };

    const enterFullScreen = () => {
        targetElement = getTargetElement();

        if (!targetElement) {
            return;
        }

        if (targetElement.requestFullscreen) {
            targetElement.requestFullscreen();
        } else if (targetElement.webkitRequestFullscreen) {
            targetElement.webkitRequestFullscreen();
        } else if (targetElement.mozRequestFullScreen) {
            targetElement.mozRequestFullScreen();
        } else if (targetElement.msRequestFullscreen) {
            targetElement.msRequestFullscreen();
        }
    };

    const exitFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else if (document.msFullscreenElement) {
            document.msExitFullscreen();
        }
    };

    const onFullScreenChange = () => {
        isFullScreen.value = !!document.fullscreenElement;
    };

    const onKeyDown = (e) => {
        if (e.key === 'Escape' && isFullScreen.value) {
            exitFullScreen();
        }
    };

    onMounted(() => {
        document.addEventListener('fullscreenchange', onFullScreenChange);
        window.addEventListener('keydown', onKeyDown);
    });

    onUnmounted(() => {
        document.removeEventListener('fullscreenchange', onFullScreenChange);
        window.removeEventListener('keydown', onKeyDown);
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (isFullScreen.value)
      ? (openBlock(), createBlock(IconButton, {
          key: 0,
          icon: "minimize",
          title: unref(t)('ui.full-screen-toggle.exit'),
          class: normalizeClass([{ invert: props.invert }, "size-m tertiary"]),
          onClick: exitFullScreen
        }, null, 8, ["title", "class"]))
      : createCommentVNode("", true),
    (!isFullScreen.value)
      ? (openBlock(), createBlock(IconButton, {
          key: 1,
          icon: "maximaze",
          title: unref(t)('ui.full-screen-toggle.enter'),
          class: normalizeClass([{ invert: props.invert }, "size-m tertiary"]),
          onClick: enterFullScreen
        }, null, 8, ["title", "class"]))
      : createCommentVNode("", true)
  ], 64))
}
}

};

const _hoisted_1$d = { class: "items-editor" };
const _hoisted_2$7 = {
  key: 0,
  class: "item-detail"
};
const _hoisted_3$5 = {
  key: 0,
  class: "item-preview"
};

    
const _sfc_main$l = {
  __name: 'ItemsEditor',
  props: {
        t: { type: [Object, null], default: null },
        code: { type: String },
        canAdd: { type: Boolean, default: false },
        sortable: { type: Boolean, default: false },
        getItem: { type: Function, default: () => {} },
        selectItems: { type: Function, default: () => {} },
        items: { type: [Array, null], default: null }
    },
  emits: ['update', 'add', 'remove', 'close', 'sort'],
  setup(__props, { expose: __expose, emit: __emit }) {

    const emit = __emit;

    const modals = stores.modals();
    stores.user();
    const locale = stores.locale();

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        code: code(),
        item: null,
        items: props.items?.length ? JSON.parse(JSON.stringify(props.items)) : [],
        sections: [],
        viewMode: localStorage[`view-mode-${props.code}`] || 'list',
        actions: {}
    });

    const setViewMode = (mode) => {
        if (data.hasChanges?.length && (data.item?.localId !== data.hasChanges[0]) && (data.item?.id !== data.hasChanges[0])) {
            data.item = data.items.find(item => (item.id && item.id === data.hasChanges[0])
                || item.localId === data.hasChanges[0]);
        }

        data.viewMode = mode;
    };

    const setSections = (payload) => {
        if (!data.sections?.length) {
            data.sections = payload || [];
        }
    };

    // Actions
        const setActions = (payload) => {
            if (!payload?.item?.id && !payload?.item?.localId) {
                return;
            }

            if (!!payload?.actions?.length) {
                data.actions[payload?.item?.id || payload?.item?.localId] = payload.actions;
            } else {
                delete data.actions[payload?.item?.id || payload?.item?.localId];
            }
        };

        const clearActions = (payload) => {
            if (!payload?.id && !payload?.localId) {
                return;
            }

            delete data.actions[payload?.id || payload?.localId];
        };

        // Save all
        const saveAllActions = computed(() => {
            const result = [];
            Object.values(data.actions).forEach(item =>
                result.splice(0, 0, ...(item?.filter(action => action.type === 'save' || action.type === 'create') || []))
            );

            return result;
        });

        const saveAll = async () => {
            await Promise.all(saveAllActions.value.filter(item => !!item.action).map(async (item) => {
                await item.action();
            }));

            // await delay(200);
        };

    const onEdit = (payload) => {
        if (!payload?.id && !payload?.localId) {
            return;
        }

        if (payload?.title) {
            if (!data.hasChanges) {
                data.hasChanges = [];
            }
            if (data.hasChanges.indexOf(payload?.id || payload?.localId) === -1) {
                data.hasChanges.push(payload?.id || payload?.localId);
            }
        }

        const item = data.items.find(item => (item.id === payload.id && payload.id)
            || (item.localId === payload.localId && payload.localId));

        if (item) {
            data.items.splice(data.items.indexOf(item), 1, payload);
        } else {
            data.items.push(payload);
        }
    };

    const clearChanges = (id, localId) => {
        if (data.hasChanges?.length) {
            if (id && data.hasChanges.indexOf(id) !== -1) {
                data.hasChanges.splice(data.hasChanges.indexOf(id), 1);
            }

            if (localId && data.hasChanges.indexOf(localId) !== -1) {
                data.hasChanges.splice(data.hasChanges.indexOf(localId), 1);
            }

            if (!data.hasChanges?.length) {
                delete data.hasChanges;
            }
        }
    };

    const onUpdate = (payload, mode) => {
        if (!payload?.id) {
            return;
        }

        const item = data.items.find(item => item.id === payload.id);
        if (item) {
            data.items.splice(data.items.indexOf(item), 1, payload);
        }

        emit('update', payload);

        if (mode !== 'not-clear-changes') {
            clearChanges(payload?.id, payload?.localId);
        }

        if (mode === 'add-one') {
            addOne();
        }
    };

    const onAdd = (payload, mode) => {
        if (!payload?.id && !payload?.localId) {
            return;
        }

        const item = data.items.find(item => (item.id === payload.id && payload.id)
            || (item.localId === payload.localId && payload.localId));

        if (payload.id && data.item.localId === payload.localId) {
            data.item.id = payload.id;
        }

        if (item) {
            data.items.splice(data.items.indexOf(item), 1, payload);
        } else {
            data.items.push(payload);
        }

        emit('add', payload);

        clearChanges(payload?.id, payload?.localId);

        if (mode === 'add-one') {
            addOne();
        }
    };

    const onRemove = (id) => {
        if (!id) {
            return;
        }

        const item = data.items.find(item => item.id === id);
        if (item) {
            data.items.splice(data.items.indexOf(item), 1);
        }

        emit('remove', id);

        if (data.item?.id === id) {
            data.item = null;
        }

        clearActions({ id });
        clearChanges(id);
    };

    const create = (count) => {
        let i = 1;
        while (i <= Math.max(count, 1)) {
            data.items.push({ localId: code() });
            i += 1;
        }

        setItem(data.items[data.items.length - Math.max(count, 1)]);
    };

    const add = (payload) => {
        if (data.items.some(item => item.id === payload.id)) {
            return;
        }

        data.items.push(payload);
    };

    const addOne = () => {
        const doIt = () => {
            const currentIndex = data.items.indexOf(data.item);
            const next = data.items.find((item, id) => !item.id && id > currentIndex );

            if (next) {
                setItem(next);
            } else {
                create(1);
            }
        };

        if (data.viewMode === 'list') {
            checkUnsaved(doIt);
        } else {
            doIt();
        }
    };

    const selectItems = () => {
        if (!props.selectItems) {
            return;
        }

        props.selectItems(data.items);
    };

    const onClose = (payload) => {
        if (!payload?.id && !payload.localId) {
            return;
        }

        const doIt = async () => {
            clearChanges(payload?.id, payload?.localId);
            clearActions(payload);

            const actualItem = payload?.id ? await props.getItem(payload.id) : { localId: payload?.localId 
            };

            const index = data.items.findIndex(item => (payload?.id && item.id === payload?.id) || (item.localId === payload?.localId));

            // Отменяем изменения
            if (index !== -1) {
                // data.items.splice(index, 1);
                data.items.splice(index, 1, actualItem);
            }

            if (payload?.id && data.item?.id === payload?.id || data.item?.localId === payload?.localId) {
                data.item = null;
            }
        };

        if (data.hasChanges && (data.hasChanges.indexOf(payload?.id) !== -1 || data.hasChanges.indexOf(payload?.localId) !== -1)) {
            modals.confirm({
                title: t(props.t.revert.confirm.title),
                body: t(props.t.revert.confirm.description, {
                    title: data.item.title
                }),
                onOk: () => {
                    doIt();
                }
            }); 
            return;
        } else {
            doIt();
        }
    };

    const onHide = (payload) => {
        if (!payload?.id && !payload.localId) {
            return;
        }

        clearChanges(payload?.id, payload?.localId);
        clearActions(payload);

        const index = data.items.findIndex(item => (payload?.id && item.id === payload?.id) || (item.localId === payload?.localId));

        // Отменяем изменения
        if (index !== -1) {
            data.items.splice(index, 1);
        }

        if (payload?.id && data.item?.id === payload?.id || data.item?.localId === payload?.localId) {
            data.item = null;
        }
    };

    const checkUnsaved = async (callback) => {
        if (data.hasChanges) {
            modals.confirm({
                title: t(props.t.unsaved.confirm.title),
                body: t(props.t.unsaved.confirm.description),
                onOk: async() => {
                    if (data.item) {
                        clearChanges(data.item?.id, data.item?.localId);
                        clearActions(data.item);

                        const payload = data.item?.id ? await props.getItem(data.item.id) : { localId: data.item?.localId 
                        };

                        const index = data.items.findIndex(item => (data.item?.id && item.id === data.item?.id) || (item.localId === data.item?.localId));

                        // Отменяем изменения
                        if (index !== -1) {
                            data.items.splice(index, 1, payload);
                        }
                    }

                    // delete data.hasChanges;

                    callback();
                }
            }); 
            return;
        }

        callback();
    };

    const setItem = (item) => {
        checkUnsaved(() => {
            data.item = null;

            setTimeout(() => {
                data.item = item;
            });
        });
    };

    const onItemsSort = ({ oldIndex, newIndex }) => {
        emit('sort', {
            // items: data.items.slice(Math.min(newIndex, oldIndex), Math.max(newIndex, oldIndex) + 1),
            // fromIndex: Math.min(oldIndex, newIndex) + 1,
            newIndex,
            oldIndex,
            items: data.items
        });
    };

    onMounted(() => {
        if (data.items?.length) {
            data.item = data.items[0];
        }
    });

    __expose({
        create,
        add
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");
  const _directive_drag_scroll = resolveDirective("drag-scroll");

  return (openBlock(), createElementBlock("div", _hoisted_1$d, [
    createVNode(PageHeader, {
      title: unref(t)(props.t.title),
      detail: !!data.item,
      id: `items-editor-head-buttons-${data.code}`
    }, {
      title: withCtx(() => [
        createVNode(IconButton, {
          icon: "arrow-left",
          onClick: _cache[0] || (_cache[0] = $event => (emit('close'))),
          class: "size-l tertiary rtl-sensitive",
          name: unref(t)(props.t.back)
        }, null, 8, ["name"]),
        renderSlot(_ctx.$slots, "page-header-title", {}, undefined, true)
      ]),
      default: withCtx(() => [
        (data.viewMode === 'table')
          ? (openBlock(), createBlock(Button, {
              key: 0,
              name: unref(t)(`ui.items-editor.save-all`),
              class: "size-s secondary",
              disabled: saveAllActions.value.length < 1,
              onClick: saveAll
            }, null, 8, ["name", "disabled"]))
          : createCommentVNode("", true),
        (props.canAdd)
          ? (openBlock(), createBlock(_sfc_main$s, {
              key: 1,
              icon: "plus",
              leftAuto: !unref(locale).rtl,
              rightAuto: unref(locale).rtl,
              tertiary: true,
              invert: !!data.item,
              size: "size-m"
            }, {
              default: withCtx(() => [
                createBaseVNode("ul", null, [
                  createBaseVNode("li", { onClick: addOne }, [
                    createVNode(_component_Icon, { icon: "plus" }),
                    createBaseVNode("span", null, toDisplayString(unref(t)(props.t['add-one'])), 1)
                  ]),
                  (props.selectItems)
                    ? (openBlock(), createElementBlock("li", {
                        key: 0,
                        onClick: selectItems
                      }, [
                        createVNode(_component_Icon, { icon: "folder" }),
                        createBaseVNode("span", null, toDisplayString(unref(t)(props.t['select-several'])), 1)
                      ]))
                    : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }, 8, ["leftAuto", "rightAuto", "invert"]))
          : createCommentVNode("", true),
        createVNode(_sfc_main$m, {
          invert: !!data.item
        }, null, 8, ["invert"]),
        createVNode(_sfc_main$t, {
          code: props.code,
          invert: !!data.item,
          disabled: data.hasChanges?.length > 1,
          modes: ['list', 'table'],
          onChange: setViewMode
        }, null, 8, ["code", "invert", "disabled"])
      ]),
      _: 3
    }, 8, ["title", "detail", "id"]),
    withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass(["box", { table: data.viewMode === 'table' }])
    }, [
      (data.viewMode === 'table' && data.sections?.length && data.items.length)
        ? (openBlock(), createBlock(ItemsEditorHeader, {
            key: 0,
            sections: data.sections
          }, null, 8, ["sections"]))
        : createCommentVNode("", true),
      (data.viewMode === 'list')
        ? renderSlot(_ctx.$slots, "items", {
            key: 1,
            id: data.item?.id || data.item?.localId,
            items: data.items,
            change: setItem,
            sortable: props.sortable,
            sort: onItemsSort
          }, undefined, true)
        : createCommentVNode("", true),
      (data.items.length)
        ? (openBlock(), createBlock(unref(draggable), {
            key: 2,
            modelValue: data.items,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((data.items) = $event)),
            "item-key": (item) => item.id || item.localId,
            handle: ".sort-button",
            "ghost-class": "dragging",
            onEnd: _cache[2] || (_cache[2] = $event => (onItemsSort({
                    oldIndex: $event.oldIndex,
                    newIndex: $event.newIndex
                }))),
            class: "item-detail-box"
          }, {
            item: withCtx(({ element: item, index: position }) => [
              (data.viewMode === 'table' || (item.id && data.item?.id === item.id) || (data.item?.localId === item.localId && item.localId))
                ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
                    (data.viewMode === 'table')
                      ? (openBlock(), createElementBlock("div", _hoisted_3$5, [
                          (props.sortable)
                            ? (openBlock(), createBlock(Button, {
                                key: 0,
                                icon: "drag",
                                class: "tertiary submenu size-m sort-button"
                              }))
                            : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "preview", { item: item }, undefined, true)
                        ]))
                      : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "item", {
                      toolbarId: `items-editor-head-buttons-${data.code}`,
                      position: position + 1,
                      item: item,
                      viewMode: data.viewMode,
                      edit: onEdit,
                      add: onAdd,
                      update: onUpdate,
                      remove: onRemove,
                      close: onClose,
                      hide: onHide,
                      sections: setSections,
                      actions: setActions
                    }, undefined, true)
                  ]))
                : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["modelValue", "item-key"]))
        : createCommentVNode("", true),
      (data.viewMode === 'table' && !data.items.length)
        ? (openBlock(), createBlock(EmptyLabel, {
            key: 3,
            class: "empty",
            title: unref(t)(props.t.empty.title),
            description: unref(t)(props.t.empty.description)
          }, null, 8, ["title", "description"]))
        : createCommentVNode("", true)
    ], 2)), [
      [_directive_drag_scroll]
    ])
  ]))
}
}

};
const ItemsEditor = /*#__PURE__*/_export_sfc(_sfc_main$l, [['__scopeId',"data-v-901b83cd"]]);

const _hoisted_1$c = {
  key: 0,
  class: "release-preview"
};

    
const _sfc_main$k = {
  __name: 'PageHeaderReleaseTitle',
  props: {
        release: { type: [Object, null], default: null }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

    const defaultCover = computed(() => {
        return api.releases().defaultCover;
    });

return (_ctx, _cache) => {
  return (props.release)
    ? (openBlock(), createElementBlock("div", _hoisted_1$c, [
        (props.release?.cover?.resized || defaultCover.value?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: props.release?.cover?.resized || defaultCover.value?.resized,
              original: props.release?.cover?.original || defaultCover.value?.original,
              alt: props.release?.title
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("span", null, toDisplayString(props.release?.title || unref(t)('releases.empty-name')), 1)
      ]))
    : createCommentVNode("", true)
}
}

};
const PageHeaderReleaseTitle = /*#__PURE__*/_export_sfc(_sfc_main$k, [['__scopeId',"data-v-96c18941"]]);

const _hoisted_1$b = {
  key: 0,
  class: "playlist-preview"
};

    
const _sfc_main$j = {
  __name: 'PageHeaderPlaylistTitle',
  props: {
        playlist: { type: [Object, null], default: null }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

    const defaultCover = computed(() => {
        return api.playlists().defaultCover;
    });

return (_ctx, _cache) => {
  return (props.playlist)
    ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
        (props.playlist?.cover?.resized || defaultCover.value?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: props.playlist?.cover?.resized || defaultCover.value?.resized,
              original: props.playlist?.cover?.original || defaultCover.value?.original,
              alt: props.playlist?.title
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("span", null, toDisplayString((props.playlist?.title ? props.playlist?.title['en-US'] : '') || unref(t)('playlists.empty-name')), 1)
      ]))
    : createCommentVNode("", true)
}
}

};
const PageHeaderPlaylistTitle = /*#__PURE__*/_export_sfc(_sfc_main$j, [['__scopeId',"data-v-855a0b9f"]]);

const _hoisted_1$a = {
  key: 0,
  class: "section-menu"
};
const _hoisted_2$6 = ["id"];
const _hoisted_3$4 = {
  key: 0,
  class: "form-line column"
};
const _hoisted_4$3 = { class: "title" };
const _hoisted_5$2 = {
  key: 1,
  class: "form-line divider"
};


    
const _sfc_main$i = {
  __name: 'ItemsSections',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        sections: { type: Array, default: () => ([]) },
        viewMode: { type: String, default: 'list' },
        help: { type: [String, null], default: null },
        temporaryHidden: { type: Boolean, default: false }
    },
  emits: ['change', 'error', 'sections', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const sectionRefs = ref([]);
    const menuRefs = ref([]);

    const props = __props;

    const data = reactive({});

    const setMetadata = (section, payload) => {
        section.metadata = payload;

        section.width = section.metadata?.direction === 'row' ? 
            Object.values(section.metadata.fields).reduce((acc, field) => acc + (field.width || 200), 0) : 
            Math.max(...Object.values(section.metadata.fields).map(field => field.width || 200));

        if (props.sections.every(item => !!item.metadata)) {
            emit('sections', props.sections);
        }
    };

    const scrollToSection = (id) => {
        const el = sectionRefs.value.find((e) => e?.id === id);
        const container = sectionRefs.value[0].closest('.item-detail');

        if (el && container) {
            const offsetTop = el.offsetTop;
            container.scrollTo({
                top: offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    const onScroll = (e) => {
        const scrollContainer = sectionRefs.value[0].closest('.item-detail');
        scrollContainer.scrollTop;
        const containerTop = scrollContainer.getBoundingClientRect().top;

        let bestMatch = null;
        let bestOffset = Infinity;

        sectionRefs.value.forEach((sectionEl) => {
            if (!sectionEl) {
                return;
            }

            const offset = Math.abs(sectionEl.getBoundingClientRect().top - containerTop - 60);

            if (offset < bestOffset) {
                bestOffset = offset;
                bestMatch = sectionEl.id;
            }
        });

        data.activeSection = bestMatch;
    };

    useGlobalDigitListener((digit) => {
        if (props.viewMode !== 'list') {
            return;
        }

        if (props.sections[digit ? digit - 1 : 9]) {
            scrollToSection(props.sections[digit ? digit - 1 : 9].id);
        }
    });

    onBeforeUnmount(() => {
        const container = sectionRefs.value[0].closest('.item-detail');
        container.removeEventListener('scroll', onScroll);
    });

    onMounted(() => {
        const container = sectionRefs.value[0].closest('.item-detail');
        container.addEventListener('scroll', onScroll);

        onScroll();
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock(Fragment, null, [
    (props.viewMode === 'list' && props.item.id && __props.sections?.length > 1)
      ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.sections, (item, id) => {
            return (openBlock(), createBlock(Button, {
              key: item.id,
              class: normalizeClass(["size-s tertiary", { submenu: data.activeSection !== item.id }]),
              name: unref(t)(item.title),
              ref_for: true,
              ref: el => (menuRefs.value[id] = el),
              onClick: $event => (scrollToSection(item.id))
            }, null, 8, ["name", "class", "onClick"]))
          }), 128)),
          (props.help)
            ? withDirectives((openBlock(), createBlock(_component_Icon, {
                key: 0,
                icon: "help",
                class: "help"
              }, null, 512)), [
                [_directive_tooltip, unref(t)(props.help)]
              ])
            : createCommentVNode("", true)
        ]))
      : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(props.sections, (item, id) => {
      return (openBlock(), createElementBlock("div", {
        key: item.id,
        id: item.id + ( props.viewMode === 'table' ? `-${ props.item?.localId || props.item?.id}`: ''),
        ref_for: true,
        ref: el => (sectionRefs.value[id] = el),
        style: normalizeStyle({
            width: props.viewMode === 'table' ? item.width + 'px' : null,
            'max-width': props.viewMode === 'table' ? item.width + 'px' : null,
            'min-width': props.viewMode === 'table' ? item.width + 'px' : null
        }),
        class: normalizeClass(["section", {
            'view-mode-table': props.viewMode === 'table',
            'temporary-hidden': props.temporaryHidden && !!id && !props.item.id
        }])
      }, [
        (item.name && props.viewMode === 'list')
          ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
              createBaseVNode("label", _hoisted_4$3, toDisplayString(unref(t)(item.name)), 1)
            ]))
          : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass({
            row: item.metadata?.direction === 'row',
            column: item.metadata?.direction === 'column'
        })
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(item.component), {
            item: props.item,
            permissions: props.permissions,
            viewMode: props.viewMode,
            onChange: _cache[0] || (_cache[0] = $event => (emit('change', $event))),
            onError: _cache[1] || (_cache[1] = $event => (emit('error', $event))),
            onSave: _cache[2] || (_cache[2] = $event => (emit('save', $event))),
            onMetadata: $event => (setMetadata(item, $event))
          }, null, 40, ["item", "permissions", "viewMode", "onMetadata"]))
        ], 2),
        (props.viewMode === 'list' && id < props.sections.length - 1 && props.item.id)
          ? (openBlock(), createElementBlock("div", _hoisted_5$2))
          : createCommentVNode("", true)
      ], 14, _hoisted_2$6))
    }), 128))
  ], 64))
}
}

};
const ItemsSections = /*#__PURE__*/_export_sfc(_sfc_main$i, [['__scopeId',"data-v-761e4c0a"]]);

const _hoisted_1$9 = { key: 0 };
const _hoisted_2$5 = {
  key: 0,
  class: "attention"
};
const _hoisted_3$3 = { class: "box" };
const _hoisted_4$2 = {
  key: 0,
  class: "attention"
};
const _hoisted_5$1 = { key: 0 };

    
const _sfc_main$h = {
  __name: 'FormLine',
  props: {
        field: { type: [Object, null], default: null },
        help: { type: [Object, null], default: null },
        column: { type: Boolean, default: false },
        viewMode: { type: String, default: 'list' }
    },
  setup(__props) {

    const slots = useSlots();

    const props = __props;

    const style = computed(() => {
        if (props.viewMode === 'list') {
            return {};
        }

        return {
            width: (props.field?.width || 200) + 'px',
            'max-width': (props.field?.width || 200) + 'px',
            'min-width': (props.field?.width || 200) + 'px'
        }
    });

    const hasAttentions = computed(() => {
        return (props.viewMode === 'list' && (props.field?.attentions?.length || props.help?.length)) || !!slots.action
    });

return (_ctx, _cache) => {
  return (props.field || props.help || !!unref(slots).action || !!unref(slots).title)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["form-line", {
            column: props.column,
            'view-mode-table': props.viewMode === 'table'
        }]),
        style: normalizeStyle(style.value)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          (props.field?.name && props.viewMode === 'list')
            ? (openBlock(), createElementBlock("label", _hoisted_1$9, [
                createBaseVNode("span", null, toDisplayString(props.field.name), 1),
                (props.field.attention)
                  ? (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(props.field.attention), 1))
                  : createCommentVNode("", true)
              ]))
            : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$3, [
          renderSlot(_ctx.$slots, "default"),
          (hasAttentions.value)
            ? (openBlock(), createElementBlock("span", _hoisted_4$2, [
                (props.help?.length && props.viewMode === 'list')
                  ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(props.help, (item) => {
                      return (openBlock(), createElementBlock(Fragment, {
                        key: item.title
                      }, [
                        (item.title)
                          ? (openBlock(), createElementBlock("span", _hoisted_5$1, [
                              createBaseVNode("b", null, toDisplayString(item.title), 1)
                            ]))
                          : createCommentVNode("", true),
                        createBaseVNode("span", null, toDisplayString(item.description), 1)
                      ], 64))
                    }), 128))
                  : createCommentVNode("", true),
                (props.field?.attentions?.length && props.viewMode === 'list')
                  ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(props.field.attentions, (item) => {
                      return (openBlock(), createElementBlock("span", { key: item }, toDisplayString(item), 1))
                    }), 128))
                  : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "action")
              ]))
            : createCommentVNode("", true)
        ])
      ], 6))
    : createCommentVNode("", true)
}
}

};

const _sfc_main$g = {
  __name: 'TrackWave',
  props: {
    wave: { type: Array, default: () => ([]) },
    id: { type: String, default: '' },
    pane: { type: String, default: 'default' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 400 },
    duration: { type: Number, required: true },
    readonly: { type: Boolean, default: false },
    simplify: { type: Number, default: 1 }, // коэффициент упрощения
},
  emits: ['change'],
  setup(__props, { emit: __emit }) {

const player = stores.player();


const emit = __emit;

const props = __props;

const pos = computed(() => {
    if (!player.panes[props.pane] || player.panes[props.pane]._item?.id !== props.id) {
        return 0;
    }

    const pane = player.panes[props.pane];

    return pane._seek + pane._playedSeconds * 1000;
});

const canvas = ref(null);
const root = ref(null);

let ctx = null;
let dpr = 1;
let resizeObserver = null;
let rafId = null;

const smoothedPos = ref(pos.value);

const hoverActive = ref(false);
const hoverIndex = ref(-1);
const dragging = ref(false);

// вычисляем "упрощённый" массив wave
const simplifiedWave = computed(() => {
    const factor = Math.max(1, Math.floor(props.simplify));
    const result = [];
    for (let i = 0; i < props.wave.length; i += factor) {
        const slice = props.wave.slice(i, i + factor);
        // можно брать максимум, чтобы пики сохранялись
        const val = Math.max(...slice);
        result.push(val);
    }
    return result;
});

// количество столбиков
const nBars = computed(() => simplifiedWave.value.length);

// индекс проигрывания
computed(() => {
    if (!props.duration || props.duration <= 0 || nBars.value === 0) return -1;
    const p = Math.max(0, Math.min(pos.value, props.duration));
    const frac = p / props.duration;
    const idx = Math.floor(frac * nBars.value);
    return Math.max(0, Math.min(idx, nBars.value - 1));
});

function getCssNumber(varName, fallback = '0') {
    if (!root.value) return parseFloat(fallback) || 0;
    const val = getComputedStyle(root.value).getPropertyValue(varName).trim();
    return val ? parseFloat(val) : parseFloat(fallback) || 0;
}

function resizeCanvas() {
    if (!canvas.value) return;
    const el = canvas.value;
    const container = root.value || el.parentElement || el;
    const rect = container.getBoundingClientRect();

    dpr = window.devicePixelRatio || 1;

    // Размеры в CSS-пикселях (от контейнера)
    const displayWidth = Math.max(1, Math.floor(rect.width));
    const displayHeight = Math.max(1, Math.floor(rect.height));

    // ВАЖНО: не трогаем style.width/height (оставляем 100% из CSS)
    // Меняем только атрибуты для бэкбуфера под DPR
    const bufferWidth = Math.max(1, Math.floor(displayWidth * dpr));
    const bufferHeight = Math.max(1, Math.floor(displayHeight * dpr));

    if (el.width !== bufferWidth || el.height !== bufferHeight) {
        el.width = bufferWidth;
        el.height = bufferHeight;
    }

    ctx = el.getContext('2d');
    // Единицы — в CSS-пикселях
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    draw();
}

function clearCanvas() {
    if (!ctx || !root.value) return;
    const rect = root.value.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
}

function drawRoundedRect(x, y, w, h, r) {
    if (r <= 0) {
        ctx.fillRect(x, y, w, h);
        return;
    }
    const right = x + w;
    const bottom = y + h;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(right, y, right, bottom, r);
    ctx.arcTo(right, bottom, x, bottom, r);
    ctx.arcTo(x, bottom, x, y, r);
    ctx.arcTo(x, y, right, y, r);
    ctx.closePath();
    ctx.fill();
}

function draw() {
    if (!ctx || !root.value) return;

    const rect = root.value.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    clearCanvas();

    const n = nBars.value ?? (props.wave?.length || 0);
    if (n === 0) return;

    const css = getComputedStyle(root.value);
    const unplayedColor = css.getPropertyValue('--wave-unplayed') || '#e6e6e6';
    const playedColor = css.getPropertyValue('--wave-played') || '#ff5500';
    const hoverColor = css.getPropertyValue('--wave-hover') || '#ff8a4d';
    const centerBg = css.getPropertyValue('--wave-bg') || 'transparent';
    const gapToken = css.getPropertyValue('--wave-gap').trim();
    const gap = gapToken ? parseFloat(gapToken) : 2;
    const radiusToken = css.getPropertyValue('--wave-radius').trim();
    const barRadius = radiusToken ? parseFloat(radiusToken) : 2;

    if (centerBg !== 'transparent') {
        ctx.fillStyle = centerBg;
        ctx.fillRect(0, 0, W, H);
    }

    const totalGap = gap * (n - 1);
    let barW = (W - totalGap) / n;
    if (barW < 1) barW = Math.max(0.5, W / (n * 2));

    const vMin = props.min;
    const vMax = Math.max(props.max, vMin + 1);
    const valueRange = vMax - vMin;

    const centerY = H / 2;
    const playedThreshold = Math.max(
        0,
        Math.min(smoothedPos.value / Math.max(1, props.duration), 1)
    ) * n;

    for (let i = 0; i < n; i++) {
        const raw = Number(simplifiedWave.value ? simplifiedWave.value[i] : props.wave[i]) || 0;
        let frac = (raw - vMin) / valueRange;
        frac = Math.max(0, Math.min(1, frac));
        const barHeight = Math.max(1, frac * H);

        const x = i * (barW + gap);
        const y = centerY - barHeight / 2;

        let state = 'unplayed';
        if (hoverActive.value && !props.readonly && hoverIndex.value >= 0) {
            if (i <= hoverIndex.value) state = 'hover';
            else if (i < playedThreshold) state = 'played';
        } else {
            if (i < playedThreshold) state = 'played';
        }

        if (state === 'played') ctx.fillStyle = playedColor.trim();
        else if (state === 'hover') ctx.fillStyle = hoverColor.trim();
        else ctx.fillStyle = unplayedColor.trim();

        drawRoundedRect(x, y, barW, barHeight, barRadius);
    }
}

function clientXToIndex(clientX) {
    const container = root.value || canvas.value;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const W = rect.width;
    const n = nBars.value ?? (props.wave?.length || 0);
    if (n === 0) return -1;

    const gap = getCssNumber('--wave-gap', '2');
    const totalGap = gap * (n - 1);
    let barW = (W - totalGap) / n;
    if (barW < 1) barW = Math.max(0.5, W / (n * 2));

    let idx = Math.floor(x / (barW + gap));
    if (idx < 0) idx = 0;
    if (idx >= n) idx = n - 1;
    return idx;
}

function indexToMs(index) {
    const n = nBars.value;
    if (!props.duration || n <= 0) return 0;
    const frac = Math.max(0, Math.min(1, (index + 0.5) / n));
    return frac * props.duration;
}

function onPointerMove(e) {
    if (!canvas.value) return;
    if (props.readonly) return;
    const idx = clientXToIndex(e.clientX);
    if (idx !== hoverIndex.value) {
        hoverIndex.value = idx;
        hoverActive.value = true;
        draw();
    }
    if (dragging.value) {
        const ms = indexToMs(idx);

        onChange(Math.round(ms));
    }
}

function onPointerLeave() {
    if (dragging.value) return;
    hoverActive.value = false;
    hoverIndex.value = -1;
    draw();
}

let changeTimeout;

const onChange = (position) => {
    emit('change', position);

    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(() => {
        if (!player.panes[props.pane] || player.panes[props.pane]._item?.id !== props.id) {
            return;
        }

        player.panes[props.pane].seek(position || 0);
    }, 100);
};

function onPointerDown(e) {
    if (props.readonly) return;
    if (!canvas.value) return;
    const idx = clientXToIndex(e.clientX);
    if (idx < 0) return;
    const el = e.currentTarget || root.value;
    try {
        el.setPointerCapture && el.setPointerCapture(e.pointerId);
    } catch (err) {}
    dragging.value = true;
    hoverActive.value = true;
    hoverIndex.value = idx;
    draw();
    const ms = indexToMs(idx);
    onChange(Math.round(ms));
    const onUp = (ev) => {
        try {
            el.releasePointerCapture && el.releasePointerCapture(ev.pointerId);
        } catch (err) {}
        dragging.value = false;
        window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointerup', onUp);
}

function startAnimationLoop() {
    const ease = 0.12;
    function loop() {
        const target = pos.value || 0;
        smoothedPos.value += (target - smoothedPos.value) * ease;

        if (smoothedPos.value < 1 || !pos.value) {
            smoothedPos.value = 0;
        }

        draw();
        rafId = requestAnimationFrame(loop);
    }
    if (!rafId) {
        rafId = requestAnimationFrame(loop);
    }
}

function stopAnimationLoop() {
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
}

onMounted(() => {
    nextTick(() => {
        resizeCanvas();
        if (window.ResizeObserver && root.value) {
            resizeObserver = new ResizeObserver(resizeCanvas);
            resizeObserver.observe(root.value);
        } else {
            window.addEventListener('resize', resizeCanvas);
        }
        smoothedPos.value = pos.value || 0;
        startAnimationLoop();
    });
});

onBeforeUnmount(() => {
    if (resizeObserver && root.value) resizeObserver.unobserve(root.value);
    else window.removeEventListener('resize', resizeCanvas);
    stopAnimationLoop();
});

watch(
    () => [props.wave, props.min, props.max, props.duration, props.simplify],
    () => {
        nextTick(resizeCanvas);
    },
    { deep: true }
);

watch(
    () => pos.value,
    () => {
        if (!rafId) startAnimationLoop();
    }
);

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    ref_key: "root",
    ref: root,
    class: normalizeClass(["track-wave", { 'is-readonly': __props.readonly }]),
    onPointermove: withModifiers(onPointerMove, ["prevent"]),
    onPointerleave: onPointerLeave,
    onPointerdown: withModifiers(onPointerDown, ["prevent"])
  }, [
    createBaseVNode("canvas", {
      ref_key: "canvas",
      ref: canvas,
      class: "wave-canvas"
    }, null, 512)
  ], 34))
}
}

};
const TrackWave = /*#__PURE__*/_export_sfc(_sfc_main$g, [['__scopeId',"data-v-7d3e0a8b"]]);

const _hoisted_1$8 = { class: "title-box" };

    
const _sfc_main$f = {
  __name: 'SectionTrackInfo',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        title: {
            name: t(`pages.tracks.fields.title.name`),
            attention: t(`pages.tracks.fields.title.attention`),
            attentions: [
                t(`pages.tracks.fields.title.subattention1`),
                t(`pages.tracks.fields.title.subattention2`),
                t(`pages.tracks.fields.title.subattention3`)
            ],
            width: 200
        },
        trackFile: {
            name: t(`pages.tracks.fields.track-file.name`),
            attention: t(`pages.tracks.fields.track-file.attention`),
            width: 200
        },
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const data = reactive({
        title: props.item?.title || '',
        loading: false
    });

    const disabled = computed(() => {
        return !(data.title || '').trim().length;
    });

    const onTitleChange = (e) => {
        data.title = e.target.value?.trim();

        emit('change', { title: data.title });
    };

    const onTitleEnter = (e) => {
        if (props.item?.id || disabled.value) {
            return;
        }

        emit('save', e.ctrlKey ? 'add-one' : null);
    };

    const onTrackFileChange = (e) => {
        data.loading = true;

        emit('change', {
            trackFile: {
                file: e?.name ? e : null,
                callback: (payload) => {
                    data.loading = false;
                }
            }
        });
    };

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");
  const _directive_tooltip = resolveDirective("tooltip");

  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$h, {
      field: fields.title,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$8, [
          createVNode(Field, {
            placeholder: unref(t)(`pages.tracks.fields.title.placeholder`),
            value: data.title,
            autofocus: !data.title,
            disabled: !props.permissions.canEdit,
            class: "noerror light with-placeholder",
            onChange: onTitleChange,
            onPressEnter: onTitleEnter
          }, null, 8, ["placeholder", "value", "autofocus", "disabled"]),
          (!props.item.id && props.viewMode === 'list')
            ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(Button, {
                  name: unref(t)('pages.tracks.fields.title.continue'),
                  class: "size-s reverse",
                  disabled: disabled.value || !props.permissions.canEdit,
                  icon: "chevron-right",
                  onClick: _cache[0] || (_cache[0] = $event => (emit('save')))
                }, null, 8, ["name", "disabled"]),
                withDirectives(createVNode(_component_Icon, {
                  icon: "help",
                  class: "help"
                }, null, 512), [
                  [_directive_tooltip, unref(t)('pages.tracks.sections.track-info.help')]
                ])
              ], 64))
            : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    (!props.item.id && props.viewMode === 'table')
      ? (openBlock(), createBlock(_sfc_main$h, {
          key: 0,
          field: fields.trackFile,
          viewMode: props.viewMode
        }, {
          default: withCtx(() => [
            createVNode(Button, {
              name: unref(t)('pages.tracks.fields.title.continue'),
              class: "size-m reverse",
              disabled: disabled.value || !props.permissions.canEdit,
              icon: "chevron-right",
              onClick: _cache[1] || (_cache[1] = $event => (emit('save')))
            }, null, 8, ["name", "disabled"])
          ]),
          _: 1
        }, 8, ["field", "viewMode"]))
      : createCommentVNode("", true),
    withDirectives(createVNode(_sfc_main$h, {
      field: fields.trackFile,
      viewMode: props.viewMode,
      class: normalizeClass({ 'align-center' : props.viewMode === 'list' })
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(["track-box", { table: props.viewMode === 'table' }])
        }, [
          (!data.loading && props.item?.trackFile)
            ? (openBlock(), createBlock(TrackWave, {
                key: 0,
                wave: props.item.wave,
                id: props.item.id,
                duration: props.item.duration,
                simplify: props.viewMode === 'table' ? 5 : 1
              }, null, 8, ["wave", "id", "duration", "simplify"]))
            : createCommentVNode("", true),
          createVNode(FileUploader, {
            class: "upload",
            acceptedFormats: ['.wav', 'audio/wav', 'audio/x-wav'],
            dropZone: !props.item?.trackFile || data.loading,
            disabled: !props.permissions.canEdit,
            loading: data.loading,
            description: "pages.tracks.fields.track-file.name",
            onChange: onTrackFileChange
          }, null, 8, ["dropZone", "disabled", "loading"])
        ], 2)
      ]),
      _: 1
    }, 8, ["field", "viewMode", "class"]), [
      [vShow, props.item.id]
    ])
  ], 64))
}
}

};
const SectionTrackInfo = /*#__PURE__*/_export_sfc(_sfc_main$f, [['__scopeId',"data-v-a76634ef"]]);

const _hoisted_1$7 = { class: "artist-option-preview" };
const _hoisted_2$4 = { class: "name" };
const _hoisted_3$2 = { class: "artist-value-preview" };
const _hoisted_4$1 = { class: "name" };

    
const _sfc_main$e = {
  __name: 'ArtistAutoComplete',
  props: {
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const props = __props;

    const data = reactive({
        code: code(),
        optionList: []
    });

    const defaultProfileImage = computed(() => {
        return api.artists().defaultProfileImage;
    });

    const onAutoCompleteSearch = async (value) => {
        const searchStr = value?.toLowerCase().trim();

        const params = {
            skip: 0,
            take: 20,
            sort: 'name',
            sort_dir: 'asc'
        };

        if (searchStr?.trim()) {
            params.name = searchStr.trim().toLowerCase();
        }

        const payload = await api.artists().list(params, data.code);

        if (!payload?.items) {
            data.optionList = [];
            return;
        }

        data.optionList = await payload.items.map(item => ({
            id: item.id,
            code: item.id,
            name: item.name,
            profileImage: item.profileImage
        }));
    };

    onMounted(() => {
        onAutoCompleteSearch();
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(AutoComplete, mergeProps(props, {
    optionList: data.optionList || [],
    onSearch: onAutoCompleteSearch,
    onChange: _cache[0] || (_cache[0] = $event => (emit('change', $event)))
  }), {
    option: withCtx(({ option }) => [
      createBaseVNode("span", _hoisted_1$7, [
        (option.profileImage?.resized || defaultProfileImage.value?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: option.profileImage?.resized || defaultProfileImage.value?.resized,
              original: option.profileImage?.original || defaultProfileImage.value?.original,
              alt: option?.name
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("span", _hoisted_2$4, toDisplayString(option.name), 1)
      ])
    ]),
    value: withCtx(({ value }) => [
      createBaseVNode("span", _hoisted_3$2, [
        (value.profileImage?.resized || defaultProfileImage.value?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: value.profileImage?.resized || defaultProfileImage.value?.resized,
              original: value.profileImage?.original || defaultProfileImage.value?.original,
              alt: value?.name
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("span", null, [
          createBaseVNode("span", _hoisted_4$1, toDisplayString(value.name), 1)
        ])
      ])
    ]),
    _: 1
  }, 16, ["optionList"]))
}
}

};
const ArtistAutoComplete = /*#__PURE__*/_export_sfc(_sfc_main$e, [['__scopeId',"data-v-118bb085"]]);

const _hoisted_1$6 = { class: "box-row" };

    
const _sfc_main$d = {
  __name: 'SectionContributors',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        contributors: {
            width: 540,
            manual: {
                attentions: [
                    t(`pages.tracks.fields.contributors.artist-manual.subattention1`),
                    t(`pages.tracks.fields.contributors.artist-manual.subattention2`),
                    t(`pages.tracks.fields.contributors.artist-manual.subattention3`)               
                ]
            }
        }
    };

    emit('metadata', {
        fields,
        direction: 'column'
    });

    const data = reactive({
        contributors: (props.item?.contributors || []).map(item =>
            ({
                ...item,
                artist: item.artist ? {
                    ...item.artist,
                    code: item.artist.id
                } : null,
                manualMode: !(item.artist || !item.unregisteredArtistName)
            })
        ).sort((a, b) => a.state === 'CONFIRMED' ? -1 : 1),

        errors: {}
    });

    const validateContributors = (contributors) => {
        const errors = [];

        // 1. At least one confirmed
        const hasConfirmed = contributors.some(item => item.state === 'CONFIRMED');
        if (!hasConfirmed) {
            errors.push(t(`pages.tracks.fields.contributors.errors.has-confirmed`));
        }

        const nameRolePairs = new Set();
        const artistRolePairs = new Set();

        contributors.forEach((item, id) => {
            // 2. Each contributor must have a role
            if (!item.role) {
                errors.push(t(`pages.tracks.fields.contributors.errors.role`, { id: id + 1 }));
            }

            // 3. Must have either artist or unregisteredArtistName
            if (!item.artist && !item.unregisteredArtistName?.trim()) {
                errors.push(t(`pages.tracks.fields.contributors.errors.has-artist`, { id: id + 1 }));
            }

            // 4. Unique unregisteredArtistName + role combination (case-insensitive)
            if (item.unregisteredArtistName && item.role) {
                const key = item.unregisteredArtistName.toLowerCase() + '|' + item.role;
                
                if (nameRolePairs.has(key)) {
                    errors.push(t(`pages.tracks.fields.contributors.errors.unique-unregistered-artist-name`, {
                        name: item.unregisteredArtistName,
                        role: t(TRACK_CONTRIBUTOR_ROLES.find(role => role.code === item.role)?.name)
                    }));
                } else {
                    nameRolePairs.add(key);
                }
            }

            // 5. Unique artist + role combination
            if (item.artist && item.role) {
                const key = item.artist.id + '|' + item.role;
                if (artistRolePairs.has(key)) {
                    errors.push(t(`pages.tracks.fields.contributors.errors.unique-artist`, {
                        name: item.artist.name,
                        role: t(TRACK_CONTRIBUTOR_ROLES.find(role => role.code === item.role)?.name)
                    }));
                } else {
                    artistRolePairs.add(key);
                }
            }
        });

        return errors;
    };

    const confirmedCount = computed(() => {
        return data.contributors.filter(item => item.state === 'CONFIRMED').length
    });

    const toggleMode = (item) => {
        if (item.manualMode) {
            item.unregisteredArtistName = '';
        } else {
            item.artist = null;
        }

        item.manualMode = !item.manualMode;

        update();
    };

    const onRoleChange = (payload, item) => {
        item.role = payload?.value;

        update();
    };

    const onArtistChange = (payload, item) => {
        item.artist = payload?.values?.length ? payload.values[0] : null;

        update();
    };

    const onUnregisteredArtistNameChange = (e, item) => {
        item.unregisteredArtistName = e.target.value?.trim();

        update();
    };

    const remove = (item) => {
        if (data.contributors.indexOf(item) !== -1) {
            data.contributors.splice(data.contributors.indexOf(item), 1);

            update();
        }
    };

    const update = () => {
        emit('change', { contributors: data.contributors });

        data.errors.contributors = validateContributors(data.contributors);

        emit('error', data.errors);

    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(data.contributors, (item, id) => {
      return (openBlock(), createBlock(_sfc_main$h, {
        key: id,
        viewMode: props.viewMode,
        field: {
            width: fields.contributors.width,
            attentions: item.manualMode ? fields.contributors.manual.attentions : []
        }
      }, createSlots({
        title: withCtx(() => [
          createVNode(_sfc_main$u, {
            class: "noerror light title",
            optionList: unref(TRACK_CONTRIBUTOR_ROLES),
            placeholder: unref(t)(`pages.tracks.fields.contributors.roles.placeholder`),
            leftAuto: false,
            maxValuesCount: 1,
            rightAuto: false,
            useI18n: true,
            clearable: false,
            value: item.role,
            disabled: !props.permissions.canEditContributor || !(confirmedCount.value > 1 || (item.role !== 'PRIMARY' || item.state !== 'CONFIRMED')),
            onChange: $event => (onRoleChange($event, item))
          }, null, 8, ["optionList", "placeholder", "value", "disabled", "onChange"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$6, [
            (!item.manualMode)
              ? (openBlock(), createBlock(ArtistAutoComplete, {
                  key: 0,
                  placeholder: unref(t)(`pages.tracks.fields.contributors.artist.placeholder`),
                  dict: "instruments",
                  maxValuesCount: 1,
                  values: item.artist ? [item.artist] : [],
                  disabled: !props.permissions.canEditContributor || !(confirmedCount.value > 1 || (item.role !== 'PRIMARY' || item.state !== 'CONFIRMED')),
                  class: "noerror light with-placeholder",
                  onChange: $event => (onArtistChange($event, item))
                }, null, 8, ["placeholder", "values", "disabled", "onChange"]))
              : (openBlock(), createBlock(Field, {
                  key: 1,
                  value: item.unregisteredArtistName,
                  placeholder: unref(t)(`pages.tracks.fields.contributors.artist-manual.placeholder`),
                  disabled: !props.permissions.canEditContributor,
                  class: "noerror light with-placeholder",
                  onChange: $event => (onUnregisteredArtistNameChange($event, item))
                }, null, 8, ["value", "placeholder", "disabled", "onChange"])),
            (item.state)
              ? (openBlock(), createBlock(IconState, {
                  key: 2,
                  state: item.state
                }, null, 8, ["state"]))
              : createCommentVNode("", true),
            (confirmedCount.value > 1 || (item.role !== 'PRIMARY' || item.state !== 'CONFIRMED'))
              ? (openBlock(), createBlock(IconButton, {
                  key: 3,
                  icon: "minus",
                  class: "size-m secondary",
                  disabled: !props.permissions.canEditContributor,
                  title: unref(t)(`pages.tracks.sections.contributors.remove`),
                  onClick: $event => (remove(item))
                }, null, 8, ["disabled", "title", "onClick"]))
              : createCommentVNode("", true)
          ])
        ]),
        _: 2
      }, [
        (!item.manualMode && !item.artist)
          ? {
              name: "action",
              fn: withCtx(() => [
                createBaseVNode("span", null, [
                  createTextVNode(toDisplayString(unref(t)(`pages.tracks.fields.contributors.artist.empty`)) + " ", 1),
                  createVNode(Button, {
                    name: unref(t)(`pages.tracks.fields.contributors.artist.manual`),
                    class: "size-s tertiary link",
                    disabled: !props.permissions.canEditContributor,
                    onClick: $event => (toggleMode(item))
                  }, null, 8, ["name", "disabled", "onClick"])
                ])
              ]),
              key: "0"
            }
          : (item.manualMode && !item.unregisteredArtistName)
            ? {
                name: "action",
                fn: withCtx(() => [
                  createBaseVNode("span", null, [
                    createVNode(Button, {
                      name: unref(t)(`pages.tracks.fields.contributors.artist-manual.switch`),
                      class: "size-s tertiary link",
                      disabled: !props.permissions.canEditContributor,
                      onClick: $event => (toggleMode(item))
                    }, null, 8, ["name", "disabled", "onClick"])
                  ])
                ]),
                key: "1"
              }
            : undefined
      ]), 1032, ["viewMode", "field"]))
    }), 128)),
    createVNode(_sfc_main$h, {
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(IconButton, {
          icon: "plus",
          class: "size-m",
          disabled: !props.permissions.canEditContributor,
          title: unref(t)(`pages.tracks.sections.contributors.add`),
          onClick: _cache[0] || (_cache[0] = $event => (data.contributors.push({})))
        }, null, 8, ["disabled", "title"])
      ]),
      _: 1
    }, 8, ["viewMode"])
  ], 64))
}
}

};
const SectionContributors = /*#__PURE__*/_export_sfc(_sfc_main$d, [['__scopeId',"data-v-652e44d2"]]);

const _sfc_main$c = {
  __name: 'SectionProjectInfo',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        fromProject: {
            name: t(`pages.tracks.fields.from-project.name`),
            attention: t(`pages.tracks.fields.from-project.attention`),
            width: 200
        },
        version: {
            name: t(`pages.tracks.fields.version.name`),
            attention: t(`pages.tracks.fields.version.attention`),
            width: 200
        }
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const data = reactive({
        fromProject: props.item?.fromProject || '',
        version: props.item?.version
    });

    const onFromProjectChange = (e) => {
        data.fromProject = e.target.value?.trim();

        emit('change', { fromProject: data.fromProject });
    };

    const onTrackVersionChange = (e) => {
        if (!e) {
            return;
        }

        data.version = e.value;

        emit('change', { version: data.version });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$h, {
      field: fields.fromProject,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.tracks.fields.from-project.name`),
          value: data.fromProject,
          disabled: !props.permissions.canEdit,
          class: "noerror light with-placeholder",
          onChange: onFromProjectChange
        }, null, 8, ["placeholder", "value", "disabled"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.version,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(_sfc_main$u, {
          class: "noerror light",
          optionList: unref(TRACK_VERSIONS),
          placeholder: unref(t)(`pages.tracks.fields.version.name`),
          disabled: !props.permissions.canEdit,
          value: data.version,
          leftAuto: false,
          maxValuesCount: 1,
          rightAuto: false,
          useI18n: true,
          onChange: onTrackVersionChange
        }, null, 8, ["optionList", "placeholder", "disabled", "value"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"])
  ], 64))
}
}

};

const _sfc_main$b = {
  __name: 'Range',
  props: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    value: { type: Number, default: 0 },
    decimalCount: { type: Number, default: 0 },
    disabled: { type: Boolean, default: false }
},
  emits: ['change'],
  setup(__props, { emit: __emit }) {

const locale = stores.locale();
const emit = __emit;
const range = ref(null);

const props = __props;

const data = reactive({
    value: props.value,
    oldValue: props.value,
    pageX: 0,
    width: 1,
});

const updatePosition = (clientX) => {
    const rect = range.value.getBoundingClientRect();

    let relativeX = clientX - rect.left;
    if (locale.rtl) {
        relativeX = rect.right - clientX;
    }

    const percentage =  props.min + (props.max - props.min) * Math.max(0, Math.min(1, (relativeX / rect.width)));

    data.value = +percentage.toFixed(props.decimalCount);

    emit('change', data.value);
};

const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
};

const onMouseMove = (e) => {
    updatePosition(e.clientX);
};

const onMouseDown = (e) => {
    if (props.disabled) {
        return;
    }

    updatePosition(e.clientX);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
};


const pos = computed(() => {
    return (props.max - props.min) ? `${ 100 * (data.value - props.min) / (props.max - props.min) }%` : 0;
});

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
    onMousedown: onMouseDown,
    class: normalizeClass(["range", { disabled: props.disabled }]),
    ref_key: "range",
    ref: range
  }, [
    createBaseVNode("span", {
      style: normalizeStyle({ width: pos.value })
    }, [...(_cache[1] || (_cache[1] = [
      createBaseVNode("i", null, null, -1)
    ]))], 4)
  ], 34))
}
}

};
const Range = /*#__PURE__*/_export_sfc(_sfc_main$b, [['__scopeId',"data-v-28c042e0"]]);

const _hoisted_1$5 = {
  viewBox: "0 0 200 200",
  class: "progress-bar"
};
const _hoisted_2$3 = ["stroke-dasharray"];
const _hoisted_3$1 = ["innerHTML"];

    
const _sfc_main$a = {
  __name: 'Progress',
  props: {
        title: { type: String, default: '' },
        value: { type: Number, default: 0 }
    },
  setup(__props) {

    const props = __props;

    const data = reactive({
        value: props.value
    });

    watch(
        () => props.value,
        async () => {
            let steps = 14;
            const letters = ((data.value).toString().split('.')[1] || '').length;
            const diff = +((props.value - data.value) / steps).toFixed(letters + 3);

            clearTimeout(data.timeout);

            const doIt = async () => {
                if (!steps) {
                    data.value = props.value;
                    return;
                }

                data.value += diff;
                steps -=1;

                clearTimeout(data.timeout);
                data.timeout = setTimeout(() => {
                    doIt();
                }, 10);
            };

            doIt();
        }
    );

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", null, [
    (openBlock(), createElementBlock("svg", _hoisted_1$5, [
      _cache[0] || (_cache[0] = createBaseVNode("circle", {
        r: "80",
        cx: "100",
        cy: "100",
        fill: "none",
        "stroke-width": "12",
        stroke: "var(--light-500)"
      }, null, -1)),
      createBaseVNode("circle", {
        r: "80",
        cx: "100",
        cy: "100",
        fill: "none",
        "stroke-width": "12",
        stroke: "url(#progress-bar-gradient)",
        "stroke-linecap": "round",
        "stroke-dasharray": `${ (data.value * 502.4 / 100).toFixed(1) } 502.4`,
        "stroke-dashoffset": "0",
        class: "gradient",
        style: {"transform":"rotate(-90deg)","transform-origin":"center"}
      }, null, 8, _hoisted_2$3),
      _cache[1] || (_cache[1] = createBaseVNode("defs", null, [
        createBaseVNode("linearGradient", { id: "progress-bar-gradient" }, [
          createBaseVNode("stop", {
            offset: "0%",
            "stop-color": "var(--secondary-500)"
          }),
          createBaseVNode("stop", {
            offset: "100%",
            "stop-color": "var(--primary-500)"
          })
        ])
      ], -1))
    ])),
    (props.title)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          innerHTML: props.title
        }, null, 8, _hoisted_3$1))
      : createCommentVNode("", true)
  ]))
}
}

};
const Progress = /*#__PURE__*/_export_sfc(_sfc_main$a, [['__scopeId',"data-v-d5b0e62a"]]);

const _hoisted_1$4 = { class: "col-total" };
const _hoisted_2$2 = { key: 1 };

    
const _sfc_main$9 = {
  __name: 'SectionRating',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        soundQuality: {
            name: t(`pages.tracks.fields.rating.sound-quality.name`),
            attentions: [
                t(`pages.tracks.fields.rating.sound-quality.attention`)
            ],
            width: 140
        },
        melody: {
            name: t(`pages.tracks.fields.rating.melody.name`),
            attentions: [
                t(`pages.tracks.fields.rating.melody.attention`)
            ],
            width: 140
        },
        curatorScore: {
            name: t(`pages.tracks.fields.rating.curator-score.name`),
            attentions: [
                t(`pages.tracks.fields.rating.curator-score.attention`)
            ],
            width: 140
        },
        total: {
            width: 140
        }
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const data = reactive({
        rating: props.item?.rating || {
            sound_quality: 0,
            melody: 0,
            curator_score: 0
        }
    });

    const ratingTotal = computed(() => {
        return (data.rating?.curator_score || 0) +
            (data.rating?.melody || 0) +
            (data.rating?.sound_quality || 0);
    });

    const onCuratorScoreChange = (payload) => {
        data.rating.curator_score = payload;

        emit('change', { rating: data.rating });
    };

    const onMelodyChange = (payload) => {
        data.rating.melody = payload;

        emit('change', { rating: data.rating });
    };

    const onSoundQualityChange = (payload) => {
        data.rating.sound_quality = payload;

        emit('change', { rating: data.rating });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["form-cols", { 'view-mode-table': props.viewMode === 'table' }])
  }, [
    createBaseVNode("div", null, [
      createVNode(_sfc_main$h, {
        field: fields.soundQuality,
        viewMode: props.viewMode
      }, {
        default: withCtx(() => [
          createVNode(Range, {
            value: data.rating.sound_quality,
            disabled: !props.permissions.canEditRating,
            onChange: onSoundQualityChange
          }, null, 8, ["value", "disabled"])
        ]),
        _: 1
      }, 8, ["field", "viewMode"]),
      createVNode(_sfc_main$h, {
        field: fields.melody,
        viewMode: props.viewMode
      }, {
        default: withCtx(() => [
          createVNode(Range, {
            value: data.rating.melody,
            disabled: !props.permissions.canEditRating,
            onChange: onMelodyChange
          }, null, 8, ["value", "disabled"])
        ]),
        _: 1
      }, 8, ["field", "viewMode"]),
      createVNode(_sfc_main$h, {
        field: fields.curatorScore,
        viewMode: props.viewMode
      }, {
        default: withCtx(() => [
          createVNode(Range, {
            value: data.rating.curator_score,
            disabled: !props.permissions.canEditRating,
            onChange: onCuratorScoreChange
          }, null, 8, ["value", "disabled"])
        ]),
        _: 1
      }, 8, ["field", "viewMode"])
    ]),
    createBaseVNode("div", _hoisted_1$4, [
      (props.viewMode === 'list')
        ? (openBlock(), createBlock(Progress, {
            key: 0,
            value: 100 * ratingTotal.value / 300,
            title: unref(t)(`pages.tracks.fields.rating.total.name`, { total: ratingTotal.value})
          }, null, 8, ["value", "title"]))
        : createCommentVNode("", true),
      (props.viewMode === 'table')
        ? (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(unref(t)(`pages.tracks.fields.rating.total.name`, { total: ratingTotal.value})), 1))
        : createCommentVNode("", true)
    ])
  ], 2))
}
}

};
const SectionRating = /*#__PURE__*/_export_sfc(_sfc_main$9, [['__scopeId',"data-v-3040b93b"]]);

const _sfc_main$8 = {
  __name: 'SectionSnippet',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        snippetStartTime: {
            name: t(`pages.tracks.fields.snippet.start.name`),
            width: 150
        },
        snippetEndTime: {
            name: t(`pages.tracks.fields.snippet.end.name`),
            attentions: [
                t(`pages.tracks.sections.snippet.attention`),
                t(`pages.tracks.sections.snippet.subattention1`)
            ],
            width: 150
        },
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const to = ref(null);

    const isValidSnippetRange = (from, to) => {
        if ([undefined, null].indexOf(to) !== -1 || [undefined, null].indexOf(from) !== -1) {
            return false;
        }

        const diff = to - from;

        if (to <= from) {
            return false;
        }

        if (diff < 15000 || diff > 30000) {
            return false;
        }

        return true;
    };

    const prepare = (milliseconds) => {
        if ([null, undefined].indexOf(milliseconds) !== -1) {
            return null;
        }

        const totalSeconds = Math.floor((milliseconds || 0) / 1000);
        const min = Math.floor(totalSeconds / 60);
        const sek = totalSeconds % 60;

        return { min, sek };
    };

    const data = reactive({
        snippetStartTime: prepare(props.item?.snippetStartTime),
        snippetEndTime: prepare(props.item?.snippetEndTime),

        errors: {}
    });

    const onSnippetStartTimeChange = (e) => {
        if (!e.target.typedValue) {
            return;
        }

        data.snippetStartTime = ((e.target.typedValue.min || 0) * 60 + (e.target.typedValue.sek || 0)) * 1000;


        if (data.snippetStartTime !== props.item?.snippetStartTime) {
            emit('change', {
                snippetStartTime: data.snippetStartTime
            });
        }

        data.errors.snippetStartTime = [];
        if (data.snippetStartTime && !e.target.masked.isComplete) {
            data.errors.snippetStartTime.push(t(`pages.tracks.fields.snippet.start.error`));
        }

        emit('error', data.errors);

        if (!data.errors.snippetStartTime?.length && to.value.data.maskInstance) {
            to.value.data.maskInstance.typedValue = prepare(data.snippetStartTime + 30 * 1000);
        }
    };

    const onSnippetEndTimeChange = (e) => {
        if (!e.target.typedValue) {
            return;
        }

        data.snippetEndTime = ((e.target.typedValue.min || 0) * 60 + (e.target.typedValue.sek || 0)) * 1000;

        if (data.snippetEndTime !== props.item?.snippetEndTime) {
            emit('change', { snippetEndTime: data.snippetEndTime });
        }

        data.errors.snippetEndTime = [];
        if (data.snippetEndTime && !e.target.masked.isComplete) {
            data.errors.snippetEndTime.push(t(`pages.tracks.fields.snippet.end.error`));
        }

        if (!isValidSnippetRange(data.snippetStartTime, data.snippetEndTime)) {
            data.errors.snippetEndTime.push(t(`pages.tracks.fields.snippet.error`));
        }

        emit('error', data.errors);
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$h, {
      field: fields.snippetStartTime,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.tracks.fields.snippet.start.placeholder`),
          mask: unref(maskPreviewTime),
          value: data.snippetStartTime,
          disabled: !props.permissions.canEdit,
          isError: !!data.errors.snippetStartTime?.length,
          class: "noerror light with-placeholder",
          onChange: onSnippetStartTimeChange
        }, null, 8, ["placeholder", "mask", "value", "disabled", "isError"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.snippetEndTime,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.tracks.fields.snippet.end.placeholder`),
          mask: unref(maskPreviewTime),
          value: data.snippetEndTime,
          disabled: !props.permissions.canEdit,
          isError: !!data.errors.snippetEndTime?.length,
          ref_key: "to",
          ref: to,
          class: "noerror light with-placeholder",
          onChange: onSnippetEndTimeChange
        }, null, 8, ["placeholder", "mask", "value", "disabled", "isError"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"])
  ], 64))
}
}

};

const _sfc_main$7 = {
  __name: 'SectionRightFlags',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const coverAttentions = [
        t(`pages.tracks.fields.is-cover.subattention1`),
        t(`pages.tracks.fields.is-cover.subattention2`),
        t(`pages.tracks.fields.is-cover.subattention3`),
        t(`pages.tracks.fields.is-cover.subattention4`)
    ];

    const data = reactive({
        contentId: props.item?.contentId,
        hasProRights: props.item?.hasProRights,
        nonCommercialUsage: props.item?.nonCommercialUsage,
        isCover: props.item?.isCover,
    });
    
    const fields = computed(() => ({
        contentId: {
            name: t(`pages.tracks.fields.content-id.name`),
            attentions: [
                t(`pages.tracks.fields.content-id.attention`)
            ],
            width: 120
        },
        hasProRights: {
            name: t(`pages.tracks.fields.has-pro-rights.name`),
            attentions: [
                t(`pages.tracks.fields.has-pro-rights.attention`)
            ],
            width: 120
        },
        nonCommercialUse: {
            name: t(`pages.tracks.fields.non-commercial-use.name`),
            attentions: [
                t(`pages.tracks.fields.non-commercial-use.attention`)
            ],
            width: 130
        },
        isCover: {
            name: t(`pages.tracks.fields.is-cover.name`),
            attentions: [
                t(`pages.tracks.fields.is-cover.attention`),
                ...( data.isCover ? coverAttentions : [])
            ],
            width: 120
        },
        isRadioEdit: {
            name: t(`pages.tracks.fields.is-radio-edit.name`),
            attentions: [
                t(`pages.tracks.fields.is-radio-edit.attention`)
            ],
            width: 120
        }
    }));

    emit('metadata', {
        fields: {
            ...fields.value,
            isCover: {
                ...fields.value.isCover,
                attentions: [
                    fields.value.isCover.attentions[0],
                    ...coverAttentions
                ]
            }
        },
        direction: 'row'
    });

    const onContentIdChange = (e) => {
        data.contentId = !!e?.value;

        emit('change', { contentId: data.contentId });
    };

    const onHasProRightsChange = (e) => {
        data.hasProRights = !!e?.value;

        emit('change', { hasProRights: data.hasProRights });
    };

    const onNonCommercialUse = (e) => {
        data.nonCommercialUsage = !!e?.value;

        emit('change', { nonCommercialUsage: data.nonCommercialUsage });
    };

    const onIsCoverChange = (e) => {
        data.isCover = !!e?.value;

        emit('change', { isCover: data.isCover });
    };

    const onIsRadioEditChange = (e) => {
        data.isRadioEdit = !!e?.value;

        emit('change', { isRadioEdit: data.isRadioEdit });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$h, {
      field: fields.value.contentId,
      column: true,
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(Toggler, {
          name: fields.value.contentId.name,
          inline: true,
          checked: data.contentId,
          disabled: !props.permissions.canEdit,
          class: "reverse solid",
          onOnClick: onContentIdChange
        }, null, 8, ["name", "checked", "disabled"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.value.hasProRights,
      column: true,
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(Toggler, {
          name: fields.value.hasProRights.name,
          inline: true,
          disabled: !props.permissions.canEdit,
          checked: data.hasProRights,
          class: "reverse solid",
          onOnClick: onHasProRightsChange
        }, null, 8, ["name", "disabled", "checked"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.value.nonCommercialUse,
      column: true,
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(Toggler, {
          name: fields.value.nonCommercialUse.name,
          inline: true,
          disabled: !props.permissions.canEdit,
          checked: data.nonCommercialUsage,
          class: "reverse solid",
          onOnClick: onNonCommercialUse
        }, null, 8, ["name", "disabled", "checked"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.value.isCover,
      column: true,
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(Toggler, {
          name: fields.value.isCover.name,
          inline: true,
          disabled: !props.permissions.canEdit,
          checked: data.isCover,
          class: "reverse solid",
          onOnClick: onIsCoverChange
        }, null, 8, ["name", "disabled", "checked"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.value.isRadioEdit,
      column: true,
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(Toggler, {
          name: fields.value.isRadioEdit.name,
          inline: true,
          disabled: !props.permissions.canEdit,
          checked: data.isRadioEdit,
          class: "reverse solid",
          onOnClick: onIsRadioEditChange
        }, null, 8, ["name", "disabled", "checked"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"])
  ], 64))
}
}

};

const _sfc_main$6 = {
  __name: 'SectionLyricsLanguage',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        instrumental: {
            name: t(`pages.tracks.fields.instrumental.name`),
            attentions: [
                t(`pages.tracks.fields.instrumental.attention`)
            ],
            width: 130
        },
        isExplicit: {
            name: t(`pages.tracks.fields.is-explicit.name`),
            attentions: [
                t(`pages.tracks.fields.is-explicit.attention`)
            ],
            width: 110
        },
        language: {
            name: t(`pages.tracks.fields.language.name`),
            width: 240
        },
        lyrics: {
            name: t(`pages.tracks.fields.lyrics.name`),
            width: 240
        }
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const data = reactive({
        instrumental: props.item?.instrumental,
        isExplicit: props.item?.isExplicit,
        language: props.item?.language ? ALL_LANGUAGES_LIST.find(item => item.code === props.item?.language) : null,
        lyrics: props.item?.lyrics,

        languageOptions: ALL_LANGUAGES_LIST
    });

    const onInstrumentalChange = (e) => {
        data.instrumental = !!e?.value;

        const fields = ['instrumental'];

        if (data.instrumental) {
            if (data.language) {
                data.language = null;
                fields.push('language');
            }

            if (data.isExplicit) {
                data.isExplicit = false;
                fields.push('isExplicit');
            }

            if (data.lyrics) {
                data.lyrics = null;
                fields.push('lyrics');
            }
        }

        const payload = {};
        fields.forEach(field => payload[field] = data[field]);

        emit('change', payload);
    };

    const onIsExplicitChange = (e) => {
        data.isExplicit = !!e?.value;

        emit('change', { isExplicit: data.isExplicit });
    };

    const onLanguageSearch = (value) => {
        const searchStr = value?.toLowerCase().trim();

        if (!searchStr) {
            data.languageOptions = ALL_LANGUAGES_LIST;
            return    
        }

        data.languageOptions = ALL_LANGUAGES_LIST.filter(item =>
            item.name.toLowerCase().indexOf(searchStr) !== -1);
    };

    const onLanguageChange = (e) => {
        if (!e?.values) {
            return;
        }

        if (e.values?.length) {
            data.language = e?.values[0];
        } else {
            data.language = null;
        }

        emit('change', { language: data.language?.code });
    };

    const onLyricsChange = (e) => {
        data.lyrics = e.target.value?.trim();
        emit('change', { lyrics: data.lyrics });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$h, {
      field: fields.instrumental,
      column: true,
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(Toggler, {
          name: fields.instrumental.name,
          inline: true,
          disabled: !props.permissions.canEdit,
          checked: data.instrumental,
          class: "reverse solid",
          onOnClick: onInstrumentalChange
        }, null, 8, ["name", "disabled", "checked"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    (!data.instrumental)
      ? (openBlock(), createBlock(_sfc_main$h, {
          key: 0,
          field: fields.isExplicit,
          column: true,
          viewMode: props.viewMode
        }, {
          title: withCtx(() => [
            createVNode(Toggler, {
              name: fields.isExplicit.name,
              inline: true,
              disabled: !props.permissions.canEdit,
              checked: data.isExplicit,
              class: "reverse solid",
              onOnClick: onIsExplicitChange
            }, null, 8, ["name", "disabled", "checked"])
          ]),
          _: 1
        }, 8, ["field", "viewMode"]))
      : createCommentVNode("", true),
    (!data.instrumental)
      ? (openBlock(), createBlock(_sfc_main$h, {
          key: 1,
          field: fields.language,
          viewMode: props.viewMode
        }, {
          default: withCtx(() => [
            createVNode(AutoComplete, {
              class: "noerror light",
              optionList: data.languageOptions,
              placeholder: unref(t)(`pages.tracks.fields.language.placeholder`),
              disabled: !props.permissions.canEdit,
              values: data.language ? [data.language] : [],
              leftAuto: false,
              maxValuesCount: 1,
              rightAuto: false,
              onSearch: onLanguageSearch,
              onChange: onLanguageChange
            }, null, 8, ["optionList", "placeholder", "disabled", "values"])
          ]),
          _: 1
        }, 8, ["field", "viewMode"]))
      : createCommentVNode("", true),
    (!data.instrumental)
      ? (openBlock(), createBlock(_sfc_main$h, {
          key: 2,
          field: fields.lyrics,
          viewMode: props.viewMode
        }, {
          default: withCtx(() => [
            createVNode(Textarea, {
              placeholder: unref(t)(`pages.tracks.fields.lyrics.placeholder`),
              value: data.lyrics,
              disabled: !props.permissions.canEdit,
              class: normalizeClass(["noerror light with-placeholder", { preview: props.viewMode === 'table' }]),
              onChange: onLyricsChange
            }, null, 8, ["placeholder", "value", "disabled", "class"])
          ]),
          _: 1
        }, 8, ["field", "viewMode"]))
      : createCommentVNode("", true)
  ], 64))
}
}

};

const _hoisted_1$3 = { class: "image-preview" };

    
const _sfc_main$5 = {
  __name: 'SectionIdentifiersRelease',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        isrc: {
            name: t(`pages.tracks.fields.isrc.name`),
            attentions: [
                t(`pages.tracks.fields.isrc.subattention1`)
            ],
            width: 220
        },
        iswc: {
            name: t(`pages.tracks.fields.iswc.name`),
            attentions: [
                t(`pages.tracks.fields.iswc.subattention1`)
            ],
            width: 220
        },
        // bpm: {
        //     name: t(`pages.tracks.fields.bpm.name`),
        //     attention: t(`pages.tracks.fields.bpm.attention`),
        //     width: 200
        // },
        cover: {
            name: t(`pages.tracks.fields.cover.name`),
            attention: t(`pages.tracks.fields.cover.attention`),
            attentions: [
                t(`pages.tracks.fields.cover.subattention1`),
                t(`pages.tracks.fields.cover.subattention2`),
                t(`pages.tracks.fields.cover.subattention3`)
            ],
            width: 116
        },
        releaseDate: {
            name: t(`pages.tracks.fields.release-date.name`),
            width: 210
        },
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const data = reactive({
        isrc: props.item?.isrc,
        iswc: props.item?.iswc,
        bpm: props.item?.bpm,
        releaseDate: props.item?.releaseDate,
        cover: props.item?.cover || {},

        errors: {}
    });


    const onISRCChange = (e) => {
        data.isrc = e.target.typedValue?.trim().toUpperCase();

        if (props.item?.isrc !== data.isrc) {
            emit('change', { isrc: data.isrc });
        }

        data.errors.isrc = [];
        if (data.isrc && !e.target.masked.isComplete) {
            data.errors.isrc = [t(`pages.tracks.fields.isrc.error`)];
        }

        emit('error', data.errors);
    };

    const onISWCChange = (e) => {
        data.iswc = e.target.typedValue?.trim().toUpperCase();

        if (props.item?.iswc !== data.iswc) {
            emit('change', { iswc: data.iswc });
        }

        data.errors.iswc = [];
        if (data.iswc && !e.target.masked.isComplete) {
            data.errors.iswc = [t(`pages.tracks.fields.iswc.error`)];
        }

        emit('error', data.errors);
    };

    const onCoverChange = (e) => {
        emit('change', { cover: e?.name ? e : null });
    };

    const onReleaseDateChange = (value) => {
        if (!value) {
            data.releaseDate = null;
        } else {
            data.releaseDate = hooks(value).toISOString();
        }

        emit('change', { releaseDate: data.releaseDate });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$h, {
      field: fields.isrc,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.tracks.fields.isrc.placeholder`),
          value: data.isrc,
          mask: unref(maskISRC),
          disabled: !props.permissions.canEdit,
          isError: !!data.errors.isrc?.length,
          class: "noerror light with-placeholder",
          onChange: onISRCChange
        }, null, 8, ["placeholder", "value", "mask", "disabled", "isError"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.iswc,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.tracks.fields.iswc.placeholder`),
          value: data.iswc,
          mask: unref(maskISWC),
          disabled: !props.permissions.canEdit,
          isError: !!data.errors.iswc?.length,
          class: "noerror light with-placeholder",
          onChange: onISWCChange
        }, null, 8, ["placeholder", "value", "mask", "disabled", "isError"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.cover,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$3, [
          createVNode(FileUploader, {
            class: "upload",
            icon: "upload-img",
            acceptedFormats: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/jfif'],
            disabled: !props.permissions.canEdit,
            dropZone: true,
            showPreview: true,
            zoneSize: {
                    width: props.viewMode === 'table' ? '100px' : '180px',
                    height: props.viewMode === 'table' ? '100px' : '180px'
                },
            preview: data.cover?.resized,
            zoneType: "square-image",
            onChange: onCoverChange
          }, null, 8, ["disabled", "zoneSize", "preview"])
        ])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$h, {
      field: fields.releaseDate,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(DateField, {
          "text-input": true,
          enableTimePicker: false,
          timePicker: false,
          disabled: !props.permissions.canEdit,
          placeholder: unref(t)(`pages.tracks.fields.release-date.placeholder`),
          format: "dd.MM.yyyy",
          class: "light noerror with-placeholder",
          modelValue: data.releaseDate,
          "onUpdate:modelValue": onReleaseDateChange
        }, null, 8, ["disabled", "placeholder", "modelValue"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"])
  ], 64))
}
}

};

const _sfc_main$4 = {
  __name: 'SectionMetadata',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;
    const { t } = useI18n();
    const dict = api.dict();

    const props = __props;


    const help = [
        {
            title: t(`pages.tracks.sections.dicts.subattention1`),
            description: t(`pages.tracks.sections.dicts.subattention1_`)
        }, {
            title: t(`pages.tracks.sections.dicts.subattention2`),
            description: t(`pages.tracks.sections.dicts.subattention2_`)
        }, {
            title: t(`pages.tracks.sections.dicts.subattention1`),
            description: t(`pages.tracks.sections.dicts.subattention2_`)
        }
    ];

    const fields = {
        instruments: {
            name: t('dicts.instruments'),
            width: 200
        },
        genres: {
            name: t('dicts.genres'),
            width: 200
        },
        categories: {
            name: t('dicts.categories'),
            width: 200
        },
        moods: {
            name: t('dicts.moods'),
            width: 200
        },
        tags: {
            name: t('dicts.tags'),
            width: 200
        }
    };

    emit('metadata', {
        fields,
        help,
        direction: 'row'
    });

    const data = reactive({
        instruments: [],
        moods: [],
        categories: [],
        genres: [],
        tags: [],

        loading: true
    });


    const onInstrumentsChange = ({ values }) => {
        data.instruments = values?.length ? values : [];

        onChange();
    };

    const onMoodsChange = ({ values }) => {
        data.moods = values?.length ? values : [];

        onChange();
    };

    const onCategoriesChange = ({ values }) => {
        data.categories = values?.length ? values : [];

        onChange();
    };

    const onGenresChange = ({ values }) => {
        data.genres = values?.length ? values : [];

        onChange();
    };

    const onTagsChange = ({ values }) => {
        data.tags = values?.length ? values : [];

        onChange();
    };

    const onChange = () => {
        const dicts = [
            ...data.instruments.map(item => item.id),
            ...data.moods.map(item => item.id),
            ...data.categories.map(item => item.id),
            ...data.genres.map(item => item.id),
            ...data.tags.map(item => item.id)
        ];

        emit('change', { dicts });
    };

    const load = async () => {
        if (!props.item?.dicts?.length) {
            data.loading = false;
            return;
        }

        data.loading = true;

        const types = {};

        (await dict.getTypes())?.forEach(item => types[item.code] = item.id);

        Object.keys(types).forEach(type => {
            if (data[type]) {
                data[type] = props.item.dicts.filter(item => item.dictId === types[type]).map(item => ({ ...item, name: item.title })) || [];
            }
        });

        data.loading = false;
    };

    onMounted(() => {
        load();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (props.viewMode === 'list')
      ? (openBlock(), createBlock(_sfc_main$h, {
          key: 0,
          help: help,
          column: true,
          viewMode: props.viewMode
        }, null, 8, ["viewMode"]))
      : createCommentVNode("", true),
    (!data.loading)
      ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_sfc_main$h, {
            field: fields.instruments,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$q, {
                placeholder: unref(t)(`dicts.instruments`),
                values: data.instruments,
                disabled: !props.permissions.canEdit,
                dict: "instruments",
                class: "noerror light with-placeholder",
                onChange: onInstrumentsChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$h, {
            field: fields.genres,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$q, {
                placeholder: unref(t)(`dicts.genres`),
                values: data.genres,
                disabled: !props.permissions.canEdit,
                maxValuesCount: 3,
                dict: "genres",
                class: "noerror light with-placeholder",
                onChange: onGenresChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$h, {
            field: fields.categories,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$q, {
                placeholder: unref(t)(`dicts.categories`),
                values: data.categories,
                disabled: !props.permissions.canEdit,
                maxValuesCount: 3,
                dict: "categories",
                class: "noerror light with-placeholder",
                onChange: onCategoriesChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$h, {
            field: fields.moods,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$q, {
                placeholder: unref(t)(`dicts.moods`),
                values: data.moods,
                disabled: !props.permissions.canEdit,
                maxValuesCount: 3,
                dict: "moods",
                class: "noerror light with-placeholder",
                onChange: onMoodsChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$h, {
            field: fields.tags,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$q, {
                placeholder: unref(t)(`dicts.tags`),
                values: data.tags,
                disabled: !props.permissions.canEdit,
                dict: "tags",
                class: "noerror light with-placeholder",
                onChange: onTagsChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"])
        ], 64))
      : createCommentVNode("", true)
  ], 64))
}
}

};

const _sfc_main$3 = {
  __name: 'Sections',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'sections', 'save'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const props = __props;

    const data = reactive({
        sections: [
            {
                id: 'track-info',
                name: '',
                title: 'pages.tracks.sections.track-info.name',
                component: markRaw(SectionTrackInfo)
            }, {
                id: 'contributors',
                title: 'pages.tracks.sections.contributors.name',
                name: 'pages.tracks.sections.contributors.name',
                component: markRaw(SectionContributors)
            }, {
                id: 'project-info',
                title: 'pages.tracks.sections.project-info.name',
                name: 'pages.tracks.sections.project-info.name',
                component: markRaw(_sfc_main$c)
            }, {
                id: 'snippet',
                title: 'pages.tracks.sections.snippet.name',
                name: 'pages.tracks.sections.snippet.name',
                component: markRaw(_sfc_main$8)
            }, {
                id: 'right-flags',
                title: 'pages.tracks.sections.flags.name',
                name: 'pages.tracks.sections.flags.name',
                component: markRaw(_sfc_main$7)
            }, {
                id: 'lyrics-language',
                title: 'pages.tracks.sections.lyrics-language.name',
                name: 'pages.tracks.sections.lyrics-language.name',
                component: markRaw(_sfc_main$6)
            }, {
                id: 'identifiers-release',
                title: 'pages.tracks.sections.identifiers-release.name',
                name: 'pages.tracks.sections.identifiers-release.name',
                component: markRaw(_sfc_main$5)
            }, {
                id: 'metadata',
                title: 'pages.tracks.sections.dicts.name',
                name: 'pages.tracks.sections.dicts.name',
                component: markRaw(_sfc_main$4)
            }, {
                id: 'rating',
                title: 'pages.tracks.sections.rating.name',
                name: 'pages.tracks.sections.rating.name',
                component: markRaw(SectionRating)
            }
        ]
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(ItemsSections, {
    item: props.item,
    permissions: props.permissions,
    viewMode: props.viewMode,
    sections: data.sections,
    temporaryHidden: true,
    help: "pages.tracks.sections.help",
    onChange: _cache[0] || (_cache[0] = $event => (emit('change', $event))),
    onError: _cache[1] || (_cache[1] = $event => (emit('error', $event))),
    onSections: _cache[2] || (_cache[2] = $event => (emit('sections', $event))),
    onSave: _cache[3] || (_cache[3] = $event => (emit('save', $event)))
  }, null, 8, ["item", "permissions", "viewMode", "sections"]))
}
}

};

const _hoisted_1$2 = {
  key: 0,
  class: "title"
};
const _hoisted_2$1 = {
  key: 0,
  class: "devider"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$2 = {
  __name: 'TrackInfo',
  props: {
        toolbarId: { type: String, default: '' },
        track: { type: [Object, null], default: null },
        artist: { type: [Object, null], default: null },
        release: { type: [Object, null], default: null },
        playlist: { type: [Object, null], default: null },
        position: { type: [Number, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['update', 'add', 'remove', 'edit', 'sections', 'close', 'hide', 'actions'],
  setup(__props, { emit: __emit }) {

    const modals = stores.modals();

    const releases = api.releases();
    const playlists = api.playlists();
    const tracks = api.tracks();
    stores.user();
    const locale = stores.locale();

    const emit = __emit;
    const { t } = useI18n();

    const trackInfoBox = ref(null);

    const props = __props;

    // Permissions
        const canEdit = computed(() => {
            if (data.item?.id) {
                return tracks.canEdit({
                    track: data.item
                });
            }

            return tracks.canAdd({
                artist: props.artist
            });
        });

        const canRemove = computed(() => {
            return tracks.canRemove({
                track: data.item
            });
        });

        const canEditRating = computed(() => {
            return tracks.canEditRating({
                track: data.item
            });
        });

        const canEditState = computed(() => {
            return tracks.canEditState({
                track: data.item
            });
        });

        const canEditContributor = computed(() => {
            if (data.item?.id) {
                return tracks.canEditContributor({
                    track: data.item
                });
            }

            return tracks.canAdd({
                artist: props.artist
            });
        });


    const data = reactive({
        id: null,
        item: {
            instrumental: true
        },
        updatedItem: {},
        errors: {},
        states: [],
        loading: true,
        uploading: false,

        releases: [], // Релизы, в которых есть этот трек
        playlists: [], // Плейлисты, в которых есть этот трек. Скорее всего будет тут только тот, что передали в пропсах, чтобы не перезагружать интерфейс, ибо плейлистов могут быть сотни тысяч у трека
    });


    // Релизы, которые еще не опубликованы, а значит которые мы можем редактировать
    const editableReleases = computed(() => {
        return data.releases?.filter(item => releases.canAddTrack({
            release: item,
            artist: props.artist,
            track: data.item
        })) || [];
    });

    // Плейлисты, которые еще не опубликованы, а значит которые мы можем редактировать
    const editablePlaylists = computed(() => {
        return data.playlists?.filter(item => playlists.canAddTrack({
            playlist: item,
            artist: props.artist,
            track: data.item
        })) || [];
    });

    const defaultReleaseCover = computed(() => {
        return api.releases().defaultCover;
    });

    const defaultPlaylistCover = computed(() => {
        return api.playlists().defaultCover;
    });

    const getStates = async () => {
        data.states = data.id ? await tracks.getAvailableStates(data.id) || [] : [];
    };

    const changeState = async (state) => {
        modals.confirm({
            title: t(`pages.tracks.state.confirm.title`),
            body: t(`pages.tracks.state.confirm.description`, {
                name: t(`state.default.code.${ state.toLowerCase() }`)
            }),
            onOk: async () => {
                const payload = await tracks.changeState(data.id, state);

                data.item.state = payload?.state;
                getStates();

                emit('update', data.item);

                modals.open('success', {
                    data: {
                        title: t(`pages.tracks.state.done.title`),
                        close: t(`pages.tracks.state.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    const onSectionError = (payload) => {
        if (!payload || !Object.keys(payload)?.length) {
            return;
        }

        Object.keys(payload).forEach(field => {
            if (payload[field]?.length) {
                data.errors[field] = payload[field];
            } else {
                delete data.errors[field];
            }
        });
    };

    const onSectionChange = (payload) => {
        // Вытаскиваем трек файл из потока и сохраняем налету
        if (data.id && payload?.trackFile?.file) {
            updateTrackFile(data.id, payload.trackFile.file, payload.trackFile.callback);
            delete payload.trackFile;
        }

        if (!payload || !Object.keys(payload)?.length) {
            return;
        }

        Object.keys(payload).forEach(field => data.updatedItem[field] = payload[field]);

        emit('edit', {
            ...data.item,
            ...data.updatedItem
        });
    };

    const hasChanges = computed(() => {
        if (!data.updatedItem) {
            return false;
        }

        return !!Object.keys(data.updatedItem)?.length;
    });

    const saveDisabled = computed(() => {
        return (!data.updatedItem?.title?.trim().length && !data.item?.title?.trim().length) ||
            (typeof(data.updatedItem?.title) === 'string' && !data.updatedItem.title.trim().length) ||
            !!Object.keys(data.errors)?.length || data.uploading || !hasChanges.value;
    });

    const errorsTooltip = computed(() => {
        const errors = [];
        Object.values(data.errors)?.forEach(item => errors.splice(0, 0, ...item));
        return errors.join('<br>');
    });


    const close = () => {
        emit('close', data.item);
    };

    const remove = async () => {
        if (!data.item?.id) {
            return;
        }

        modals.confirm({
            title: t(`pages.tracks.remove.confirm.title`),
            body: t(`pages.tracks.remove.confirm.description`, { title: data.item?.title }),
            onOk: async () => {
                await tracks.remove(data.id);

                modals.open('success', {
                    data: {
                        title: t(`pages.tracks.remove.done.title`),
                        close: t(`pages.tracks.remove.done.close`)
                    },
                    quietClose: true
                });

                emit('remove', data.item.id);
            }
        }); 
    };

    const updateTrackFile = async (id, file, callback) => {
        if (!id || !file) {
            callback();
            return;
        }

        data.uploading = true;

        const payload = await tracks.updateAudioFile(id, file);

        if (!payload?.trackFile) {
            callback();
            return;
        }

        data.item = { ...data.item, ...{
            bpm: payload.bpm,
            duration: payload.duration,
            tempos: payload.tempos,
            trackFile: payload.trackFile,
            wave: payload.wave
        }};

        data.uploading = false;
        callback(payload);
        emit('update', data.item, 'not-clear-changes');
    };

    const saveChanges = async (mode) => {
        let scrollTop = trackInfoBox.value?.closest('.item-detail')?.scrollTop;

        data.updating = true;

        const trackInfo = { ...data.updatedItem };

        // Убираем участников, они сейвятся отдельно
        delete trackInfo.contributors;

        // Удаляем временный айдишник
        delete trackInfo.localId;

        // Убираем поля, которые рассчитываются автоматически
        delete trackInfo.bpm;
        delete trackInfo.duration;

        // Вытаскиваем картинку
        const cover = trackInfo.cover;
        if (cover) {
            delete trackInfo.cover;
        }

        // Вытаскиваем трек. Вообще, он никогда тут не окажется. Но мало ли
        const trackFile = trackInfo.trackFile;
        if (trackFile) {
            delete trackInfo.trackFile;
        }

        // Убираем на всякий случай рейтинг, если это не куратор треков
        if (!canEditRating.value) {
            delete trackInfo.rating;
        }

        // Если мы только создаем трек, то надо прокинуть сразу primary, чтобы привязать
        if (!data.id) {
            const contributor = data.updatedItem.contributors?.find(item => item.role === 'PRIMARY' && item.state === 'CONFIRMED');

            if (contributor) {
                trackInfo.artist = contributor.artist?.id;
                data.updatedItem.contributors = [...data.updatedItem.contributors];
                data.updatedItem.contributors.splice(data.updatedItem.contributors.indexOf(contributor), 1);
            }
        }

        // Сейвим основные данные
        let payload;

        // Разрешение на изменение
        if (canEdit.value) {
            if (data.id) {
                payload = await tracks.update(data.id, trackInfo);
            } else {
                payload = await tracks.add(trackInfo);

                emit('actions', {
                    item: data.item,
                    actions: []
                });
            }


            // Обновляем картинку
            if (payload?.id && cover) {
                payload = await tracks.updateCover(payload.id, cover);
            }
        } else if (data.id) {
            payload = await tracks.get(data.id);
        }

        if (!payload) {
            return;
        }

        // Обновляем участников
        if (canEditContributor.value && data.updatedItem?.contributors) {
            const oldIds = data.item?.contributors?.filter(item => item.id).map(item => item.id) || [];
            const newIds = data.updatedItem?.contributors?.filter(item => item.id).map(item => item.id) || [];

            // Удаляем лишние
            await Promise.all(oldIds.filter(id => newIds.indexOf(id) === -1).map(async (id) => {
                await tracks.removeContributor(id);
            }));

            // Обновляем измененные
            await Promise.all(data.updatedItem?.contributors.filter(item => item.id && oldIds.indexOf(item.id) === -1).map(async (item) => {
                await tracks.updateContributor(item.id, {
                    artistId: item.artist?.id,
                    role: item.role,
                    unregisteredArtistName: item.unregisteredArtistName
                });
            }));

            // Добавляем новые
            await Promise.all(data.updatedItem?.contributors.filter(item => !item.id).map(async (item) => {
                const contributor = await tracks.addContributor({
                    trackId: payload?.id || data.id,
                    artistId: item.artist?.id,
                    role: item.role,
                    unregisteredArtistName: item.unregisteredArtistName
                });

                item.id = contributor?.id;
            }));

            if (!data.id && payload.contributors.length) {
                data.updatedItem?.contributors.unshift(payload.contributors[0]);
            }

            payload.contributors = data.updatedItem?.contributors || [];
        }


        // Привязываем трек к релизу
        payload = (await addItemToRelease(payload)) || payload;
        // Привязываем трек к плейлисту
        payload = (await addItemToPlaylist(payload)) || payload;

        await delay(200);
        data.updating = false;

        if (payload?.id) {
            message.info(t(`pages.tracks.${ data.id ? 'edit' : 'add' }.done.title`));
            // modals.open('success', {
            //     data: {
            //         timer: 3,
            //         title: t(`pages.tracks.${ data.id ? 'edit' : 'add' }.done.title`),
            //         close: t(`pages.tracks.${ data.id ? 'edit' : 'add' }.done.close`)
            //     },
            //     quietClose: true
            // });
        }

        if (data.id) {
            emit('update', payload, mode);
        } else {
            emit('add', {
                ...payload,
                localId: data.item?.localId
            }, mode);
        }

        data.item = payload;
        data.updatedItem = {};
        data.code = payload.code;
        data.id = payload.id;

        if (props.viewMode === 'list' && scrollTop) {
            setTimeout(() => {
                if (trackInfoBox?.value) {
                    trackInfoBox.value.closest('.item-detail').scrollTop = scrollTop;
                }
            });
        }
    };

    const saveChangesAndAddMore = async () => {
        await saveChanges('add-one');
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await tracks.get(props.track.id);

        // Получаем релизы, в которых есть наш трек
        await getItemReleases();

        // Получаем плейлисты, в которых есть наш трек
        await getItemPlaylists();

        data.id = payload?.id;
        data.item = payload || {};

        await getStates();

        await delay(200);

        data.loading = false;
    };

    const createItem = () => {
        data.item = {
            instrumental: true
        };

        if (props.track?.localId) {
            data.item = { ...props.track };
            // data.item.localId = props.track.localId;
        }

        if (props.artist && !data.item.contributors) {
            data.item.contributors = [{
                artist: {...props.artist},
                role: 'PRIMARY',
                state: 'CONFIRMED'
            }];
        }

        data.updatedItem = { ...data.item };

        data.states = [];
        data.errors = {};
        data.id = null;

        emit('edit', {
            ...data.item,
            ...data.updatedItem
        });
    };

    // Releases
        const removeItemFromRelease = async (release) => {
            if (!release?.id) {
                return;
            }

            // Если я не куратор треков и релиз опубликован, то добавлять нельзя
            if (!releases.canAddTrack({
                release: release,
                artist: props.artist,
                track: data.item
            })) {
                return;
            }

            // Если такой релиз отсутствует среди добавленных, то тут делать нечего
            if (!data.releases?.find(item => item.id === release.id)) {
                return;
            }


            modals.confirm({
                title: t(`pages.tracks.remove-from-release.confirm.title`),
                body: t(`pages.tracks.remove-from-release.confirm.description`, {
                    'track-title': data.item?.title,
                    'release-title': release?.title
                }),
                onOk: async () => {
                    await releases.tracks.remove({
                        releaseId: release.id,
                        trackId: data.item.id
                    });

                    // Актуализируем список релизов
                    await getItemReleases();

                    modals.open('success', {
                        data: {
                            title: t(`pages.tracks.remove-from-release.done.title`),
                            close: t(`pages.tracks.remove-from-release.done.close`)
                        },
                        quietClose: true
                    });

                    if (props.release?.id && release.id === props.release.id) {
                        emit('hide', data.item);
                    }
                }
            }); 
        };

        const addItemToRelease = async (payload) => {
            if (!props.release?.id || !payload?.id) {
                return;
            }

            // Если я не куратор треков и релиз опубликован, то добавлять нельзя
            if (!releases.canAddTrack({
                release: props.release,
                artist: props.artist,
                track: payload
            })) {
                return;
            }

            // Если такой релиз уже есть, то тоже повторно тут делать нечего
            if (data.releases?.find(item => item.id === props.release.id)) {
                return;
            }

            const result = await releases.tracks.add({
                releaseId: props.release.id,
                trackId: payload.id
            });

            // Актуализируем список релизов
            await getItemReleases();

            // Устанавливаем положение трека в релизе
            if (props.position) {
                await updateItemPosition(props.position);
            }

            return result;
        };

        const getItemReleases = async () => {
            const payload = await releases.list({
                tracks: [props.track.id]
            });

            if (payload?.items) {
                data.releases = payload.items || [];
            }
        };

    // Playlists
        const removeItemFromPlaylist = async (playlist) => {
            if (!playlist?.id) {
                return;
            }

            // Если я не куратор треков, то добавлять нельзя
            if (!playlists.canAddTrack({
                playlist: playlist,
                artist: props.artist,
                track: data.item
            })) {
                return;
            }

            // Если такой релиз отсутствует среди добавленных, то тут делать нечего
            if (!data.playlists?.find(item => item.id === playlist.id)) {
                return;
            }


            modals.confirm({
                title: t(`pages.tracks.remove-from-playlist.confirm.title`),
                body: t(`pages.tracks.remove-from-playlist.confirm.description`, {
                    'track-title': data.item?.title,
                    'playlist-title': playlist?.title ? playlist.title['en-US'] || playlist.title : playlist?.title
                }),
                onOk: async () => {
                    await playlists.tracks.remove({
                        playlistId: playlist.id,
                        trackId: data.item.id
                    });

                    // Актуализируем список плейлистов
                    await getItemPlaylists();

                    modals.open('success', {
                        data: {
                            title: t(`pages.tracks.remove-from-playlist.done.title`),
                            close: t(`pages.tracks.remove-from-playlist.done.close`)
                        },
                        quietClose: true
                    });

                    if (props.playlist?.id && playlist.id === props.playlist.id) {
                        emit('hide', data.item);
                    }
                }
            }); 
        };

        const addItemToPlaylist = async (payload) => {
            if (!props.playlist?.id || !payload?.id) {
                return;
            }

            // Если я не куратор плейлист, то добавлять нельзя
            if (!playlists.canAddTrack({
                playlist: props.playlist,
                artist: props.artist,
                track: payload
            })) {
                return;
            }
            

            // Если такой плейлист уже есть, то тоже повторно тут делать нечего
            if (data.playlists?.find(item => item.id === props.playlist.id)) {
                return;
            }

            const result = await playlists.tracks.add({
                playlistId: props.playlist.id,
                trackId: payload.id
            });

            // Актуализируем список плейлистов
            await getItemPlaylists();

            // Устанавливаем положение трека в плейлисте
            if (props.position) {
                await updateItemPosition(props.position);
            }

            return result;
        };

        const getItemPlaylists = async () => {
            // const payload = await playlists.list({
            //     tracks: [props.track.id]
            // });

            // if (payload?.items) {
            //     data.playlists = payload.items || [];
            // }
        };

    const updateItemPosition = async (position) => {
        if (!data.item?.id) {
            return;
        }

        if (props.release?.id) {
            await releases.tracks.setPosition({
                releaseId: props.release?.id,
                trackId: data.item.id,
                position
            });
        }

        if (props.playlist?.id) {
            await playlists.tracks.setPosition({
                playlistId: props.playlist?.id,
                trackId: data.item.id,
                position
            });
        }
    };

    watch(
        () => saveDisabled.value,
        (value) => {
            if (value) {
                emit('actions', {
                    item: data.item,
                    actions: []
                });
            } else {
                emit('actions', {
                    item: data.item,
                    actions: [
                        {
                            type: props.track?.id ? 'save' : 'create',
                            action: saveChanges
                        }
                    ]
                });
            }
        }
    );

    // watch(
    //     () => props.position,
    //     (position) => {
    //         updateItemPosition(position);
    //     }
    // );

    onMounted(async () => {
        if (props.track?.id) {
            await getItem();

            if (props.release?.id) {
                // Втихую добавляем трек к релизу
                addItemToRelease(data.item);
            }
            if (props.playlist?.id) {
                // Втихую добавляем трек к плейлисту
                addItemToPlaylist(data.item);
            }
        } else {
            createItem();
            data.loading = false;
        }
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    (!data.loading)
      ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["track-info", {
            'view-mode-table': props.viewMode === 'table',
            'updating': data.updating
        }]),
          ref_key: "trackInfoBox",
          ref: trackInfoBox
        }, [
          (props.viewMode === 'list')
            ? (openBlock(), createElementBlock("label", _hoisted_1$2, toDisplayString(unref(t)(`pages.tracks.${
                props.track?.id ? (!canEdit.value ? 'view' : 'edit') : 'add'
            }.title`)), 1))
            : createCommentVNode("", true),
          createVNode(_sfc_main$3, {
            item: data.item,
            viewMode: props.viewMode,
            permissions: {
                canEdit: canEdit.value,
                canEditRating: canEditRating.value,
                canEditContributor: canEditContributor.value
            },
            onChange: onSectionChange,
            onError: onSectionError,
            onSave: saveChanges,
            onSections: _cache[0] || (_cache[0] = $event => (emit('sections', $event)))
          }, null, 8, ["item", "viewMode", "permissions"]),
          createBaseVNode("div", {
            class: normalizeClass(props.viewMode === 'table' ? 'actions-box detail column' : '')
          }, [
            (openBlock(), createBlock(Teleport, {
              to: `#${props.toolbarId}`,
              disabled: props.viewMode !== 'list'
            }, [
              (props.viewMode === 'list')
                ? (openBlock(), createElementBlock("span", _hoisted_2$1))
                : createCommentVNode("", true),
              (data.id && props.viewMode === 'list')
                ? (openBlock(), createBlock(_sfc_main$s, {
                    key: 1,
                    leftAuto: !unref(locale).rtl,
                    rightAuto: unref(locale).rtl,
                    tertiary: true,
                    invert: true,
                    size: "size-s"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("ul", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(editableReleases.value, (item) => {
                          return (openBlock(), createElementBlock("li", {
                            key: item.id,
                            onClick: $event => (removeItemFromRelease(item))
                          }, [
                            (item.cover?.resized || defaultReleaseCover.value?.resized)
                              ? (openBlock(), createBlock(Img, {
                                  key: 0,
                                  preview: item.cover?.resized || defaultReleaseCover.value?.resized,
                                  original: item.cover?.original || defaultReleaseCover.value?.original,
                                  alt: item.title,
                                  skeleton: true
                                }, null, 8, ["preview", "original", "alt"]))
                              : createCommentVNode("", true),
                            createBaseVNode("span", {
                              innerHTML: unref(t)(`pages.tracks.remove-from-release.title`, { title: item.title })
                            }, null, 8, _hoisted_4)
                          ], 8, _hoisted_3))
                        }), 128)),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(editablePlaylists.value, (item) => {
                          return (openBlock(), createElementBlock("li", {
                            key: item.id,
                            onClick: $event => (removeItemFromPlaylist(item))
                          }, [
                            (item.cover?.resized || defaultPlaylistCover.value?.resized)
                              ? (openBlock(), createBlock(Img, {
                                  key: 0,
                                  preview: item.cover?.resized || defaultPlaylistCover.value?.resized,
                                  original: item.cover?.original || defaultPlaylistCover.value?.original,
                                  alt: item.title,
                                  skeleton: true
                                }, null, 8, ["preview", "original", "alt"]))
                              : createCommentVNode("", true),
                            createBaseVNode("span", {
                              innerHTML: unref(t)(`pages.tracks.remove-from-playlist.title`, { title: item.title })
                            }, null, 8, _hoisted_6)
                          ], 8, _hoisted_5))
                        }), 128)),
                        (canRemove.value)
                          ? (openBlock(), createElementBlock("li", {
                              key: 0,
                              onClick: remove
                            }, [
                              createVNode(_component_Icon, { icon: "trash" }),
                              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.tracks.remove.title`)), 1)
                            ]))
                          : createCommentVNode("", true),
                        createBaseVNode("li", { onClick: close }, [
                          createVNode(_component_Icon, { icon: "close" }),
                          createBaseVNode("span", null, toDisplayString(unref(t)(`pages.tracks.cancel`)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["leftAuto", "rightAuto"]))
                : createCommentVNode("", true),
              ((canRemove.value || !!editableReleases.value?.length || !!editablePlaylists.value?.length) && props.viewMode === 'table' && data.id)
                ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    (!editableReleases.value?.length && !editablePlaylists.value?.length)
                      ? (openBlock(), createBlock(Button, {
                          key: 0,
                          title: unref(t)(`pages.tracks.remove.title`),
                          class: "size-m tertiary invert",
                          icon: "trash",
                          disabled: !canRemove.value,
                          onClick: remove
                        }, null, 8, ["title", "disabled"]))
                      : (openBlock(), createBlock(_sfc_main$s, {
                          key: 1,
                          leftAuto: !unref(locale).rtl,
                          rightAuto: unref(locale).rtl,
                          tertiary: true,
                          invert: true,
                          icon: "trash",
                          size: "size-s"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("ul", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(editableReleases.value, (item) => {
                                return (openBlock(), createElementBlock("li", {
                                  key: item.id,
                                  onClick: $event => (removeItemFromRelease(item))
                                }, [
                                  (item.cover?.resized || defaultReleaseCover.value?.resized)
                                    ? (openBlock(), createBlock(Img, {
                                        key: 0,
                                        preview: item.cover?.resized || defaultReleaseCover.value?.resized,
                                        original: item.cover?.original || defaultReleaseCover.value?.original,
                                        alt: item.title,
                                        skeleton: true
                                      }, null, 8, ["preview", "original", "alt"]))
                                    : createCommentVNode("", true),
                                  createBaseVNode("span", {
                                    innerHTML: unref(t)(`pages.tracks.remove-from-release.title`, { title: item.title })
                                  }, null, 8, _hoisted_8)
                                ], 8, _hoisted_7))
                              }), 128)),
                              (openBlock(true), createElementBlock(Fragment, null, renderList(editablePlaylists.value, (item) => {
                                return (openBlock(), createElementBlock("li", {
                                  key: item.id,
                                  onClick: $event => (removeItemFromPlaylist(item))
                                }, [
                                  (item.cover?.resized || defaultPlaylistCover.value?.resized)
                                    ? (openBlock(), createBlock(Img, {
                                        key: 0,
                                        preview: item.cover?.resized || defaultPlaylistCover.value?.resized,
                                        original: item.cover?.original || defaultPlaylistCover.value?.original,
                                        alt: item.title,
                                        skeleton: true
                                      }, null, 8, ["preview", "original", "alt"]))
                                    : createCommentVNode("", true),
                                  createBaseVNode("span", {
                                    innerHTML: unref(t)(`pages.tracks.remove-from-playlist.title`, { title: item.title })
                                  }, null, 8, _hoisted_10)
                                ], 8, _hoisted_9))
                              }), 128)),
                              createBaseVNode("li", { onClick: remove }, [
                                createVNode(_component_Icon, { icon: "trash" }),
                                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.tracks.remove.title`)), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["leftAuto", "rightAuto"]))
                  ], 64))
                : createCommentVNode("", true),
              (data.id)
                ? (openBlock(), createBlock(_sfc_main$o, {
                    key: 3,
                    state: data.item?.state,
                    states: data.states,
                    disabled: !canEditState.value,
                    onChange: changeState
                  }, null, 8, ["state", "states", "disabled"]))
                : createCommentVNode("", true),
              ((canEdit.value || canEditContributor.value) && props.viewMode === 'list')
                ? (openBlock(), createBlock(Button, {
                    key: 4,
                    name: unref(t)(`pages.tracks.${ props.track?.id ? 'edit' : 'add' }.save-and-add-more`),
                    class: "size-s secondary",
                    disabled: saveDisabled.value,
                    onClick: saveChangesAndAddMore
                  }, null, 8, ["name", "disabled"]))
                : createCommentVNode("", true),
              ((canEdit.value || canEditContributor.value))
                ? (openBlock(), createBlock(Button, {
                    key: 5,
                    name: unref(t)(`pages.tracks.${ props.track?.id ? 'edit' : 'add' }.save`),
                    class: normalizeClass(["size-s", {
                        tertiary: data.uploading,
                        active: data.uploading,
                        invert: data.uploading,
                        secondary: !data.uploading
                    }]),
                    disabled: saveDisabled.value,
                    loading: data.uploading,
                    errorsTooltip: errorsTooltip.value,
                    onClick: saveChanges
                  }, null, 8, ["name", "disabled", "loading", "errorsTooltip", "class"]))
                : createCommentVNode("", true)
            ], 8, ["to", "disabled"]))
          ], 2)
        ], 2)), [
          [vShow, !data.updating || props.viewMode === 'table']
        ])
      : createCommentVNode("", true),
    (data.loading || (data.updating && props.viewMode !== 'table'))
      ? (openBlock(), createElementBlock("div", _hoisted_11, [
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
const TrackInfo = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-101a2a0f"]]);

const _hoisted_1$1 = { class: "items-list" };
const _hoisted_2 = ["onClick"];

    
const _sfc_main$1 = {
  __name: 'Tracks',
  props: {
        items: { type: Array, required: true },
        sortable: { type: Boolean, default: false },
        showState: { type: Boolean, default: true },
        id: { type: [String, null], default: null }
    },
  emits: ['change', 'sort'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    const onSortEnd = (evt) => {
        const movedItem = props.items.splice(evt.oldIndex, 1)[0];
        props.items.splice(evt.newIndex, 0, movedItem);

        emit('sort', { 
            oldIndex: evt.oldIndex,
            newIndex: evt.newIndex,
        });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    (props.items.length)
      ? (openBlock(), createBlock(unref(draggable), {
          key: 0,
          modelValue: props.items,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((props.items) = $event)),
          "item-key": (item) => item.id || item.localId,
          tag: "ul",
          handle: ".sort-button",
          "ghost-class": "dragging",
          onEnd: onSortEnd,
          class: "items"
        }, {
          item: withCtx(({ element: item }) => [
            createBaseVNode("li", {
              class: normalizeClass({ active: props.id === item.id || props.id === item.localId }),
              onClick: $event => (emit('change', item))
            }, [
              (props.sortable)
                ? (openBlock(), createBlock(Button, {
                    key: 0,
                    icon: "drag",
                    class: "tertiary submenu size-m sort-button"
                  }))
                : createCommentVNode("", true),
              createVNode(TrackPreview, {
                item: item,
                showState: props.showState
              }, null, 8, ["item", "showState"])
            ], 10, _hoisted_2)
          ]),
          _: 1
        }, 8, ["modelValue", "item-key"]))
      : createCommentVNode("", true),
    (!props.items.length)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 1,
          class: "empty",
          title: unref(t)(`pages.tracks.empty.title`),
          description: unref(t)(`pages.tracks.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const Tracks = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-61a6f2ed"]]);

const _hoisted_1 = {
  key: 1,
  class: "title"
};

    
const _sfc_main = {
  __name: 'TrackEditor',
  props: {
        artist: { type: [Object, null], default: null },
        release: { type: [Object, null], default: null },
        playlist: { type: [Object, null], default: null },
        items: { type: [Array, null], default: null }
    },
  emits: ['update', 'add', 'remove', 'close'],
  setup(__props, { expose: __expose, emit: __emit }) {

    const { t } = useI18n();
    const emit = __emit;

    const releases = api.releases();
    const playlists = api.playlists();
    const modals = stores.modals();

    const editor = ref(null);


    const props = __props;

    const data = reactive({
        t: {
            title: 'pages.tracks.title',
            back: 'pages.tracks.back',
            'add-one': 'pages.tracks.add-one',
            'select-several': 'pages.tracks.select-several',
            empty: {
                title: 'pages.tracks.empty.title',
                description: 'pages.tracks.empty.description'
            },
            revert: {
                confirm: {
                    title: 'pages.tracks.revert.confirm.title',
                    description: 'pages.tracks.revert.confirm.description'
                }
            },
            unsaved: {
                confirm: {
                    title: 'pages.tracks.unsaved.confirm.title',
                    description: 'pages.tracks.unsaved.confirm.description'
                }
            }
        },
        code: 'track-editor',
    });

    const canAdd = computed(() => {
        return api.tracks().canAdd({
            artist: props.artist,
            release: props.release,
            playlist: props.playlist
        });
    });

    const sortable = computed(() => {
        if (props.release) {
            return api.releases().canEdit({
                artist: props.artist,
                release: props.release,
                playlist: props.playlist
            });
        }

        if (props.playlist) {
            return api.playlists().canEdit({
                artist: props.artist,
                release: props.release,
                playlist: props.playlist
            });
        }

        return false;
    });

    const create = (count) => {
        editor.value.create(count);
    };

    const selectItems = (items) => {
        const offset = items.length;

        modals.open('select-tracks', {
            data: {
                items,
                artist: props.artist
            },
            callback: (items) => {
                items?.forEach((item, id) => {
                    // Добавляем к релизу
                    addItemToRelease(item, offset + 1 + id);

                    // Добавляем к плейлисту
                    addItemToPlaylist(item, offset + 1 + id);

                    // Добавляем к редактор
                    editor.value.add(item);
                });
            }
        });
    };

    const addItemToRelease = async (payload, position) => {
        if (!props.release?.id || !payload?.id) {
            return;
        }

        // Если я не куратор треков и релиз опубликован, то добавлять нельзя
        if (!api.releases().canAddTrack({
            artist: props.artist,
            release: props.release,
            track: payload,
            playlist: props.playlist
        })) {
            return;
        }

        await releases.tracks.add({
            releaseId: props.release.id,
            trackId: payload.id
        });


        // Устанавливаем положение трека в релизе
        await updateItemPosition(payload.id, position);
    };

    const addItemToPlaylist = async (payload, position) => {
        if (!props.playlist?.id || !payload?.id) {
            return;
        }

        // Если я не куратор треков и релиз опубликован, то добавлять нельзя
        if (!api.playlists().canAddTrack({
            artist: props.artist,
            release: props.release,
            track: payload,
            playlist: props.playlist
        })) {
            return;
        }

        await playlists.tracks.add({
            playlistId: props.playlist.id,
            trackId: payload.id
        });


        // Устанавливаем положение трека в релизе
        await updateItemPosition(payload.id, position);
    };

    const updateItemPosition = async (id, position) => {
        if (!id || !position) {
            return;
        }

        if (props.release?.id) {
            await releases.tracks.setPosition({
                releaseId: props.release?.id,
                trackId: id,
                position
            });
        }

        if (props.playlist?.id) {
            await playlists.tracks.setPosition({
                playlistId: props.playlist?.id,
                trackId: id,
                position
            });
        }
    };

    const onSort = (payload) => {
        if (!payload?.items?.length) {
            return;
        }

        payload.items.forEach((item, id) => {
            if (item.position !== id + 1) {
                if (id === payload.newIndex) {
                    updateItemPosition(item.id, id + 1);
                }

                item.position = id + 1;
            }
        });
    };

    onMounted(() => {
        if (props.items?.length) {
            data.item = props.items[0];
        }
    });

    __expose({
        create
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createBlock(ItemsEditor, {
    t: data.t,
    code: data.code,
    canAdd: canAdd.value,
    getItem: unref(api).tracks().get,
    selectItems: selectItems,
    sortable: sortable.value && (!!props.release?.id || !!props.playlist?.id),
    items: props.items,
    onUpdate: _cache[0] || (_cache[0] = $event => (emit('update', $event))),
    onAdd: _cache[1] || (_cache[1] = $event => (emit('add', $event))),
    onRemove: _cache[2] || (_cache[2] = $event => (emit('remove', $event))),
    onClose: _cache[3] || (_cache[3] = $event => (emit('close', $event))),
    onSort: onSort,
    ref_key: "editor",
    ref: editor
  }, {
    "page-header-title": withCtx(() => [
      (props.artist || props.release || props.playlist)
        ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (props.artist)
              ? (openBlock(), createBlock(PageHeaderArtistTitle, {
                  key: 0,
                  artist: props.artist
                }, null, 8, ["artist"]))
              : createCommentVNode("", true),
            (props.artist && (props.release || props.playlist))
              ? (openBlock(), createBlock(_component_Icon, {
                  key: 1,
                  icon: "chevron-right",
                  class: "devider"
                }))
              : createCommentVNode("", true),
            (props.release)
              ? (openBlock(), createBlock(PageHeaderReleaseTitle, {
                  key: 2,
                  release: props.release
                }, null, 8, ["release"]))
              : createCommentVNode("", true),
            (props.playlist)
              ? (openBlock(), createBlock(PageHeaderPlaylistTitle, {
                  key: 3,
                  playlist: props.playlist
                }, null, 8, ["playlist"]))
              : createCommentVNode("", true)
          ], 64))
        : (openBlock(), createElementBlock("label", _hoisted_1, toDisplayString(unref(t)(`pages.tracks.title`)), 1))
    ]),
    items: withCtx(({ id, items, change, sortable, sort }) => [
      createVNode(Tracks, {
        id: id,
        items: items,
        sortable: sortable,
        onChange: change,
        onSort: sort
      }, null, 8, ["id", "items", "sortable", "onChange", "onSort"])
    ]),
    preview: withCtx(({ item }) => [
      createVNode(TrackPreview, {
        item: item,
        showState: true
      }, null, 8, ["item"])
    ]),
    item: withCtx(({ toolbarId, position, item, viewMode, edit, add, update, remove, close, sections, hide, actions }) => [
      createVNode(TrackInfo, {
        toolbarId: toolbarId,
        position: position,
        track: item,
        viewMode: viewMode,
        artist: props.artist,
        release: props.release,
        playlist: props.playlist,
        onEdit: edit,
        onAdd: add,
        onUpdate: update,
        onRemove: remove,
        onClose: close,
        onHide: hide,
        onSections: sections,
        onActions: actions
      }, null, 8, ["toolbarId", "position", "track", "viewMode", "artist", "release", "playlist", "onEdit", "onAdd", "onUpdate", "onRemove", "onClose", "onHide", "onSections", "onActions"])
    ]),
    _: 1
  }, 8, ["t", "code", "canAdd", "getItem", "sortable", "items"]))
}
}

};
const TrackEditor = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-9efdf15b"]]);

export { ArtistAutoComplete as A, ItemsSections as I, PageHeaderArtistTitle as P, TrackEditor as T, _sfc_main$h as _, Tracks as a, PageHeaderReleaseTitle as b, ItemsEditor as c, _sfc_main$q as d, _sfc_main$o as e, IconState as f };
//# sourceMappingURL=TrackEditor-CLeDYELw.js.map
