import { _ as _export_sfc, a as useI18n, b as createElementBlock, e as createCommentVNode, o as openBlock, h as createBaseVNode, g as createVNode, t as toDisplayString, ao as State, u as unref, P as hooks, A as computed, i as api, c as createBlock, H as Img, f as ref, r as reactive, ap as code, j as onMounted, O as withCtx, l as renderSlot, X as mergeProps, Y as AutoComplete, m as watch, n as normalizeClass, D as Button, I as IconButton, aq as draggable, E as EmptyLabel, s as stores, y as resolveComponent, V as _sfc_main$b, F as Fragment, K as Teleport, Z as PlaylistPreview, W as TrackPreview, a4 as ReleasePreview, ae as ArtistPreview, d as renderList, w as withDirectives, v as vShow, k as Field, a0 as DateField, J as Toggler, x as _sfc_main$c, M as Loader, N as delay, G as message } from './index-CuriYjet.js';
import { P as PageHeader } from './PageHeader-k1bkUrc5.js';
import { M as Menu } from './Menu-DGTCfHx3.js';
import { M as MultilingualField } from './MultilingualField-Crotk4df.js';
import { F as FileUploader } from './FileUploader-XsAo6vke.js';

const SHOWCASE_PAGES = [
    {
        code: 'MUSIC',
        name: 'constants.showcase.pages.music'
    }
];

const SHOWCASE_WIDGET_TEMPLATES = [
    {
        code: 'CAROUSEL_S',
        name: 'Carousel S'
    }, {
        code: 'CAROUSEL_M',
        name: 'Carousel M'
    }, {
        code: 'CAROUSEL_L',
        name: 'Carousel L'
    }
];

const SHOWCASE_WIDGET_TYPE = [
    {
        code: 'EDITORIAL',
        name: 'Editorial'
    }, {
        code: 'ALGORITHMIC',
        name: 'Algorithmic'
    }, {
        code: 'STATIC',
        name: 'Static'
    }
];

const _hoisted_1$a = {
  key: 0,
  class: "item-preview"
};
const _hoisted_2$8 = { key: 0 };
const _hoisted_3$7 = {
  key: 0,
  class: "date"
};
const _hoisted_4$4 = {
  key: 1,
  class: "date"
};
const _hoisted_5$4 = {
  key: 2,
  class: "date"
};

    
const _sfc_main$a = {
  __name: 'ShowcaseSectionPreview',
  props: {
        item: { type: [Object, null], default: null }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

return (_ctx, _cache) => {
  return (props.item)
    ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", null, [
          createBaseVNode("span", null, toDisplayString((props.item.name ? props.item.name['en-US'] : '') || ''), 1),
          createVNode(State, {
            state: props.item.showed ? 'published' : 'draft'
          }, null, 8, ["state"])
        ]),
        (props.item.startDate || props.item.endDate)
          ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
              (props.item.startDate && props.item.endDate)
                ? (openBlock(), createElementBlock("span", _hoisted_3$7, toDisplayString(unref(hooks)(props.item.startDate).format('DD.MM')) + " - " + toDisplayString(unref(hooks)(props.item.endDate).format('DD.MM.YYYY')), 1))
                : (props.item.startDate)
                  ? (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(unref(t)(`pages.showcase.section.fields.start-date.name`)) + " " + toDisplayString(unref(hooks)(props.item.startDate).format('DD.MM.YYYY')), 1))
                  : (props.item.endDate)
                    ? (openBlock(), createElementBlock("span", _hoisted_5$4, toDisplayString(unref(t)(`pages.showcase.section.fields.end-date.name`)) + " " + toDisplayString(unref(hooks)(props.item.endDate).format('DD.MM.YYYY')), 1))
                    : createCommentVNode("", true)
            ]))
          : createCommentVNode("", true)
      ]))
    : createCommentVNode("", true)
}
}

};
const ShowcaseSectionPreview = /*#__PURE__*/_export_sfc(_sfc_main$a, [['__scopeId',"data-v-da59f813"]]);

const _hoisted_1$9 = {
  key: 0,
  class: "item-preview"
};
const _hoisted_2$7 = { key: 0 };
const _hoisted_3$6 = {
  key: 0,
  class: "date"
};
const _hoisted_4$3 = {
  key: 1,
  class: "date"
};
const _hoisted_5$3 = {
  key: 2,
  class: "date"
};

    
const _sfc_main$9 = {
  __name: 'ShowcaseWidgetPreview',
  props: {
        item: { type: [Object, null], default: null }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

    const defaultWidgetImage = computed(() => {
        return api.showcase().defaultWidgetCover;
    });

return (_ctx, _cache) => {
  return (props.item)
    ? (openBlock(), createElementBlock("span", _hoisted_1$9, [
        (props.item.cover?.resized || props.item.headerCover?.resized || defaultWidgetImage.value?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: props.item.cover?.resized || props.item.headerCover?.resized || defaultWidgetImage.value?.resized,
              original: props.item.cover?.original || props.item.headerCover?.original || defaultWidgetImage.value?.original,
              alt: (props.item.name ? props.item.name['en-US'] : '') || ''
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("div", null, [
          createBaseVNode("div", null, [
            createBaseVNode("span", null, toDisplayString((props.item.name ? props.item.name['en-US'] : '') || ''), 1),
            createVNode(State, {
              state: props.item.showed ? 'published' : 'draft'
            }, null, 8, ["state"])
          ]),
          (props.item.startDate || props.item.endDate)
            ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
                (props.item.startDate || props.item.endDate)
                  ? (openBlock(), createElementBlock("span", _hoisted_3$6, toDisplayString(unref(hooks)(props.item.startDate).format('DD.MM')) + " - " + toDisplayString(unref(hooks)(props.item.endDate).format('DD.MM.YYYY')), 1))
                  : (props.item.startDate)
                    ? (openBlock(), createElementBlock("span", _hoisted_4$3, toDisplayString(unref(t)(`pages.showcase.widget.fields.start-date.name`)) + " " + toDisplayString(unref(hooks)(props.item.startDate).format('DD.MM.YYYY')), 1))
                    : (props.item.endDate)
                      ? (openBlock(), createElementBlock("span", _hoisted_5$3, toDisplayString(unref(t)(`pages.showcase.widget.fields.end-date.name`)) + " " + toDisplayString(unref(hooks)(props.item.endDate).format('DD.MM.YYYY')), 1))
                      : createCommentVNode("", true)
              ]))
            : createCommentVNode("", true)
        ])
      ]))
    : createCommentVNode("", true)
}
}

};
const ShowcaseWidgetPreview = /*#__PURE__*/_export_sfc(_sfc_main$9, [['__scopeId',"data-v-94ec8bee"]]);

const _hoisted_1$8 = { class: "name" };

    
const _sfc_main$8 = {
  __name: 'ShowcaseWidgetAutoComplete',
  props: {
        selectOnly: { type: Boolean, default: false }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const autocomplete = ref(null);

    const props = __props;

    const data = reactive({
        code: code(),
        optionList: []
    });

    const onAutoCompleteSearch = async (value) => {
        const searchStr = value?.toLowerCase().trim();

        const params = {
            skip: 0,
            take: 20,
            parentId: null,
            sort: 'name',
            sort_dir: 'asc'
        };

        if (searchStr?.trim()) {
            params.name = searchStr.trim().toLowerCase();
        }

        const payload = await api.showcase().widget.preview(params, data.code);

        if (!payload?.items) {
            data.optionList = [];
            return;
        }

        data.optionList = await payload.items.map(item => ({
            ...item,
            code: item.id,
        }));
    };

    const change = (e) => {
        if (data.lock) {
            return false;
        }

        emit('change', e);

        if (props.selectOnly) {
            data.lock = true;
            setTimeout(() => {
                clean();
                setTimeout(() => {
                    data.lock = false;
                });
            });
        }
    };

    const clean = () => {
        if (autocomplete?.value?.clean) {
            autocomplete?.value?.clean();
        }
    };

    onMounted(() => {
        onAutoCompleteSearch();
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(AutoComplete, mergeProps(props, {
    optionWidth: 320,
    optionList: data.optionList || [],
    class: "noerror",
    onSearch: onAutoCompleteSearch,
    onChange: change,
    ref_key: "autocomplete",
    ref: autocomplete
  }), {
    trigger: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ]),
    option: withCtx(({ option }) => [
      createVNode(ShowcaseWidgetPreview, { item: option }, null, 8, ["item"])
    ]),
    value: withCtx(({ value }) => [
      createBaseVNode("span", _hoisted_1$8, toDisplayString(value.name), 1)
    ]),
    _: 3
  }, 16, ["optionList"]))
}
}

};
const ShowcaseWidgetAutoComplete = /*#__PURE__*/_export_sfc(_sfc_main$8, [['__scopeId',"data-v-f4cf105b"]]);

const _hoisted_1$7 = ["onClick"];
const _hoisted_2$6 = {
  key: 1,
  class: "row empty"
};
const _hoisted_3$5 = { class: "trigger-box" };

    
const _sfc_main$7 = {
  __name: 'ShowcaseLineupWidgets',
  props: {
        id: { type: [String, null], default: null },
        parentId: { type: [String, null], default: null },
        sectionId: { type: [String, null], default: null },
        items: { type: [Array, null], default: null }
    },
  emits: ['change', 'open'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        items: [...(props.items || []), { code: code() }]
    });

    const defaultWidgetImage = computed(() => {
        return api.showcase().defaultWidgetCover;
    });

    const onChange = () => {
        emit('change', {
            sectionId: props.sectionId,
            id: props.parentId,
            childs: data.items.filter(item => !!item.id)
        });
    };

    const onChildChange = (payload) => {
        if (data.items) {
            data.items.forEach(item => {
                if (item.id === payload?.id) {
                    item.childs = payload.childs;
                }
            });

            onChange();
        }
    };

    const update = (id, params) => {
        api.showcase().widget.update(id, params);
    };

    const toggleShowed = (item) => {
        if (!item?.id) {
            return;
        }

        item.showed = !item.showed;

        update(item.id, { showed: item.showed });

        onChange();
    };

    const remove = (payload) => {
        update(payload.id, { parentId: null, sectionId: null });

        data.items.splice(data.items.indexOf(payload), 1);

        onChange();
    };

    const onSelect = (e) => {
        if (!e?.values?.length) {
            return;
        }

        data.items.splice(data.items.length - 1, 0, e.values[0]);

        update(e.values[0].id, {
            parentId: props.parentId,
            sectionId: props.sectionId,
            position: data.items.length
        });


        onChange();
    };

    watch(
        () => data.items,
        (newValue, oldValue) => {
            const emptyIndex = data.items.findIndex(item => !item.id);
            if (emptyIndex !== data.items.length - 1 && emptyIndex !== -1) {
                data.items.push(...data.items.splice(emptyIndex, 1));
            }

            newValue.filter(item => !!item.id).forEach((item, id) => {
                if (
                    (item.parentId !== props.parentId) ||
                    (item.sectionId !== props.sectionId) ||
                    (item.position !== id + 1)) {
            console.log(item, id);

                    update(item.id, {
                        parentId: props.parentId,
                        sectionId: props.sectionId,
                        position: id + 1
                    });
                }
            });

            onChange();
        }
    );

return (_ctx, _cache) => {
  return (data.items?.length)
    ? (openBlock(), createBlock(unref(draggable), {
        key: 0,
        modelValue: data.items,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((data.items) = $event)),
        "item-key": (item) => item.id || item.code,
        tag: "ul",
        handle: ".sort-button",
        group: "widgets",
        "ghost-class": "dragging",
        class: "items"
      }, {
        item: withCtx(({ element: item }) => [
          createBaseVNode("li", {
            class: normalizeClass({ active: props.id === item.id })
          }, [
            (item.id)
              ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "row",
                  onClick: $event => (emit('open', item))
                }, [
                  createVNode(Button, {
                    icon: "drag",
                    class: "tertiary submenu size-m sort-button"
                  }),
                  createVNode(ShowcaseWidgetPreview, { item: item }, null, 8, ["item"]),
                  createVNode(IconButton, {
                    icon: item.showed ? 'eye-opened' : 'eye-closed',
                    class: "tertiary size-m",
                    onClick: $event => (toggleShowed(item))
                  }, null, 8, ["icon", "onClick"]),
                  createVNode(IconButton, {
                    icon: "close",
                    disabled: !!item.childs?.length,
                    class: "tertiary size-m",
                    onClick: $event => (remove(item))
                  }, null, 8, ["disabled", "onClick"])
                ], 8, _hoisted_1$7))
              : (openBlock(), createElementBlock("div", _hoisted_2$6, [
                  createVNode(ShowcaseWidgetAutoComplete, {
                    maxValuesCount: 1,
                    selectOnly: true,
                    onChange: onSelect
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3$5, [
                        createVNode(IconButton, {
                          icon: "plus",
                          class: "tertiary submenu size-m"
                        }),
                        (defaultWidgetImage.value?.resized)
                          ? (openBlock(), createBlock(Img, {
                              key: 0,
                              preview: defaultWidgetImage.value?.resized,
                              original: defaultWidgetImage.value?.original,
                              alt: 'Add subwidget'
                            }, null, 8, ["preview", "original"]))
                          : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ])),
            (item.id)
              ? (openBlock(), createBlock(ShowcaseLineupWidgets, {
                  key: 2,
                  items: item.childs,
                  id: props.id,
                  parentId: item.id,
                  sectionId: props.sectionId,
                  onOpen: _cache[0] || (_cache[0] = $event => (emit('open', $event))),
                  onChange: onChildChange
                }, null, 8, ["items", "id", "parentId", "sectionId"]))
              : createCommentVNode("", true)
          ], 2)
        ]),
        _: 1
      }, 8, ["modelValue", "item-key"]))
    : createCommentVNode("", true)
}
}

};
const ShowcaseLineupWidgets = /*#__PURE__*/_export_sfc(_sfc_main$7, [['__scopeId',"data-v-dd0940b0"]]);

const _hoisted_1$6 = { class: "items-list" };
const _hoisted_2$5 = { class: "row" };

    
const _sfc_main$6 = {
  __name: 'ShowcaseLineup',
  props: {
        id: { type: [String, null], default: null }
    },
  emits: ['openWidget'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        items: [],
        loading: false
    });

    const update = (id, params) => {
        api.showcase().section.update(id, params);
    };

    const toggleShowed = (item) => {
        if (!item?.id) {
            return;
        }

        item.showed = !item.showed;

        update(item.id, { showed: item.showed });
    };

    watch(
        () => data.items,
        (newValue, oldValue) => {
            newValue.forEach((item, id) => {
                if (item.position !== id + 1) {
                    item.position = id + 1;
                    api.showcase().section.update(item.id, { position: item.position });
                }
            });
        }
    );

    onMounted(async() => {
        const payload = await api.showcase().section.list({
            skip: 0,
            take: 100
        });

        const widgets = (await api.showcase().widget.list({
            skip: 0,
            take: 100
        }))?.items || [];

        const getWidgets = (sectionId, parentId) => {
            return widgets.filter(item => item.sectionId === sectionId && item.parentId === parentId).map(item => ({
                ...item,
                childs: getWidgets(sectionId, item.id)
            })).sort((a, b) => a.position > b.position ? 1 : -1);
        };

        data.items = (payload.items || []).map(item => ({
            ...item,
            type: 'section',
            childs: getWidgets(item.id, null)
        })).sort((a, b) => a.position > b.position ? 1 : -1);
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(unref(draggable), {
      modelValue: data.items,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((data.items) = $event)),
      "item-key": (item) => item.id,
      tag: "ul",
      handle: ".sort-button",
      "ghost-class": "dragging",
      group: "sections",
      onEnd: _cache[2] || (_cache[2] = () => {}),
      class: "items"
    }, {
      item: withCtx(({ element: item }) => [
        createBaseVNode("li", {
          class: normalizeClass({ active: props.id === item.id })
        }, [
          createBaseVNode("div", _hoisted_2$5, [
            createVNode(Button, {
              icon: "drag",
              class: "tertiary submenu size-m sort-button"
            }),
            createVNode(ShowcaseSectionPreview, { item: item }, null, 8, ["item"]),
            createVNode(IconButton, {
              icon: item.showed ? 'eye-opened' : 'eye-closed',
              class: "tertiary size-m",
              onClick: $event => (toggleShowed(item))
            }, null, 8, ["icon", "onClick"])
          ]),
          createVNode(ShowcaseLineupWidgets, {
            items: item.childs,
            id: props.id,
            sectionId: item.id,
            onOpen: _cache[0] || (_cache[0] = $event => (emit('openWidget', $event)))
          }, null, 8, ["items", "id", "sectionId"])
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "item-key"]),
    (data.loading)
      ? (openBlock(), createBlock(Button, {
          key: 0,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)('pages.showcase.lineup.load')
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 1,
          class: "empty",
          title: unref(t)(`pages.showcase.lineup.empty.title`),
          description: unref(t)(`pages.showcase.lineup.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const ShowcaseLineup = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-6e85b27e"]]);

const _hoisted_1$5 = { class: "items-list" };


    
const _sfc_main$5 = {
  __name: 'ShowcaseLineupWidgetContent',
  props: {
        item: { type: [Object, null], default: null }
    },
  emits: ['update', 'add', 'edit'],
  setup(__props, { emit: __emit }) {
    const locale = stores.locale();
    const user = stores.user();
    const modals = stores.modals();

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        // playlists: [],
        // tracks: [],
        // releases: [],
        // artists: [],
        type: null,
        items: []
    });

    window.q = props;

    const addButtonName = computed(() => {
        if (!data.type) {
            return;
        }

        return t(`pages.showcase.lineup.types.${data.type}.add`);
    });

    watch(
        () => data.items,
        () => {
            checkPosition();
        }
    );

    // Remove
        const remove = (item) => {
            // Playlist
            if (data.type === 'playlist') {
                api.showcase().widget.playlist.remove({
                    widgetId: props.item?.id,
                    playlistId: item?.id
                });
            }

            // Release
            if (data.type === 'release') {
                api.showcase().widget.release.remove({
                    widgetId: props.item?.id,
                    releaseId: item?.id
                });
            }

            // Track
            if (data.type === 'track') {
                api.showcase().widget.track.remove({
                    widgetId: props.item?.id,
                    trackId: item?.id
                });
            }

            // Artist
            if (data.type === 'artist') {
                api.showcase().widget.artist.remove({
                    widgetId: props.item?.id,
                    artistId: item?.id
                });
            }

            data.items.splice(data.items.indexOf(item), 1);
            checkPosition();
        };

    // Position
        const checkPosition = () => {
            clearTimeout(data.checkPositionTimeout);

            data.checkPositionTimeout = setTimeout(() => {
                delete data.checkPositionTimeout;

                let alreadySended = false;


                data.items.filter(item => !!item.id).forEach((item, id) => {
                    if (item.position !== id + 1) {

                        item.position = id + 1;

                        if (!alreadySended) {
                            // Playlist
                            if (data.type === 'playlist') {
                                api.showcase().widget.playlist.setPosition({
                                    widgetId: props.item?.id,
                                    playlistId: item?.id,
                                    position: id + 1 
                                });
                            }

                            // Release
                            if (data.type === 'release') {
                                api.showcase().widget.release.setPosition({
                                    widgetId: props.item?.id,
                                    releaseId: item?.id,
                                    position: id + 1 
                                });
                            }

                            // Track
                            if (data.type === 'track') {
                                api.showcase().widget.track.setPosition({
                                    widgetId: props.item?.id,
                                    trackId: item?.id,
                                    position: id + 1 
                                });
                            }

                            // Artist
                            if (data.type === 'artist') {
                                api.showcase().widget.artist.setPosition({
                                    widgetId: props.item?.id,
                                    artistId: item?.id,
                                    position: id + 1 
                                });
                            }

                            alreadySended = true;
                        }
                    }
                });
            }, 100);
        };

    // Add
        const add = (payload, mode) => {
            if (!payload?.id) {
                return;
            }

            if (data.items.find(item => item.id === payload.id)) {
                return;
            }

            if (mode === 'beginning') {
                data.items.unshift(payload);
            } else {
                data.items.push(payload);
            }

            checkPosition();
        };

        const addPlaylist = async (payload, mode) => {
            if (!data.type) {
                data.type = 'playlist';
            }

            await api.showcase().widget.playlist.add({
                widgetId: props.item?.id,
                playlistId: payload?.id
            });

            add(payload, mode);
        };

        const addTrack = async (payload, mode) => {
            if (!data.type) {
                data.type = 'track';
            }

            await api.showcase().widget.track.add({
                widgetId: props.item?.id,
                trackId: payload?.id
            });

            add(payload, mode);
        };

        const addRelease = async (payload, mode) => {
            if (!data.type) {
                data.type = 'release';
            }

            await api.showcase().widget.release.add({
                widgetId: props.item?.id,
                releaseId: payload?.id
            });

            add(payload, mode);
        };

        const addArtist = async (payload, mode) => {
            if (!data.type) {
                data.type = 'artist';
            }

            await api.showcase().widget.artist.add({
                widgetId: props.item?.id,
                artistId: payload?.id
            });

            add(payload, mode);
        };

    // Select
        const selectPlaylists = (mode) => {
            modals.open('select-playlists', {
                data: {
                    items: data.items
                },
                callback: (items) => {
                    if (!items?.length) {
                        return;
                    }

                    if (mode === 'beginning') {
                        items.reverse().forEach(item => addPlaylist(item, mode));
                    } else {
                        items.forEach(item => addPlaylist(item, mode));
                    }
                }
            });
        };

        const selectTracks = (mode) => {
            modals.open('select-tracks', {
                data: {
                    items: data.items
                },
                callback: (items) => {
                    if (!items?.length) {
                        return;
                    }

                    if (mode === 'beginning') {
                        items.reverse().forEach(item => addTrack(item, mode));
                    } else {
                        items.forEach(item => addTrack(item, mode));
                    }
                }
            });
        };

        const selectReleases = (mode) => {
            modals.open('select-releases', {
                data: {
                    items: data.items
                },
                callback: (items) => {
                    if (!items?.length) {
                        return;
                    }

                    if (mode === 'beginning') {
                        items.reverse().forEach(item => addRelease(item, mode));
                    } else {
                        items.forEach(item => addRelease(item, mode));
                    }
                }
            });
        };

        const selectArtists = (mode) => {
            modals.open('select-artists', {
                data: {
                    items: data.items
                },
                callback: (items) => {
                    if (!items?.length) {
                        return;
                    }

                    if (mode === 'beginning') {
                        items.reverse().forEach(item => addArtist(item, mode));
                    } else {
                        items.forEach(item => addArtist(item, mode));
                    }
                }
            });
        };

        const selectToBeginning = () => {
            const actions = {
                playlist: selectPlaylists,
                track: selectTracks,
                release: selectReleases,
                artist: selectArtists
            };

            if (actions[data.type]) {
                actions[data.type]('beginning');
            }
        };

        const selectToEnd = () => {
            const actions = {
                playlist: selectPlaylists,
                track: selectTracks,
                release: selectReleases,
                artist: selectArtists
            };

            if (actions[data.type]) {
                actions[data.type]('end');
            }
        };

    const onSortEnd = (evt) => {
        // const movedItem = props.items.splice(evt.oldIndex, 1)[0]
        // props.items.splice(evt.newIndex, 0, movedItem);

        // emit('sort', { 
        //     oldIndex: evt.oldIndex,
        //     newIndex: evt.newIndex,
        // });
    };

    onMounted(() => {
        if (props.item?.releases?.length) {
            data.type = 'release';
            data.items = props.item.releases;
        }

        if (props.item?.tracks?.length) {
            data.type = 'track';
            data.items = props.item.tracks;
        }

        if (props.item?.playlists?.length) {
            data.type = 'playlist';
            data.items = props.item.playlists;
        }

        if (props.item?.artists?.length) {
            data.type = 'artist';
            data.items = props.item.artists;
        }
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    (openBlock(), createBlock(Teleport, { to: "#head-buttons" }, [
      (unref(user).isShowcaseCurator && props.item?.id)
        ? (openBlock(), createBlock(_sfc_main$b, {
            key: 0,
            icon: "plus",
            leftAuto: !unref(locale).rtl,
            rightAuto: unref(locale).rtl,
            tertiary: true,
            invert: true,
            size: "size-m",
            onToggle: _cache[0] || (_cache[0] = $event => (data.addKebabActive = !data.addKebabActive))
          }, {
            trigger: withCtx(() => [
              createVNode(Button, {
                icon: "plus",
                name: addButtonName.value,
                class: normalizeClass({
                        active: data.addKebabActive,
                        invert: true,
                        tertiary: true,
                        'size-s': addButtonName.value,
                        'size-m': !addButtonName.value
                    }),
                kebabTrigger: !!addButtonName.value
              }, null, 8, ["name", "class", "kebabTrigger"])
            ]),
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                (!data.items?.length)
                  ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("li", { onClick: selectPlaylists }, [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createBaseVNode("span", null, toDisplayString(unref(t)('pages.showcase.lineup.types.playlist.add')), 1)
                      ]),
                      createBaseVNode("li", { onClick: selectReleases }, [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createBaseVNode("span", null, toDisplayString(unref(t)('pages.showcase.lineup.types.release.add')), 1)
                      ]),
                      createBaseVNode("li", { onClick: selectTracks }, [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createBaseVNode("span", null, toDisplayString(unref(t)('pages.showcase.lineup.types.track.add')), 1)
                      ]),
                      createBaseVNode("li", { onClick: selectArtists }, [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createBaseVNode("span", null, toDisplayString(unref(t)('pages.showcase.lineup.types.artist.add')), 1)
                      ])
                    ], 64))
                  : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createBaseVNode("li", { onClick: selectToBeginning }, [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createBaseVNode("span", null, toDisplayString(unref(t)('pages.showcase.lineup.add.beginning')), 1)
                      ]),
                      createBaseVNode("li", { onClick: selectToEnd }, [
                        createVNode(_component_Icon, { icon: "plus" }),
                        createBaseVNode("span", null, toDisplayString(unref(t)('pages.showcase.lineup.add.end')), 1)
                      ])
                    ], 64))
              ])
            ]),
            _: 1
          }, 8, ["leftAuto", "rightAuto"]))
        : createCommentVNode("", true)
    ])),
    createBaseVNode("div", _hoisted_1$5, [
      (data.items.length)
        ? (openBlock(), createBlock(unref(draggable), {
            key: 0,
            modelValue: data.items,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((data.items) = $event)),
            "item-key": (item) => item.id,
            tag: "ul",
            handle: ".sort-button",
            "ghost-class": "dragging",
            onEnd: onSortEnd,
            class: "items"
          }, {
            item: withCtx(({ element: item }) => [
              createBaseVNode("li", null, [
                createVNode(Button, {
                  icon: "drag",
                  class: "tertiary submenu size-m sort-button"
                }),
                (data.type === 'playlist')
                  ? (openBlock(), createBlock(PlaylistPreview, {
                      key: 0,
                      item: item,
                      row: true,
                      showState: true
                    }, null, 8, ["item"]))
                  : createCommentVNode("", true),
                (data.type === 'track')
                  ? (openBlock(), createBlock(TrackPreview, {
                      key: 1,
                      item: item,
                      showState: true
                    }, null, 8, ["item"]))
                  : createCommentVNode("", true),
                (data.type === 'release')
                  ? (openBlock(), createBlock(ReleasePreview, {
                      key: 2,
                      item: item,
                      row: true,
                      showState: true
                    }, null, 8, ["item"]))
                  : createCommentVNode("", true),
                (data.type === 'artist')
                  ? (openBlock(), createBlock(ArtistPreview, {
                      key: 3,
                      item: item,
                      row: true,
                      showState: true
                    }, null, 8, ["item"]))
                  : createCommentVNode("", true),
                createVNode(IconButton, {
                  icon: "close",
                  class: "tertiary size-m",
                  onClick: $event => (remove(item))
                }, null, 8, ["onClick"])
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "item-key"]))
        : createCommentVNode("", true),
      (!data.items.length)
        ? (openBlock(), createBlock(EmptyLabel, {
            key: 1,
            class: "empty",
            title: unref(t)(`pages.showcase.lineup.empty.title`),
            description: unref(t)(`pages.showcase.lineup.empty.description`)
          }, null, 8, ["title", "description"]))
        : createCommentVNode("", true)
    ])
  ], 64))
}
}

};
const ShowcaseLineupWidgetContent = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-0358e131"]]);

const _hoisted_1$4 = { class: "items-list" };
const _hoisted_2$4 = { class: "items" };
const _hoisted_3$4 = ["onClick"];

    
const _sfc_main$4 = {
  __name: 'ShowcaseSections',
  props: {
        id: { type: [String, null], default: null }
    },
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        items: [],
        loading: false,
        skip: 0,
        take: 20,
        total: 0
    });

    const getItems = async () => {
        data.loading = true;

        if (!data.skip) {
            data.items = [];
        }

        const payload = await api.showcase().section.list({
            skip: data.skip,
            take: data.take
        });


        setTimeout(() => {
            if (payload?.items?.length) {
                data.items.splice(data.items.length, 0, ...(payload.items || []));
            }

            data.skip = data.items.length;
            data.total = payload?.total || 0;

            data.loading = false;
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
        if (!payload?.id) {
            return;
        }

        const item = data.items.find(item => item.id === payload.id);
        if (item) {
            data.items.splice(data.items.indexOf(item), 1, payload);
        }
    };

    const remove = (id) => {
        if (!id) {
            return;
        }

        const item = data.items.find(item => item.id === id);
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
  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("ul", _hoisted_2$4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
        return (openBlock(), createElementBlock("li", {
          class: normalizeClass({ active: props.id === item.id }),
          onClick: $event => (emit('change', item))
        }, [
          createVNode(ShowcaseSectionPreview, { item: item }, null, 8, ["item"])
        ], 10, _hoisted_3$4))
      }), 256))
    ]),
    (data.loading || (data.items.length < data.total))
      ? (openBlock(), createBlock(Button, {
          key: 0,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)('pages.showcase.section.load'),
          onClick: getItems
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 1,
          class: "empty",
          title: unref(t)(`pages.showcase.section.empty.title`),
          description: unref(t)(`pages.showcase.section.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const ShowcaseSections = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-2b688a58"]]);

const _hoisted_1$3 = {
  key: 0,
  class: "showcase-section-info"
};
const _hoisted_2$3 = { class: "title" };
const _hoisted_3$3 = { class: "form-line" };
const _hoisted_4$2 = { class: "form-line" };
const _hoisted_5$2 = { class: "box" };
const _hoisted_6$2 = { class: "attention" };
const _hoisted_7$2 = { class: "form-line" };
const _hoisted_8$1 = { class: "box" };
const _hoisted_9$1 = { class: "attention" };
const _hoisted_10$1 = { class: "form-line" };
const _hoisted_11$1 = { class: "box" };
const _hoisted_12$1 = { class: "attention" };
const _hoisted_13$1 = { class: "form-line" };
const _hoisted_14$1 = { class: "form-line" };
const _hoisted_15$1 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$3 = {
  __name: 'ShowcaseSectionInfo',
  props: {
        item: { type: [Object, null], default: null }
    },
  emits: ['update', 'add', 'remove', 'edit'],
  setup(__props, { emit: __emit }) {

    const modals = stores.modals();
    const user = stores.user();

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        id: null,
        name: {},
        code: null,
        page: SHOWCASE_PAGES[0].code,
        position: null,
        startDate: null,
        endDate: null,
        showed: false,
        loading: true
    });

    const saveDisabled = computed(() => {
        return !data.name || !data.name['en-US']?.trim().length || isDateError.value;
    });

    const isDateError = computed(() => {
        return data.startDate && data.endDate && hooks(data.startDate).diff(hooks(data.endDate)) >= 0;
    });


    const onNameChange = (value) => {
        data.name = value || {};
        onEdit();
    };

    const onPageChange = (payload) => {
        data.page = payload?.value;

        onEdit();
    };

    const onCodeChange = (e) => {
        data.code = e.target.value?.trim();
        onEdit();
    };

    const onShowedChange = (e) => {
        data.showed = !!e?.value;

        onEdit();
    };

    const onStartDateChange = (value) => {
        if (!value) {
            data.startDate = null;
        } else {
            data.startDate = hooks(value).startOf('day').toISOString();
        }

        onEdit();
    };

    const onEndDateChange = (value) => {
        if (!value) {
            data.endDate = null;
        } else {
            data.endDate = hooks(value).endOf('day').toISOString();
        }

        onEdit();
    };

    const onEdit = () => {
        emit('edit');
        data.hasChanges = true;
    };

    const saveChanges = async () => {
        const showcaseSectionInfo = {
            name: data.name,
            code: data.code,
            position: data.position,
            page: data.page || null,
            startDate: data.startDate || null,
            endDate: data.endDate || null,
            showed: !!data.showed
        };

        data.updating = true;

        let payload;

        if (data.id) {
            payload = await api.showcase().section.update(data.id, showcaseSectionInfo);
        } else {
            if (!data.position) {
                const result = await api.showcase().section.list({ skip: 0, take: 1 });
                
                if (result?.items) {
                    showcaseSectionInfo.position = (result.total || 0) + 1;
                    data.position = (result.total || 0) + 1;
                }
            }
            payload = await api.showcase().section.add(showcaseSectionInfo);
        }

        await delay(200);
        data.updating = false;

        if (payload?.id) {
            message.info(t(`pages.showcase.section.${ data.id ? 'edit' : 'add' }.done.title`));
            // modals.open('success', {
            //     data: {
            //         timer: 3,
            //         title: t(`pages.showcase.section.${ data.id ? 'edit' : 'add' }.done.title`),
            //         close: t(`pages.showcase.section.${ data.id ? 'edit' : 'add' }.done.close`)
            //     },
            //     quietClose: true
            // });
        }

        if (data.id) {
            emit('update', payload);
        } else {
            emit('add', payload);
        }

        data.id = payload.id;

        delete data.hasChanges;
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await api.showcase().section.get(props.item.id);

        data.id = payload?.id;
        data.name = payload?.name || {};
        data.code = payload?.code;
        data.page = payload?.page;
        data.startDate = payload?.startDate;
        data.position = payload?.position;
        data.endDate = payload?.endDate;
        data.showed = !!payload?.showed;

        await delay(200);

        data.loading = false;

        delete data.hasChanges;
    };

    const remove = async () => {
        modals.confirm({
            title: t(`pages.showcase.section.remove.confirm.title`),
            body: t(`pages.showcase.section.remove.confirm.description`, { name: data.name ? data.name['en-US'] : '' }),
            onOk: async () => {
                await api.showcase().section.remove(data.id);

                emit('remove', data.id);
                
                modals.open('success', {
                    data: {
                        title: t(`pages.showcase.section.remove.done.title`),
                        close: t(`pages.showcase.section.remove.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    onMounted(() => {
        if (props.item?.id) {
            getItem();
        } else {
            data.loading = false;
        }
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (!data.loading)
      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$3, [
          createBaseVNode("label", _hoisted_2$3, toDisplayString(unref(t)(`pages.showcase.section.${ props.item?.id ? 'edit' : 'add' }.title`)), 1),
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.section.fields.name`)), 1),
            createVNode(MultilingualField, {
              placeholder: unref(t)(`pages.showcase.section.fields.name`),
              value: data.name,
              disabled: !unref(user).isShowcaseCurator,
              onChange: onNameChange
            }, null, 8, ["placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.section.fields.code.name`)), 1),
            createBaseVNode("div", _hoisted_5$2, [
              createVNode(Field, {
                placeholder: unref(t)(`pages.showcase.section.fields.code.name`),
                value: data.code,
                disabled: !unref(user).isShowcaseCurator,
                class: "noerror light with-placeholder",
                onChange: onCodeChange
              }, null, 8, ["placeholder", "value", "disabled"]),
              createBaseVNode("span", _hoisted_6$2, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.section.fields.code.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.section.fields.start-date.name`)), 1),
            createBaseVNode("div", _hoisted_8$1, [
              createVNode(DateField, {
                "text-input": true,
                enableTimePicker: false,
                timePicker: false,
                placeholder: unref(t)(`pages.showcase.section.fields.start-date.placeholder`),
                isError: isDateError.value,
                format: "dd.MM.yyyy",
                class: "light noerror with-placeholder",
                disabled: !unref(user).isShowcaseCurator,
                modelValue: data.startDate,
                "onUpdate:modelValue": onStartDateChange
              }, null, 8, ["placeholder", "isError", "disabled", "modelValue"]),
              createBaseVNode("span", _hoisted_9$1, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.section.fields.start-date.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_10$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.section.fields.end-date.name`)), 1),
            createBaseVNode("div", _hoisted_11$1, [
              createVNode(DateField, {
                "text-input": true,
                enableTimePicker: false,
                timePicker: false,
                placeholder: unref(t)(`pages.showcase.section.fields.end-date.placeholder`),
                isError: isDateError.value,
                format: "dd.MM.yyyy",
                class: "light noerror with-placeholder",
                disabled: !unref(user).isShowcaseCurator,
                modelValue: data.endDate,
                "onUpdate:modelValue": onEndDateChange
              }, null, 8, ["placeholder", "isError", "disabled", "modelValue"]),
              createBaseVNode("span", _hoisted_12$1, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.section.fields.end-date.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_13$1, [
            createVNode(Toggler, {
              name: unref(t)(`pages.showcase.section.fields.showed`),
              inline: true,
              checked: data.showed,
              disabled: !unref(user).isShowcaseCurator,
              class: "reverse solid",
              onOnClick: onShowedChange
            }, null, 8, ["name", "checked", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.section.fields.page`)), 1),
            createVNode(_sfc_main$c, {
              class: "noerror light",
              optionList: unref(SHOWCASE_PAGES),
              placeholder: unref(t)(`pages.showcase.section.fields.page`),
              leftAuto: false,
              maxValuesCount: 1,
              rightAuto: false,
              useI18n: true,
              clearable: false,
              value: data.page,
              disabled: !unref(user).isShowcaseCurator,
              onChange: onPageChange
            }, null, 8, ["optionList", "placeholder", "value", "disabled"])
          ]),
          (openBlock(), createBlock(Teleport, { to: "#head-buttons" }, [
            (data.id)
              ? (openBlock(), createBlock(Button, {
                  key: 0,
                  icon: "trash",
                  name: unref(t)(`pages.showcase.section.remove.title`),
                  class: "size-s tertiary invert",
                  onClick: remove
                }, null, 8, ["name"]))
              : createCommentVNode("", true),
            createVNode(Button, {
              name: unref(t)(`pages.showcase.section.${ props.item?.id ? 'edit' : 'add' }.save`),
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
      ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
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
const ShowcaseSectionInfo = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-f822e336"]]);

const _hoisted_1$2 = { class: "items-list" };
const _hoisted_2$2 = { class: "items" };
const _hoisted_3$2 = ["onClick"];

    
const _sfc_main$2 = {
  __name: 'ShowcaseWidgets',
  props: {
        id: { type: [String, null], default: null }
    },
  emits: ['change'],
  setup(__props, { expose: __expose, emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        items: [],
        loading: false,
        skip: 0,
        take: 50,
        total: 0
    });

    const getItems = async () => {
        data.loading = true;

        if (!data.skip) {
            data.items = [];
        }

        const payload = await api.showcase().widget.preview({
            skip: data.skip,
            take: data.take
        });


        setTimeout(() => {
            if (payload?.items?.length) {
                data.items.splice(data.items.length, 0, ...(payload.items || []));
            }

            data.skip = data.items.length;
            data.total = payload?.total || 0;

            data.loading = false;
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
        if (!payload?.id) {
            return;
        }

        const item = data.items.find(item => item.id === payload.id);
        if (item) {
            data.items.splice(data.items.indexOf(item), 1, payload);
        }
    };

    const remove = (id) => {
        if (!id) {
            return;
        }

        const item = data.items.find(item => item.id === id);
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
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("ul", _hoisted_2$2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
        return (openBlock(), createElementBlock("li", {
          class: normalizeClass({ active: props.id === item.id }),
          onClick: $event => (emit('change', item))
        }, [
          createVNode(ShowcaseWidgetPreview, { item: item }, null, 8, ["item"])
        ], 10, _hoisted_3$2))
      }), 256))
    ]),
    (data.loading || (data.items.length < data.total))
      ? (openBlock(), createBlock(Button, {
          key: 0,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)('pages.showcase.widget.load'),
          onClick: getItems
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 1,
          class: "empty",
          title: unref(t)(`pages.showcase.widget.empty.title`),
          description: unref(t)(`pages.showcase.widget.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const ShowcaseWidgets = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-f724606c"]]);

const _hoisted_1$1 = {
  key: 0,
  class: "showcase-widget-info"
};
const _hoisted_2$1 = { class: "title" };
const _hoisted_3$1 = { class: "form-line" };
const _hoisted_4$1 = { class: "form-line" };
const _hoisted_5$1 = { class: "box" };
const _hoisted_6$1 = { class: "attention" };
const _hoisted_7$1 = { class: "form-line" };
const _hoisted_8 = { class: "form-line" };
const _hoisted_9 = { class: "box" };
const _hoisted_10 = { class: "attention" };
const _hoisted_11 = { class: "form-line" };
const _hoisted_12 = { class: "box" };
const _hoisted_13 = { class: "attention" };
const _hoisted_14 = { class: "form-line" };
const _hoisted_15 = { class: "form-line" };
const _hoisted_16 = { class: "form-line" };
const _hoisted_17 = { class: "form-line" };
const _hoisted_18 = { class: "attention" };
const _hoisted_19 = { class: "img-box" };
const _hoisted_20 = { class: "form-line" };
const _hoisted_21 = { class: "attention" };
const _hoisted_22 = { class: "img-box" };
const _hoisted_23 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$1 = {
  __name: 'ShowcaseWidgetInfo',
  props: {
        item: { type: [Object, null], default: null }
    },
  emits: ['update', 'add', 'remove', 'edit'],
  setup(__props, { emit: __emit }) {

    const modals = stores.modals();
    const user = stores.user();

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        id: null,
        name: null,
        description: null,

        cover: {},
        newCover: null,
        headerCover: {},
        newHeaderCover: null,

        code: null,
        // page: SHOWCASE_PAGES[0].code,
        type: SHOWCASE_WIDGET_TYPE[0].code,
        template: null,
        position: null,
        startDate: null,
        endDate: null,
        showed: false,
        loading: true
    });

    const saveDisabled = computed(() => {
        return !data.name || !data.name['en-US']?.trim().length || isDateError.value;
    });

    const isDateError = computed(() => {
        return data.startDate && data.endDate && hooks(data.startDate).diff(hooks(data.endDate)) >= 0;
    });


    const onNameChange = (value) => {
        data.name = value || {};
        onEdit();
    };

    const onDescriptionChange = (value) => {
        data.description = value || {};
        onEdit();
    };

    // const onPageChange = (payload) => {
    //     data.page = payload?.value;

    //     onEdit();
    // }

    const onTemplateChange = (payload) => {
        data.template = payload?.value;

        onEdit();
    };

    const onTypeChange = (payload) => {
        data.type = payload?.value;

        onEdit();
    };

    const onCodeChange = (e) => {
        data.code = e.target.value?.trim();
        onEdit();
    };

    const onShowedChange = (e) => {
        data.showed = !!e?.value;

        onEdit();
    };

    const onStartDateChange = (value) => {
        if (!value) {
            data.startDate = null;
        } else {
            data.startDate = hooks(value).startOf('day').toISOString();
        }

        onEdit();
    };

    const onEndDateChange = (value) => {
        if (!value) {
            data.endDate = null;
        } else {
            data.endDate = hooks(value).endOf('day').toISOString();
        }

        onEdit();
    };

    const onCoverChange = (e) => {
        if (e?.name) {
            data.newCover = e;
            onEdit();
        }
    };

    const onHeaderCoverChange = (e) => {
        if (e?.name) {
            data.newHeaderCover = e;
            onEdit();
        }
    };

    

    const onEdit = () => {
        emit('edit');
        data.hasChanges = true;
    };

    const saveChanges = async () => {
        const showcaseSectionInfo = {
            name: data.name,
            description: data.description,
            code: data.code,
            position: data.position,
            // page: data.page || null,
            type: data.type || null,
            template: data.template || null,
            startDate: data.startDate || null,
            endDate: data.endDate || null,
            showed: !!data.showed
        };

        data.updating = true;

        let payload;

        if (data.id) {
            payload = await api.showcase().widget.update(data.id, showcaseSectionInfo);
        } else {
            if (!data.position) {
                const result = await api.showcase().widget.preview({ skip: 0, take: 1 });
                if (result?.items) {
                    showcaseSectionInfo.position = (result.total || 0) + 1;
                    data.position = (result.total || 0) + 1;
                }
            }
            payload = await api.showcase().widget.add(showcaseSectionInfo);
        }


        // Cover
        if (payload?.id && data.newCover) {
            payload = await api.showcase().widget.updateCover(payload.id, data.newCover);
        }

        // HeaderCover
        if (payload?.id && data.newHeaderCover) {
            payload = await api.showcase().widget.updateHeaderCover(payload.id, data.newHeaderCover);
        }


        await delay(200);
        data.updating = false;

        if (payload?.id) {
            message.info(t(`pages.showcase.widget.${ data.id ? 'edit' : 'add' }.done.title`));
            // modals.open('success', {
            //     data: {
            //         timer: 3,
            //         title: t(`pages.showcase.widget.${ data.id ? 'edit' : 'add' }.done.title`),
            //         close: t(`pages.showcase.widget.${ data.id ? 'edit' : 'add' }.done.close`)
            //     },
            //     quietClose: true
            // });
        }

        if (data.id) {
            emit('update', payload);
        } else {
            emit('add', payload);
        }

        data.id = payload.id;

        data.cover = payload.cover || {};
        data.headerCover = payload.headerCover || {};

        data.newCover = null;
        data.newHeaderCover = null;

        delete data.hasChanges;
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await api.showcase().widget.get(props.item.id);

        data.id = payload?.id;
        data.name = payload?.name || {};
        data.description = payload?.description || {};
        data.code = payload?.code;
        data.position = payload?.position;
        data.template = payload?.template;
        data.type = payload?.type;
        data.startDate = payload?.startDate;
        data.endDate = payload?.endDate;
        data.showed = !!payload?.showed;

        data.cover = payload?.cover || {};
        data.headerCover = payload?.headerCover || {};

        await delay(200);

        data.loading = false;

        delete data.hasChanges;
    };

    const remove = async () => {
        modals.confirm({
            title: t(`pages.showcase.widget.remove.confirm.title`),
            body: t(`pages.showcase.widget.remove.confirm.description`, { name: data.name ? data.name['en-US'] : '' }),
            onOk: async () => {
                await api.showcase().widget.remove(data.id);

                emit('remove', data.id);
                
                modals.open('success', {
                    data: {
                        title: t(`pages.showcase.widget.remove.done.title`),
                        close: t(`pages.showcase.widget.remove.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    onMounted(() => {
        if (props.item?.id) {
            getItem();
        } else {
            data.loading = false;
        }
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (!data.loading)
      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
          createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(t)(`pages.showcase.widget.${ props.item?.id ? 'edit' : 'add' }.title`)), 1),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.name`)), 1),
            createVNode(MultilingualField, {
              placeholder: unref(t)(`pages.showcase.widget.fields.name`),
              value: data.name,
              disabled: !unref(user).isShowcaseCurator,
              onChange: onNameChange
            }, null, 8, ["placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.code.name`)), 1),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(Field, {
                placeholder: unref(t)(`pages.showcase.widget.fields.code.name`),
                value: data.code,
                disabled: !unref(user).isShowcaseCurator,
                class: "noerror light with-placeholder",
                onChange: onCodeChange
              }, null, 8, ["placeholder", "value", "disabled"]),
              createBaseVNode("span", _hoisted_6$1, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.code.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.description`)), 1),
            createVNode(MultilingualField, {
              placeholder: unref(t)(`pages.showcase.widget.fields.description`),
              value: data.description,
              disabled: !unref(user).isShowcaseCurator,
              type: "textarea",
              onChange: onDescriptionChange
            }, null, 8, ["placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.start-date.name`)), 1),
            createBaseVNode("div", _hoisted_9, [
              createVNode(DateField, {
                "text-input": true,
                enableTimePicker: false,
                timePicker: false,
                placeholder: unref(t)(`pages.showcase.widget.fields.start-date.placeholder`),
                isError: isDateError.value,
                format: "dd.MM.yyyy",
                class: "light noerror with-placeholder",
                disabled: !unref(user).isShowcaseCurator,
                modelValue: data.startDate,
                "onUpdate:modelValue": onStartDateChange
              }, null, 8, ["placeholder", "isError", "disabled", "modelValue"]),
              createBaseVNode("span", _hoisted_10, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.start-date.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.end-date.name`)), 1),
            createBaseVNode("div", _hoisted_12, [
              createVNode(DateField, {
                "text-input": true,
                enableTimePicker: false,
                timePicker: false,
                placeholder: unref(t)(`pages.showcase.widget.fields.end-date.placeholder`),
                isError: isDateError.value,
                format: "dd.MM.yyyy",
                class: "light noerror with-placeholder",
                disabled: !unref(user).isShowcaseCurator,
                modelValue: data.endDate,
                "onUpdate:modelValue": onEndDateChange
              }, null, 8, ["placeholder", "isError", "disabled", "modelValue"]),
              createBaseVNode("span", _hoisted_13, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.end-date.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.template`)), 1),
            createVNode(_sfc_main$c, {
              class: "noerror light",
              optionList: unref(SHOWCASE_WIDGET_TEMPLATES),
              placeholder: unref(t)(`pages.showcase.widget.fields.template`),
              leftAuto: false,
              maxValuesCount: 1,
              rightAuto: false,
              useI18n: false,
              clearable: false,
              value: data.template,
              disabled: !unref(user).isShowcaseCurator,
              onChange: onTemplateChange
            }, null, 8, ["optionList", "placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createVNode(Toggler, {
              name: unref(t)(`pages.showcase.widget.fields.showed`),
              inline: true,
              checked: data.showed,
              disabled: !unref(user).isShowcaseCurator,
              class: "reverse solid",
              onOnClick: onShowedChange
            }, null, 8, ["name", "checked", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.type`)), 1),
            createVNode(_sfc_main$c, {
              class: "noerror light",
              optionList: unref(SHOWCASE_WIDGET_TYPE),
              placeholder: unref(t)(`pages.showcase.widget.fields.type`),
              leftAuto: false,
              maxValuesCount: 1,
              rightAuto: false,
              useI18n: true,
              clearable: false,
              value: data.type,
              disabled: !unref(user).isShowcaseCurator,
              onChange: onTypeChange
            }, null, 8, ["optionList", "placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("label", null, [
              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.cover.name`)), 1),
              createBaseVNode("span", _hoisted_18, toDisplayString(unref(t)(`pages.showcase.widget.fields.cover.description`)), 1)
            ]),
            createBaseVNode("div", _hoisted_19, [
              createVNode(FileUploader, {
                class: "upload",
                icon: "upload-img",
                acceptedFormats: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/jfif'],
                loading: data.loading,
                dropZone: true,
                showPreview: true,
                preview: data.cover?.resized,
                zoneSize: { width: '120px', height: '120px' },
                zoneType: "square-image",
                onChange: onCoverChange
              }, null, 8, ["loading", "preview"])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("label", null, [
              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.showcase.widget.fields.header-cover.name`)), 1),
              createBaseVNode("span", _hoisted_21, toDisplayString(unref(t)(`pages.showcase.widget.fields.header-cover.description`)), 1)
            ]),
            createBaseVNode("div", _hoisted_22, [
              createVNode(FileUploader, {
                class: "upload",
                icon: "upload-img",
                acceptedFormats: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/jfif'],
                loading: data.loading,
                dropZone: true,
                showPreview: true,
                preview: data.headerCover?.resized,
                zoneSize: { width: '226px', height: '114px' },
                zoneType: "square-image",
                onChange: onHeaderCoverChange
              }, null, 8, ["loading", "preview"])
            ])
          ]),
          (openBlock(), createBlock(Teleport, { to: "#head-buttons" }, [
            (data.id)
              ? (openBlock(), createBlock(Button, {
                  key: 0,
                  icon: "trash",
                  name: unref(t)(`pages.showcase.widget.remove.title`),
                  class: "size-s tertiary invert",
                  onClick: remove
                }, null, 8, ["name"]))
              : createCommentVNode("", true),
            createVNode(Button, {
              name: unref(t)(`pages.showcase.widget.${ props.item?.id ? 'edit' : 'add' }.save`),
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
      ? (openBlock(), createElementBlock("div", _hoisted_23, [
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
const ShowcaseWidgetInfo = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-cd0c6fa1"]]);

const _hoisted_1 = { class: "header" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = {
  key: 0,
  class: "box"
};
const _hoisted_4 = {
  key: 1,
  class: "box"
};
const _hoisted_5 = {
  key: 0,
  class: "item-detail"
};
const _hoisted_6 = {
  key: 2,
  class: "box"
};
const _hoisted_7 = {
  key: 0,
  class: "item-detail"
};
    
const _sfc_main = {
  __name: 'Showcase',
  setup(__props) {

    const user = stores.user();
    const modals = stores.modals();


    const { t } = useI18n();

    const showcaseSections = ref(null);
    const showcaseWidgets = ref(null);
    const showcaseLineup = ref(null);

    const data = reactive({
        item: null,
        section: 'lineup',
        sections: [
            {
                code: 'lineup',
                name: 'pages.showcase.lineup.title'
            },{
                code: 'sections',
                name: 'pages.showcase.section.title'
            },
            {
                code: 'widgets',
                name: 'pages.showcase.widget.title'
            }
        ]
    });

    const setSection = (section) => {
        checkUnsaved(() => {
            close();

            data.section = section;
        });
    };


    const onSelectItem = (item) => {
        checkUnsaved(() => {
            close();

            setTimeout(() => {
                data.item = item?.id ? item : null;
            });
        });
    };

    const close = () => {
        checkUnsaved(() => {
            data.item = null;
        });
    };

    const add = () => {
        checkUnsaved(() => {
            close();

            setTimeout(() => {
                data.item = {};
            });
        });
    };

    const checkUnsaved = async (callback) => {
        if (data.hasChanges) {
            let code = 'section';

            if (data.section === 'widgets') {
                code = 'widget';
            }

            modals.confirm({
                title: t(`pages.showcase.${ code }.unsaved.confirm.title`),
                body: t(`pages.showcase.${ code }.unsaved.confirm.description`),
                onOk: async() => {
                    delete data.hasChanges;

                    callback();
                }
            }); 
            return;
        }

        callback();
    };

    const onUpdate = (payload) => {
        if (data.section === 'sections') {
            showcaseSections.value.update(payload);
        }

        if (data.section === 'widgets') {
            showcaseWidgets.value.update(payload);
        }

        data.item = payload;

        delete data.hasChanges;
    };

    const onEdit = () => {
        data.hasChanges = true;
    };

    const onAdd = (payload) => {
        if (data.section === 'sections') {
            showcaseSections.value.add(payload);
        }

        if (data.section === 'widgets') {
            showcaseWidgets.value.add(payload);
        }
        data.item = payload;

        delete data.hasChanges;
    };

    const onRemove = (id) => {
        if (!id) {
            return;
        }

        if (data.section === 'sections') {
            showcaseSections.value.remove(id);
        }

        if (data.section === 'widgets') {
            showcaseWidgets.value.remove(id);
        }

        delete data.hasChanges;
        close();        
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(PageHeader, {
      title: unref(t)('pages.showcase.section.title'),
      detail: !!data.item
    }, {
      title: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("label", _hoisted_2, toDisplayString(unref(t)('pages.showcase.title')), 1),
          createVNode(Menu, {
            items: data.sections,
            code: data.section,
            onChange: setSection
          }, null, 8, ["items", "code"])
        ])
      ]),
      default: withCtx(() => [
        (data.section === 'sections')
          ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              (!data.item && unref(user).isShowcaseCurator)
                ? (openBlock(), createBlock(Button, {
                    key: 0,
                    icon: "plus",
                    class: "size-s",
                    name: unref(t)('pages.showcase.section.add.title'),
                    onClick: add
                  }, null, 8, ["name"]))
                : createCommentVNode("", true)
            ], 64))
          : createCommentVNode("", true),
        (data.section === 'widgets')
          ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              (!data.item && unref(user).isShowcaseCurator)
                ? (openBlock(), createBlock(Button, {
                    key: 0,
                    icon: "plus",
                    class: "size-s",
                    name: unref(t)('pages.showcase.widget.add.title'),
                    onClick: add
                  }, null, 8, ["name"]))
                : createCommentVNode("", true)
            ], 64))
          : createCommentVNode("", true),
        (data.item)
          ? (openBlock(), createBlock(IconButton, {
              key: 2,
              icon: "close",
              class: "size-s tertiary invert",
              title: unref(t)('pages.showcase.cancel'),
              onClick: close
            }, null, 8, ["title"]))
          : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["title", "detail"]),
    (data.section === 'lineup')
      ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(ShowcaseLineup, {
            id: data.item?.id,
            ref_key: "showcaseLineup",
            ref: showcaseLineup,
            onOpenWidget: onSelectItem
          }, null, 8, ["id"]),
          (data.item)
            ? (openBlock(), createBlock(ShowcaseLineupWidgetContent, {
                key: 0,
                item: data.item,
                onAdd: onAdd,
                onUpdate: onUpdate,
                onEdit: onEdit
              }, null, 8, ["item"]))
            : createCommentVNode("", true)
        ]))
      : createCommentVNode("", true),
    (data.section === 'sections')
      ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(ShowcaseSections, {
            id: data.item?.id,
            ref_key: "showcaseSections",
            ref: showcaseSections,
            onChange: onSelectItem
          }, null, 8, ["id"]),
          (data.item)
            ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createVNode(ShowcaseSectionInfo, {
                  item: data.item,
                  onAdd: onAdd,
                  onUpdate: onUpdate,
                  onEdit: onEdit,
                  onRemove: onRemove
                }, null, 8, ["item"])
              ]))
            : createCommentVNode("", true)
        ]))
      : createCommentVNode("", true),
    (data.section === 'widgets')
      ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(ShowcaseWidgets, {
            id: data.item?.id,
            ref_key: "showcaseWidgets",
            ref: showcaseWidgets,
            onChange: onSelectItem
          }, null, 8, ["id"]),
          (data.item)
            ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(ShowcaseWidgetInfo, {
                  item: data.item,
                  onAdd: onAdd,
                  onUpdate: onUpdate,
                  onEdit: onEdit,
                  onRemove: onRemove
                }, null, 8, ["item"])
              ]))
            : createCommentVNode("", true)
        ]))
      : createCommentVNode("", true)
  ], 64))
}
}

};
const Showcase = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-47a6cd88"]]);

export { Showcase as default };
//# sourceMappingURL=Showcase-CHo6i1rP.js.map
