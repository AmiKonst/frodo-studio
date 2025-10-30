import { s as stores, a as useI18n, r as reactive, b as createElementBlock, o as openBlock, g as createVNode, O as withCtx, h as createBaseVNode, J as Toggler, F as Fragment, i as api, j as onMounted, c as createBlock, e as createCommentVNode, u as unref, U as markRaw, _ as _export_sfc, f as ref, A as computed, m as watch, y as resolveComponent, w as withDirectives, v as vShow, n as normalizeClass, t as toDisplayString, V as _sfc_main$9, D as Button, K as Teleport, M as Loader, N as delay, G as message, d as renderList, Z as PlaylistPreview, E as EmptyLabel, $ as Playlists$2 } from './index-CawDb0Zm.js';
import { P as PageHeader } from './PageHeader-C7p-QQ0_.js';
import { _ as _sfc_main$7, d as _sfc_main$8, I as ItemsSections, e as _sfc_main$a, c as ItemsEditor, T as TrackEditor } from './TrackEditor-6VC6i--t.js';
import { F as FileUploader } from './FileUploader-Ot0w7uDj.js';
import { M as MultilingualField } from './MultilingualField-DHFUnO-0.js';
import './ViewMode-B8AuJdBS.js';

const _hoisted_1$4 = { class: "image-preview" };


    
const _sfc_main$6 = {
  __name: 'SectionPlaylistInfo',
  props: {
        permissions: { type: Object, default: () => ({}) },
        item: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['change', 'error', 'metadata', 'save'],
  setup(__props, { emit: __emit }) {

    stores.user();
    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const fields = {
        title: {
            name: t(`pages.playlists.fields.title.name`),
            attention: t(`pages.playlists.fields.title.attention`),
            attentions: [
                t(`pages.playlists.fields.title.subattention1`),
                t(`pages.playlists.fields.title.subattention2`)
            ],
            width: 200
        },
        cover: {
            name: t(`pages.playlists.fields.cover.name`),
            attention: t(`pages.playlists.fields.cover.attention`),
            attentions: [
                t(`pages.playlists.fields.cover.subattention1`),
                t(`pages.playlists.fields.cover.subattention2`),
                t(`pages.playlists.fields.cover.subattention3`)
            ],
            width: 116
        },
        type: {
            name: t(`pages.playlists.fields.is-editoral.name`),
            attentions: [
                t(`pages.playlists.fields.is-editoral.attention`)
            ],
            width: 120
        },
        description: {
            name: t(`pages.playlists.fields.description.name`),
            width: 200
        }
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const data = reactive({
        title: props.item?.title || {},
        cover: props.item?.cover || {},
        description: props.item?.description || {},
        type: props.item?.type || 'USER',

        loading: false,
        errors: {}
    });


    const onTitleChange = (value) => {
        data.title = value || {};

        emit('change', { title: data.title });

        data.errors.title = [];

        if (!data.title || !data.title['en-US']) {
            data.errors.title.push(t(`pages.playlists.fields.title.error`));
        }

        emit('error', data.errors);
    };

    const onCoverChange = (e) => {
        emit('change', { cover: e?.name ? e : null });
    };

    const onDescriptionChange = (value) => {
        data.description = value || {};

        emit('change', { description: data.description });
    };

    const onTypeChange = (e) => {
        data.type = e?.value ? 'EDITORIAL' : 'USER';

        emit('change', { type: data.type });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$7, {
      field: fields.title,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(MultilingualField, {
          disabled: !props.permissions.canEdit,
          value: data.title,
          onChange: onTitleChange
        }, null, 8, ["disabled", "value"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$7, {
      field: fields.cover,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$4, [
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
    createVNode(_sfc_main$7, {
      field: fields.type,
      column: true,
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(Toggler, {
          name: fields.type.name,
          inline: true,
          checked: data.type === 'EDITORIAL',
          disabled: !props.permissions.canAddEditorial,
          class: "reverse solid",
          onOnClick: onTypeChange
        }, null, 8, ["name", "checked", "disabled"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$7, {
      field: fields.description,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(MultilingualField, {
          value: data.description,
          disabled: !props.permissions.canEdit,
          type: "textarea",
          onChange: onDescriptionChange
        }, null, 8, ["value", "disabled"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"])
  ], 64))
}
}

};

const _sfc_main$5 = {
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
            title: t(`pages.playlists.sections.dicts.subattention1`),
            description: t(`pages.playlists.sections.dicts.subattention1_`)
        }, {
            title: t(`pages.playlists.sections.dicts.subattention2`),
            description: t(`pages.playlists.sections.dicts.subattention2_`)
        }, {
            title: t(`pages.playlists.sections.dicts.subattention1`),
            description: t(`pages.playlists.sections.dicts.subattention2_`)
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
      ? (openBlock(), createBlock(_sfc_main$7, {
          key: 0,
          help: help,
          column: true,
          viewMode: props.viewMode
        }, null, 8, ["viewMode"]))
      : createCommentVNode("", true),
    (!data.loading)
      ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_sfc_main$7, {
            field: fields.instruments,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$8, {
                placeholder: unref(t)(`dicts.instruments`),
                disabled: !props.permissions.canEdit,
                values: data.instruments,
                dict: "instruments",
                class: "noerror light with-placeholder",
                onChange: onInstrumentsChange
              }, null, 8, ["placeholder", "disabled", "values"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$7, {
            field: fields.genres,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$8, {
                placeholder: unref(t)(`dicts.genres`),
                values: data.genres,
                maxValuesCount: 3,
                disabled: !props.permissions.canEdit,
                dict: "genres",
                class: "noerror light with-placeholder",
                onChange: onGenresChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$7, {
            field: fields.categories,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$8, {
                placeholder: unref(t)(`dicts.categories`),
                values: data.categories,
                maxValuesCount: 3,
                disabled: !props.permissions.canEdit,
                dict: "categories",
                class: "noerror light with-placeholder",
                onChange: onCategoriesChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$7, {
            field: fields.moods,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$8, {
                placeholder: unref(t)(`dicts.moods`),
                values: data.moods,
                maxValuesCount: 3,
                disabled: !props.permissions.canEdit,
                dict: "moods",
                class: "noerror light with-placeholder",
                onChange: onMoodsChange
              }, null, 8, ["placeholder", "values", "disabled"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$7, {
            field: fields.tags,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$8, {
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

const _sfc_main$4 = {
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
                id: 'playlist-info',
                name: '',
                title: 'pages.playlists.sections.playlist-info.name',
                component: markRaw(_sfc_main$6)
            }, {
                id: 'metadata',
                title: 'pages.playlists.sections.dicts.name',
                name: 'pages.playlists.sections.dicts.name',
                component: markRaw(_sfc_main$5)
            }
        ]
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(ItemsSections, {
    item: props.item,
    permissions: props.permissions,
    viewMode: props.viewMode,
    sections: data.sections,
    help: "pages.playlists.sections.help",
    onChange: _cache[0] || (_cache[0] = $event => (emit('change', $event))),
    onError: _cache[1] || (_cache[1] = $event => (emit('error', $event))),
    onSections: _cache[2] || (_cache[2] = $event => (emit('sections', $event))),
    onSave: _cache[3] || (_cache[3] = $event => (emit('save', $event)))
  }, null, 8, ["item", "permissions", "viewMode", "sections"]))
}
}

};

const _hoisted_1$3 = {
  key: 0,
  class: "title"
};
const _hoisted_2$2 = {
  key: 0,
  class: "devider"
};
const _hoisted_3$1 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$3 = {
  __name: 'PlaylistInfo',
  props: {
        toolbarId: { type: String, default: '' },
        playlist: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['update', 'add', 'remove', 'edit', 'sections', 'close', 'hide', 'actions'],
  setup(__props, { emit: __emit }) {

    const modals = stores.modals();

    const playlists = api.playlists();
    const locale = stores.locale();

    const emit = __emit;
    const { t } = useI18n();

    const playlistInfoBox = ref(null);

    const props = __props;

    // Permissions
        const canEdit = computed(() => {
            if (data.item?.id) {
                return playlists.canEdit({
                    playlist: data.item
                });
            }

            return playlists.canAdd({
            });
        });

        const canAddEditorial = computed(() => {
            return playlists.canAddEditorial({
                playlist: data.item
            });
        });

        const canRemove = computed(() => {
            return playlists.canRemove({
                playlist: data.item
            });
        });

        const canEditState = computed(() => {
            return playlists.canEditState({
                playlist: data.item
            });
        });

    const data = reactive({
        id: null,
        item: {
            type: 'USER'
        },
        updatedItem: {},
        errors: {},
        states: [],
        loading: true,
        uploading: false
    });

    const getStates = async () => {
        data.states = data.id ? await playlists.getAvailableStates(data.id) || [] : [];
    };

    const changeState = async (state) => {
        modals.confirm({
            title: t(`pages.playlists.state.confirm.title`),
            body: t(`pages.playlists.state.confirm.description`, {
                name: t(`state.default.code.${ state.toLowerCase() }`)
            }),
            onOk: async () => {
                const payload = await playlists.changeState(data.id, state);

                data.item.state = payload?.state;
                getStates();

                emit('update', data.item);

                modals.open('success', {
                    data: {
                        title: t(`pages.playlists.state.done.title`),
                        close: t(`pages.playlists.state.done.close`)
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
        return (
            (!data.updatedItem?.title || !data.updatedItem?.title['en-US']?.trim().length) && 
            (!data.item?.title || !data.item?.title['en-US']?.trim().length)
        ) || !!Object.keys(data.errors)?.length || data.uploading || !hasChanges.value;
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
            title: t(`pages.playlists.remove.confirm.title`),
            body: t(`pages.playlists.remove.confirm.description`, { title: (data.item?.title || {})['en-US'] }),
            onOk: async () => {
                await playlists.remove(data.id);

                modals.open('success', {
                    data: {
                        title: t(`pages.playlists.remove.done.title`),
                        close: t(`pages.playlists.remove.done.close`)
                    },
                    quietClose: true
                });

                emit('remove', data.item.id);
            }
        }); 
    };

    const saveChanges = async (mode) => {
        let scrollTop = playlistInfoBox.value?.closest('.item-detail')?.scrollTop;

        data.updating = true;

        const playlistInfo = { ...data.updatedItem };

        // Удаляем временный айдишник
        delete playlistInfo.localId;

        // Убираем поля, которые рассчитываются автоматически

        // Вытаскиваем картинку
        const cover = playlistInfo.cover;
        if (cover) {
            delete playlistInfo.cover;
        }

        // Сейвим основные данные
        let payload;

        if (data.id) {
            payload = await playlists.update(data.id, playlistInfo);
        } else {
            payload = await playlists.add(playlistInfo);
        }

        // Обновляем картинку
        if (payload?.id && cover) {
            payload = await playlists.updateCover(payload.id, cover);
        }

        await delay(200);
        data.updating = false;

        if (payload?.id) {
            message.info(t(`pages.playlists.${ data.id ? 'edit' : 'add' }.done.title`));
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
                if (playlistInfoBox?.value) {
                    playlistInfoBox.value.closest('.item-detail').scrollTop = scrollTop;
                }
            });
        }
    };

    const saveChangesAndAddMore = async () => {
        await saveChanges('add-one');
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await playlists.get(props.playlist.id);

        data.id = payload?.id;
        data.item = payload || {};

        await getStates();

        await delay(200);

        data.loading = false;
    };

    const createItem = () => {
        data.item = {
            type: 'USER'
        };

        if (props.playlist?.localId) {
            data.item = { ...data.item, ...props.playlist };
            // data.item.localId = props.playlist.localId;
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

    onMounted(() => {
        if (props.playlist?.id) {
            getItem();
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
          class: normalizeClass(["playlist-info", {
            'view-mode-table': props.viewMode === 'table',
            'updating': data.updating
        }]),
          ref_key: "playlistInfoBox",
          ref: playlistInfoBox
        }, [
          (props.viewMode === 'list')
            ? (openBlock(), createElementBlock("label", _hoisted_1$3, toDisplayString(unref(t)(`pages.playlists.${ props.playlist?.id ? (!canEdit.value ? 'view' : 'edit') : 'add' }.title`)), 1))
            : createCommentVNode("", true),
          createVNode(_sfc_main$4, {
            item: data.item,
            viewMode: props.viewMode,
            permissions: {
                canEdit: canEdit.value,
                canAddEditorial: canAddEditorial.value
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
                ? (openBlock(), createElementBlock("span", _hoisted_2$2))
                : createCommentVNode("", true),
              (data.id && props.viewMode === 'list')
                ? (openBlock(), createBlock(_sfc_main$9, {
                    key: 1,
                    leftAuto: !unref(locale).rtl,
                    rightAuto: unref(locale).rtl,
                    tertiary: true,
                    invert: true,
                    size: "size-s"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("ul", null, [
                        (canRemove.value)
                          ? (openBlock(), createElementBlock("li", {
                              key: 0,
                              onClick: remove
                            }, [
                              createVNode(_component_Icon, { icon: "trash" }),
                              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.playlists.remove.title`)), 1)
                            ]))
                          : createCommentVNode("", true),
                        createBaseVNode("li", { onClick: close }, [
                          createVNode(_component_Icon, { icon: "close" }),
                          createBaseVNode("span", null, toDisplayString(unref(t)(`pages.playlists.cancel`)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["leftAuto", "rightAuto"]))
                : createCommentVNode("", true),
              (canRemove.value && props.viewMode === 'table' && data.id)
                ? (openBlock(), createBlock(Button, {
                    key: 2,
                    title: unref(t)(`pages.playlists.remove.title`),
                    class: "size-m tertiary invert",
                    icon: "trash",
                    onClick: remove
                  }, null, 8, ["title"]))
                : createCommentVNode("", true),
              (data.id)
                ? (openBlock(), createBlock(_sfc_main$a, {
                    key: 3,
                    state: data.item?.state,
                    states: data.states,
                    disabled: canEditState.value,
                    onChange: changeState
                  }, null, 8, ["state", "states", "disabled"]))
                : createCommentVNode("", true),
              (canEdit.value && props.viewMode === 'list')
                ? (openBlock(), createBlock(Button, {
                    key: 4,
                    name: unref(t)(`pages.playlists.${ props.playlist?.id ? 'edit' : 'add' }.save-and-add-more`),
                    class: "size-s secondary",
                    disabled: saveDisabled.value,
                    onClick: saveChangesAndAddMore
                  }, null, 8, ["name", "disabled"]))
                : createCommentVNode("", true),
              (canEdit.value)
                ? (openBlock(), createBlock(Button, {
                    key: 5,
                    name: unref(t)(`pages.playlists.${ props.playlist?.id ? 'edit' : 'add' }.save`),
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
      ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
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
const PlaylistInfo = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-ed1e2ce5"]]);

const _hoisted_1$2 = { class: "items-list" };
const _hoisted_2$1 = {
  key: 0,
  class: "items"
};
const _hoisted_3 = ["onClick"];

    
const _sfc_main$2 = {
  __name: 'Playlists',
  props: {
        items: { type: Array, default: () => ([]) },
        id: { type: [String, null], default: null }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    (props.items.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item, id) => {
            return (openBlock(), createElementBlock("li", {
              class: normalizeClass({ active: props.id === item.id || props.id === item.localId }),
              key: id,
              onClick: $event => (emit('change', item))
            }, [
              createVNode(PlaylistPreview, {
                item: item,
                showState: true,
                row: true
              }, null, 8, ["item"])
            ], 10, _hoisted_3))
          }), 128))
        ]))
      : createCommentVNode("", true),
    (!props.items.length)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 1,
          class: "empty",
          title: unref(t)(`pages.playlists.empty.title`),
          description: unref(t)(`pages.playlists.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const Playlists$1 = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-b85eed11"]]);

const _hoisted_1$1 = { class: "title" };

    
const _sfc_main$1 = {
  __name: 'PlaylistEditor',
  props: {
        items: { type: [Array, null], default: null }
    },
  emits: ['update', 'add', 'remove', 'close'],
  setup(__props, { expose: __expose, emit: __emit }) {

    const { t } = useI18n();
    const emit = __emit;
    const modals = stores.modals();

    const editor = ref(null);


    const props = __props;

    const data = reactive({
        t: {
            title: 'pages.playlists.title',
            back: 'pages.playlists.back',
            'add-one': 'pages.playlists.add-one',
            'select-several': 'pages.playlists.select-several',
            empty: {
                title: 'pages.playlists.empty.title',
                description: 'pages.playlists.empty.description'
            },
            revert: {
                confirm: {
                    title: 'pages.playlists.revert.confirm.title',
                    description: 'pages.playlists.revert.confirm.description'
                }
            },
            unsaved: {
                confirm: {
                    title: 'pages.playlists.unsaved.confirm.title',
                    description: 'pages.playlists.unsaved.confirm.description'
                }
            }
        },
        code: 'playlist-editor',
    });

    const canAdd = computed(() => {
        return api.playlists().canAdd();
    });

    const create = (count) => {
        editor.value.create(count);
    };

    const selectItems = (items) => {
        modals.open('select-playlists', {
            data: {
                items
            },
            callback: (items) => {
                items?.forEach(item => {
                    editor.value.add(item);
                });
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
  return (openBlock(), createBlock(ItemsEditor, {
    t: data.t,
    code: data.code,
    canAdd: canAdd.value,
    getItem: unref(api).playlists().get,
    selectItems: selectItems,
    items: props.items,
    onUpdate: _cache[0] || (_cache[0] = $event => (emit('update', $event))),
    onAdd: _cache[1] || (_cache[1] = $event => (emit('add', $event))),
    onRemove: _cache[2] || (_cache[2] = $event => (emit('remove', $event))),
    onClose: _cache[3] || (_cache[3] = $event => (emit('close', $event))),
    ref_key: "editor",
    ref: editor
  }, {
    "page-header-title": withCtx(() => [
      createBaseVNode("label", _hoisted_1$1, toDisplayString(unref(t)(`pages.playlists.title`)), 1)
    ]),
    items: withCtx(({ id, items, change }) => [
      createVNode(Playlists$1, {
        id: id,
        items: items,
        onChange: change
      }, null, 8, ["id", "items", "onChange"])
    ]),
    preview: withCtx(({ item }) => [
      createVNode(PlaylistPreview, {
        item: item,
        row: true,
        showState: true
      }, null, 8, ["item"])
    ]),
    item: withCtx(({ toolbarId, item, viewMode, edit, add, update, remove, close, sections, hide, actions }) => [
      createVNode(PlaylistInfo, {
        toolbarId: toolbarId,
        playlist: item,
        viewMode: viewMode,
        onEdit: edit,
        onAdd: add,
        onUpdate: update,
        onRemove: remove,
        onClose: close,
        onHide: hide,
        onSections: sections,
        onActions: actions
      }, null, 8, ["toolbarId", "playlist", "viewMode", "onEdit", "onAdd", "onUpdate", "onRemove", "onClose", "onHide", "onSections", "onActions"])
    ]),
    _: 1
  }, 8, ["t", "code", "canAdd", "getItem", "items"]))
}
}

};
const PlaylistEditor = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-dca8abbe"]]);

const _hoisted_1 = { class: "box" };
const _hoisted_2 = { class: "item-detail" };

    
const _sfc_main = {
  __name: 'Playlists',
  setup(__props) {

    const { t } = useI18n();
    const playlists = ref(null);
    const playlistEditor = ref(null);
    const trackEditor = ref(null);

    const data = reactive({
        playlistEditorMode: false,
        editorPlaylists: null,
        trackEditorMode: false,
        editorTracks: null,
        selectedPlaylists: null
    });

    // Playlists
    const onSelectPlaylists = (playlists) => {
        data.selectedPlaylists = playlists?.length ? playlists : null;
    };

    const addPlaylists = (count) => {
        data.playlistEditorMode = true;

        // 
        setTimeout(() => {
            playlistEditor.value?.create(count || 1);
        });
    };

    const editPlaylists = (playlists) => {
        data.editorPlaylists = playlists;
        data.playlistEditorMode = true;
    };

    const editPlaylistTracks = async (playlist) => {
        const payload = await api.playlists().tracks.list(playlist.id);

        data.editorTracks = payload?.items || [];

        data.editorPlaylists = [...(data.selectedPlaylists || [])];
        data.trackEditorMode = true;
    };

    const closePlaylistEditorMode = () => {
        data.playlistEditorMode = false;
    };
        // Events
        const onAddPlaylist = (playlist) => {
            if (playlist?.id) {
                playlists.value.addItem(playlist);
            }
        };

        const onRemovePlaylist = (id) => {
            if (id) {
                playlists.value.removeItems([{ id }], true);
            }
        };

        const onUpdatePlaylist = (playlist) => {
            if (playlist?.id) {
                playlists.value.updateItem(playlist);
            }
        };

    // Tracks
        const closeTrackEditorMode = () => {
            data.trackEditorMode = false;
        };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    withDirectives(createVNode(PageHeader, {
      title: unref(t)(`pages.playlists.title`),
      detail: !!data.selectedPlaylists?.length,
      id: "item-head-buttons"
    }, null, 8, ["title", "detail"]), [
      [vShow, !data.playlistEditorMode && !data.trackEditorMode]
    ]),
    withDirectives(createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(Playlists$2, {
          onSelect: onSelectPlaylists,
          onAdd: addPlaylists,
          onEdit: editPlaylists,
          onEditTracks: editPlaylistTracks,
          ref_key: "playlists",
          ref: playlists
        }, null, 512)
      ])
    ], 512), [
      [vShow, !data.playlistEditorMode && !data.trackEditorMode]
    ]),
    (data.playlistEditorMode)
      ? (openBlock(), createBlock(PlaylistEditor, {
          key: 0,
          items: data.editorPlaylists,
          ref_key: "playlistEditor",
          ref: playlistEditor,
          onRemove: onRemovePlaylist,
          onUpdate: onUpdatePlaylist,
          onAdd: onAddPlaylist,
          onClose: closePlaylistEditorMode
        }, null, 8, ["items"]))
      : createCommentVNode("", true),
    (data.trackEditorMode)
      ? (openBlock(), createBlock(TrackEditor, {
          key: 1,
          playlist: data.editorPlaylists?.length ? data.editorPlaylists[0] : null,
          items: data.editorTracks,
          ref_key: "trackEditor",
          ref: trackEditor,
          onRemove: _cache[0] || (_cache[0] = () => {}),
          onUpdate: _cache[1] || (_cache[1] = () => {}),
          onAdd: _cache[2] || (_cache[2] = () => {}),
          onClose: closeTrackEditorMode
        }, null, 8, ["playlist", "items"]))
      : createCommentVNode("", true)
  ], 64))
}
}

};
const Playlists = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-bb026602"]]);

export { Playlists as default };
//# sourceMappingURL=Playlists-DDnAxoE2.js.map
