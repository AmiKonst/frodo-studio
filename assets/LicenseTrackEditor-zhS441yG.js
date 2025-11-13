import { _ as _export_sfc, a as useI18n, r as reactive, j as onMounted, i as api, b as createElementBlock, e as createCommentVNode, o as openBlock, g as createVNode, F as Fragment, d as renderList, c as createBlock, O as withCtx, h as createBaseVNode, k as Field, u as unref, I as IconButton, x as _sfc_main$4, U as markRaw, s as stores, f as ref, A as computed, m as watch, y as resolveComponent, w as withDirectives, v as vShow, n as normalizeClass, t as toDisplayString, V as _sfc_main$6, D as Button, K as Teleport, M as Loader, N as delay, G as message, W as TrackPreview } from './index-DQ9tJtyi.js';
import { _ as _sfc_main$5, I as ItemsSections, a as Tracks, P as PageHeaderArtistTitle, b as PageHeaderReleaseTitle, c as ItemsEditor } from './TrackEditor-ii5CP3Qv.js';

const _hoisted_1$2 = { class: "box-row" };
    // import { data.providers } from '🔗/constants';

    
const _sfc_main$3 = {
  __name: 'SectionProviders',
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
        providers: {
            width: 640
        }
    };

    emit('metadata', {
        fields,
        direction: 'column'
    });

    const data = reactive({
        providers: [],
        licenses: (props.item?.licenses || []).map(item => ({
            id: item.id,
            provider: item.provider?.id,
            url: item.url
        })),

        errors: {},
        ready: false
    });

    const validateLicenses = (items) => {
        const errors = [];

        const providers = {};
        data.providers.forEach(item => providers[item.id] = item);

        if (!items?.length) {
            return errors;
        }

        if (items.some(item => !item.provider || !providers[item.provider])) {
            errors.push(t('pages.licenses.tracks.fields.providers.error'));
        }

        items.forEach(item => {
            if (providers[item.provider]?.regExp) {
                let regexStr = providers[item.provider].regExp;
                // убираем обёрточные слэши в начале/конце
                const match = regexStr.match(/^\/(.+)\/([gimsuy]*)$/);
                const re = match ? new RegExp(match[1], match[2]) : new RegExp(regexStr);

                // проверка
                if (!item.url || !re.test(item.url)) {
                    errors.push(t('pages.licenses.tracks.fields.reg-exp.error', {
                        url: item.url,
                        format: providers[item.provider].placeholder
                    }));
                }
            }
        });

        return errors;
    };

    const onProviderChange = (payload, item) => {
        item.provider = payload?.value;

        update();
    };

    const onUrlChange = (e, item) => {
        item.url = e.target.value?.trim();

        update();
    };

    const remove = (item) => {
        if (data.licenses.indexOf(item) !== -1) {
            data.licenses.splice(data.licenses.indexOf(item), 1);

            update();
        }
    };

    const update = () => {
        emit('change', { licenses: data.licenses });

        data.errors.licenses = validateLicenses(data.licenses);

        emit('error', data.errors);
    };

    onMounted(async() => {
        data.providers = ((await api.licenses().providers.list())?.items || []).map(item => ({
            ...item,
            code: item.id
        }));
        data.ready = true;
    });

return (_ctx, _cache) => {
  return (data.ready)
    ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.licenses, (item, id) => {
          return (openBlock(), createBlock(_sfc_main$5, {
            key: id,
            viewMode: props.viewMode,
            field: {
                width: fields.providers.width
            }
          }, {
            title: withCtx(() => [
              createVNode(_sfc_main$4, {
                class: "noerror light title",
                optionList: data.providers,
                placeholder: unref(t)(`pages.licenses.tracks.fields.providers.title`),
                leftAuto: false,
                disabled: !props.permissions.canEditLicense || item.id,
                maxValuesCount: 1,
                rightAuto: false,
                clearable: false,
                value: item.provider,
                onChange: $event => (onProviderChange($event, item))
              }, null, 8, ["optionList", "placeholder", "disabled", "value", "onChange"])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$2, [
                createVNode(Field, {
                  value: item.url,
                  placeholder: item.provider ? data.providers.find(provider => provider.id === item.provider)?.placeholder : unref(t)(`pages.licenses.tracks.fields.url.placeholder`),
                  class: "noerror light with-placeholder",
                  disabled: !props.permissions.canEditLicense,
                  onChange: $event => (onUrlChange($event, item))
                }, null, 8, ["value", "placeholder", "disabled", "onChange"]),
                createVNode(IconButton, {
                  icon: "minus",
                  class: "size-m secondary",
                  title: unref(t)(`pages.licenses.tracks.sections.providers.remove`),
                  disabled: !props.permissions.canEditLicense,
                  onClick: $event => (remove(item))
                }, null, 8, ["title", "disabled", "onClick"])
              ])
            ]),
            _: 2
          }, 1032, ["viewMode", "field"]))
        }), 128)),
        createVNode(_sfc_main$5, {
          viewMode: props.viewMode
        }, {
          title: withCtx(() => [
            createVNode(IconButton, {
              icon: "plus",
              class: "size-m",
              title: unref(t)(`pages.licenses.tracks.sections.providers.add`),
              disabled: !props.permissions.canEditLicense,
              onClick: _cache[0] || (_cache[0] = $event => (data.licenses.push({
                        provider: data.providers[0]?.id || null
                    })))
            }, null, 8, ["title", "disabled"])
          ]),
          _: 1
        }, 8, ["viewMode"])
      ], 64))
    : createCommentVNode("", true)
}
}

};
const SectionProviders = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-65fff5b7"]]);

const _sfc_main$2 = {
  __name: 'Sections',
  props: {
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
                id: 'providers',
                title: 'pages.licenses.tracks.sections.providers.name',
                name: 'pages.licenses.tracks.sections.providers.name',
                component: markRaw(SectionProviders)
            }
        ]
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(ItemsSections, {
    item: props.item,
    viewMode: props.viewMode,
    sections: data.sections,
    help: "pages.licenses.tracks.sections.help",
    onChange: _cache[0] || (_cache[0] = $event => (emit('change', $event))),
    onError: _cache[1] || (_cache[1] = $event => (emit('error', $event))),
    onSections: _cache[2] || (_cache[2] = $event => (emit('sections', $event))),
    onSave: _cache[3] || (_cache[3] = $event => (emit('save', $event)))
  }, null, 8, ["item", "viewMode", "sections"]))
}
}

};

const _hoisted_1$1 = {
  key: 0,
  class: "title"
};
const _hoisted_2 = {
  key: 0,
  class: "devider"
};
const _hoisted_3 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$1 = {
  __name: 'LicenseTrackInfo',
  props: {
        toolbarId: { type: String, default: '' },
        track: { type: [Object, null], default: null },
        artist: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['update', 'add', 'remove', 'edit', 'sections', 'close', 'hide', 'actions'],
  setup(__props, { emit: __emit }) {

    stores.modals();

    const tracks = api.tracks();
    const licenses = api.licenses();
    const locale = stores.locale();

    const emit = __emit;
    const { t } = useI18n();

    const licenseTrackInfoBox = ref(null);

    const props = __props;

    // Permissions
        const canEditLicense = computed(() => {
            return tracks.canEditLicense({
                track: props.track
            });
        });

    const data = reactive({
        item: {},
        updatedItem: {},
        errors: {},
        loading: true,
        uploading: false
    });

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
        return !data.updatedItem.licenses || !!Object.keys(data.errors)?.length || data.uploading || !hasChanges.value;
    });

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
                            type: 'save',
                            action: saveChanges
                        }
                    ]
                });
            }
        }
    );

    const errorsTooltip = computed(() => {
        const errors = [];
        Object.values(data.errors)?.forEach(item => errors.splice(0, 0, ...item));
        return errors.join('<br>');
    });


    const close = () => {
        emit('close', data.item);
    };

    const saveChanges = async () => {
        let scrollTop = licenseTrackInfoBox.value?.closest('.item-detail')?.scrollTop;

        data.updating = true;

        // Обновляем лицензии
        if (data.updatedItem?.licenses) {
            const oldIds = data.item?.licenses?.filter(item => item.id).map(item => item.id) || [];
            const newIds = data.updatedItem?.licenses?.filter(item => item.id).map(item => item.id) || [];

            // Удаляем лишние
            await Promise.all(oldIds.filter(id => newIds.indexOf(id) === -1).map(async (id) => {
                await licenses.tracks.remove(id);
            }));

            // Обновляем измененные
            // await Promise.all(data.updatedItem?.licenses.filter(item => item.id && oldIds.indexOf(item.id) === -1).map(async (item) => {
            await Promise.all(data.updatedItem?.licenses.filter(item => !!item.id).map(async (item) => {
                await licenses.tracks.update(item.id, {
                    // provider: item.provider,
                    url: item.url
                });
            }));

            // Добавляем новые
            await Promise.all(data.updatedItem?.licenses.filter(item => !item.id).map(async (item) => {
                await licenses.tracks.add({
                    track: props.track.id,
                    provider: item.provider,
                    url: item.url
                });

            }));
        }

        await delay(200);
        data.updating = false;

        message.info(t(`pages.licenses.tracks.done.title`));

        data.item.licenses = (await licenses.tracks.list(props.track.id))?.items || [];
        data.updatedItem = {};

        emit('update', data.item);

        if (props.viewMode === 'list' && scrollTop) {
            setTimeout(() => {
                if (licenseTrackInfoBox?.value) {
                    licenseTrackInfoBox.value.closest('.item-detail').scrollTop = scrollTop;
                }
            });
        }
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await licenses.tracks.list(props.track.id);

        data.item = {
            ...props.track,
            licenses: payload || []
        };

        await delay(200);

        data.loading = false;
    };

    onMounted(async() => {
        if (props.track?.id) {
            getItem();
        } else {
            close();
            data.loading = false;
        }
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    (!data.loading)
      ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["license-track-info", {
            'view-mode-table': props.viewMode === 'table',
            'updating': data.updating
        }]),
          ref_key: "licenseTrackInfoBox",
          ref: licenseTrackInfoBox
        }, [
          (props.viewMode === 'list')
            ? (openBlock(), createElementBlock("label", _hoisted_1$1, toDisplayString(unref(t)(`pages.licenses.tracks.edit.title`)), 1))
            : createCommentVNode("", true),
          createVNode(_sfc_main$2, {
            item: data.item,
            viewMode: props.viewMode,
            permissions: {
                canEditLicense: canEditLicense.value
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
                ? (openBlock(), createElementBlock("span", _hoisted_2))
                : createCommentVNode("", true),
              (props.track?.id && props.viewMode === 'list')
                ? (openBlock(), createBlock(_sfc_main$6, {
                    key: 1,
                    leftAuto: !unref(locale).rtl,
                    rightAuto: unref(locale).rtl,
                    tertiary: true,
                    invert: true,
                    size: "size-s"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("ul", null, [
                        createBaseVNode("li", { onClick: close }, [
                          createVNode(_component_Icon, { icon: "close" }),
                          createBaseVNode("span", null, toDisplayString(unref(t)(`pages.licenses.tracks.cancel`)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["leftAuto", "rightAuto"]))
                : createCommentVNode("", true),
              (unref(tracks).canEditLicense({
                        track: data.item,
                        artist: props.artist
                    }))
                ? (openBlock(), createBlock(Button, {
                    key: 2,
                    name: unref(t)(`pages.licenses.tracks.edit.save`),
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
      ? (openBlock(), createElementBlock("div", _hoisted_3, [
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
const LicenseTrackInfo = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-6ac05cc6"]]);

const _hoisted_1 = {
  key: 1,
  class: "title"
};

    
const _sfc_main = {
  __name: 'LicenseTrackEditor',
  props: {
        artist: { type: [Object, null], default: null },
        release: { type: [Object, null], default: null },
        items: { type: [Array, null], default: null }
    },
  emits: ['close'],
  setup(__props, { emit: __emit }) {

    const { t } = useI18n();
    const emit = __emit;

    const editor = ref(null);

    const props = __props;

    const data = reactive({
        t: {
            title: 'pages.licenses.tracks.title',
            back: 'pages.licenses.tracks.back',
            'add-one': 'pages.licenses.tracks.add-one',
            'select-several': 'pages.licenses.tracks.select-several',
            empty: {
                title: 'pages.licenses.tracks.empty.title',
                description: 'pages.licenses.tracks.empty.description'
            },
            revert: {
                confirm: {
                    title: 'pages.licenses.tracks.revert.confirm.title',
                    description: 'pages.licenses.tracks.revert.confirm.description'
                }
            },
            unsaved: {
                confirm: {
                    title: 'pages.licenses.tracks.unsaved.confirm.title',
                    description: 'pages.licenses.tracks.unsaved.confirm.description'
                }
            }
        },
        code: 'license-track-editor',
    });

    onMounted(() => {
        if (props.items?.length) {
            data.item = props.items[0];
        }
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createBlock(ItemsEditor, {
    t: data.t,
    code: data.code,
    getItem: unref(api).tracks().get,
    items: props.items,
    onClose: _cache[0] || (_cache[0] = $event => (emit('close', $event))),
    ref_key: "editor",
    ref: editor
  }, {
    "page-header-title": withCtx(() => [
      (props.artist || props.release)
        ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (props.artist)
              ? (openBlock(), createBlock(PageHeaderArtistTitle, {
                  key: 0,
                  artist: props.artist
                }, null, 8, ["artist"]))
              : createCommentVNode("", true),
            (props.artist && props.release)
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
              : createCommentVNode("", true)
          ], 64))
        : (openBlock(), createElementBlock("label", _hoisted_1, toDisplayString(unref(t)(`pages.licenses.tracks.title`)), 1))
    ]),
    items: withCtx(({ id, items, change, sortable, sort }) => [
      createVNode(Tracks, {
        id: id,
        items: items,
        showState: false,
        onChange: change
      }, null, 8, ["id", "items", "onChange"])
    ]),
    preview: withCtx(({ item }) => [
      createVNode(TrackPreview, { item: item }, null, 8, ["item"])
    ]),
    item: withCtx(({ toolbarId, position, item, viewMode, edit, add, update, remove, close, sections, hide, actions }) => [
      createVNode(LicenseTrackInfo, {
        toolbarId: toolbarId,
        track: item,
        viewMode: viewMode,
        artist: props.artist,
        onEdit: edit,
        onUpdate: update,
        onClose: close,
        onSections: sections,
        onActions: actions
      }, null, 8, ["toolbarId", "track", "viewMode", "artist", "onEdit", "onUpdate", "onClose", "onSections", "onActions"])
    ]),
    _: 1
  }, 8, ["t", "code", "getItem", "items"]))
}
}

};
const LicenseTrackEditor = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-7aa25045"]]);

export { LicenseTrackEditor as L };
//# sourceMappingURL=LicenseTrackEditor-zhS441yG.js.map
