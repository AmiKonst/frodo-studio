import { _ as _export_sfc, a as useI18n, r as reactive, b as createElementBlock, o as openBlock, g as createVNode, O as withCtx, h as createBaseVNode, k as Field, u as unref, a0 as DateField, a1 as maskEAN, F as Fragment, P as hooks, A as computed, d as renderList, c as createBlock, a2 as createSlots, q as createTextVNode, t as toDisplayString, D as Button, e as createCommentVNode, I as IconButton, x as _sfc_main$8, a3 as RELEASE_CONTRIBUTOR_ROLES, i as api, j as onMounted, U as markRaw, s as stores, f as ref, m as watch, y as resolveComponent, w as withDirectives, v as vShow, n as normalizeClass, V as _sfc_main$a, K as Teleport, M as Loader, N as delay, G as message, a4 as ReleasePreview, E as EmptyLabel } from './index-CsyEd4Dd.js';
import { _ as _sfc_main$7, A as ArtistAutoComplete, f as IconState, d as _sfc_main$9, I as ItemsSections, e as _sfc_main$b, P as PageHeaderArtistTitle, c as ItemsEditor } from './TrackEditor-pHvjGezb.js';
import { F as FileUploader } from './FileUploader-BCiN9xFj.js';

const _hoisted_1$4 = { class: "title-box" };
const _hoisted_2$2 = { class: "image-preview" };


    
const _sfc_main$6 = {
  __name: 'SectionReleaseInfo',
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
            name: t(`pages.releases.fields.title.name`),
            attention: t(`pages.releases.fields.title.attention`),
            attentions: [
                t(`pages.releases.fields.title.subattention1`),
                t(`pages.releases.fields.title.subattention2`),
                t(`pages.releases.fields.title.subattention3`)
            ],
            width: 200
        },
        cover: {
            name: t(`pages.releases.fields.cover.name`),
            attention: t(`pages.releases.fields.cover.attention`),
            attentions: [
                t(`pages.releases.fields.cover.subattention1`),
                t(`pages.releases.fields.cover.subattention2`),
                t(`pages.releases.fields.cover.subattention3`)
            ],
            width: 116
        },
        releaseDate: {
            name: t(`pages.releases.fields.release-date.name`),
            width: 210
        },
        preorderDate: {
            name: t(`pages.releases.fields.preorder-date.name`),
            width: 210
        },
        ean: {
            name: t(`pages.releases.fields.ean.name`),
            attention: t(`pages.releases.fields.ean.attention`),
            attentions: [
                t(`pages.releases.fields.ean.subattention1`),
            ],
            width: 220
        },
        catalogNumber: {
            name: t(`pages.releases.fields.catalog-number.name`),
            attention: t(`pages.releases.fields.catalog-number.attention`),
            attentions: [
                t(`pages.releases.fields.catalog-number.subattention1`),
            ],
            width: 200
        },
        fromProject: {
            name: t(`pages.releases.fields.from-project.name`),
            attention: t(`pages.releases.fields.from-project.attention`),
            width: 200
        }
    };

    emit('metadata', {
        fields,
        direction: 'row'
    });

    const data = reactive({
        ean: props.item?.ean,
        title: props.item?.title || '',
        releaseDate: props.item?.releaseDate,
        preorderDate: props.item?.preorderDate,
        cover: props.item?.cover || {},
        fromProject: props.item?.fromProject || '',
        catalogNumber: props.item?.catalogNumber || '',
        loading: false,
        errors: {}
    });

    const onTitleChange = (e) => {
        data.title = e.target.value?.trim();

        emit('change', { title: data.title });
    };

    const onEANChange = (e) => {
        data.ean = e.target.typedValue?.trim().toUpperCase();

        if (props.item?.ean !== data.ean) {
            emit('change', { ean: data.ean });
        }

        data.errors.ean = [];
        if (data.ean && !e.target.masked.isComplete) {
            data.errors.ean = [t(`pages.releases.fields.ean.error`)];
        }

        emit('error', data.errors);
    };

    const onCoverChange = (e) => {
        emit('change', { cover: e?.name ? e : null });
    };


    const checkDate = () => {
        data.errors.releaseDate = [];

        if (data.releaseDate && data.preorderDate && hooks(data.releaseDate).diff(hooks(data.preorderDate), 'day') < 0) {
            data.errors.releaseDate = [t(`pages.releases.fields.release-date.error`)];
        }

        emit('error', data.errors);
    };

    const onReleaseDateChange = (value) => {
        if (!value) {
            data.releaseDate = null;
        } else {
            data.releaseDate = hooks(value).toISOString();
        }

        emit('change', { releaseDate: data.releaseDate });

        checkDate();
    };

    const onPreorderDateChange = (value) => {
        if (!value) {
            data.preorderDate = null;
        } else {
            data.preorderDate = hooks(value).toISOString();
        }

        emit('change', { preorderDate: data.preorderDate });

        checkDate();
    };

    const onCatalogNumberChange = (e) => {
        data.catalogNumber = e.target.value?.trim();

        emit('change', { catalogNumber: data.catalogNumber });
    };

    const onFromProjectChange = (e) => {
        data.fromProject = e.target.value?.trim();

        emit('change', { fromProject: data.fromProject });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(_sfc_main$7, {
      field: fields.title,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$4, [
          createVNode(Field, {
            placeholder: unref(t)(`pages.releases.fields.title.placeholder`),
            value: data.title,
            autofocus: !data.title,
            disabled: !props.permissions.canEdit,
            class: "noerror light with-placeholder",
            onChange: onTitleChange
          }, null, 8, ["placeholder", "value", "autofocus", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$7, {
      field: fields.cover,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(FileUploader, {
            class: "upload",
            icon: "upload-img",
            acceptedFormats: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/jfif'],
            dropZone: true,
            disabled: !props.permissions.canEdit,
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
      field: fields.releaseDate,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(DateField, {
          "text-input": true,
          enableTimePicker: false,
          timePicker: false,
          disabled: !props.permissions.canEdit,
          placeholder: unref(t)(`pages.releases.fields.release-date.placeholder`),
          isError: !!data.errors.releaseDate?.length,
          format: "dd.MM.yyyy",
          class: "light noerror with-placeholder",
          modelValue: data.releaseDate,
          "onUpdate:modelValue": onReleaseDateChange
        }, null, 8, ["disabled", "placeholder", "isError", "modelValue"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$7, {
      field: fields.preorderDate,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(DateField, {
          "text-input": true,
          enableTimePicker: false,
          timePicker: false,
          disabled: !props.permissions.canEdit,
          placeholder: unref(t)(`pages.releases.fields.preorder-date.placeholder`),
          format: "dd.MM.yyyy",
          class: "light noerror with-placeholder",
          modelValue: data.preorderDate,
          "onUpdate:modelValue": onPreorderDateChange
        }, null, 8, ["disabled", "placeholder", "modelValue"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$7, {
      field: fields.ean,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.releases.fields.ean.placeholder`),
          disabled: !props.permissions.canEdit,
          value: data.ean,
          mask: unref(maskEAN),
          isError: !!data.errors.ean?.length,
          class: "noerror light with-placeholder",
          onChange: onEANChange
        }, null, 8, ["placeholder", "disabled", "value", "mask", "isError"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$7, {
      field: fields.catalogNumber,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.releases.fields.catalog-number.name`),
          disabled: !props.permissions.canEdit,
          value: data.catalogNumber,
          class: "noerror light with-placeholder",
          onChange: onCatalogNumberChange
        }, null, 8, ["placeholder", "disabled", "value"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"]),
    createVNode(_sfc_main$7, {
      field: fields.fromProject,
      viewMode: props.viewMode
    }, {
      default: withCtx(() => [
        createVNode(Field, {
          placeholder: unref(t)(`pages.releases.fields.from-project.name`),
          disabled: !props.permissions.canEdit,
          value: data.fromProject,
          class: "noerror light with-placeholder",
          onChange: onFromProjectChange
        }, null, 8, ["placeholder", "disabled", "value"])
      ]),
      _: 1
    }, 8, ["field", "viewMode"])
  ], 64))
}
}

};
const SectionReleaseInfo = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-6f5809b5"]]);

const _hoisted_1$3 = { class: "box-row" };

    
const _sfc_main$5 = {
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
                    t(`pages.releases.fields.contributors.artist-manual.subattention1`),
                    t(`pages.releases.fields.contributors.artist-manual.subattention2`),
                    t(`pages.releases.fields.contributors.artist-manual.subattention3`)               
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
            errors.push(t(`pages.releases.fields.contributors.errors.has-confirmed`));
        }

        const nameRolePairs = new Set();
        const artistRolePairs = new Set();

        contributors.forEach((item, id) => {
            // 2. Each contributor must have a role
            if (!item.role) {
                errors.push(t(`pages.releases.fields.contributors.errors.role`, { id: id + 1 }));
            }

            // 3. Must have either artist or unregisteredArtistName
            if (!item.artist && !item.unregisteredArtistName?.trim()) {
                errors.push(t(`pages.releases.fields.contributors.errors.has-artist`, { id: id + 1 }));
            }

            // 4. Unique unregisteredArtistName + role combination (case-insensitive)
            if (item.unregisteredArtistName && item.role) {
                const key = item.unregisteredArtistName.toLowerCase() + '|' + item.role;
                
                if (nameRolePairs.has(key)) {
                    errors.push(t(`pages.releases.fields.contributors.errors.unique-unregistered-artist-name`, {
                        name: item.unregisteredArtistName,
                        role: t(RELEASE_CONTRIBUTOR_ROLES.find(role => role.code === item.role)?.name)
                    }));
                } else {
                    nameRolePairs.add(key);
                }
            }

            // 5. Unique artist + role combination
            if (item.artist && item.role) {
                const key = item.artist.id + '|' + item.role;
                if (artistRolePairs.has(key)) {
                    errors.push(t(`pages.releases.fields.contributors.errors.unique-artist`, {
                        name: item.artist.name,
                        role: t(RELEASE_CONTRIBUTOR_ROLES.find(role => role.code === item.role)?.name)
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
      return (openBlock(), createBlock(_sfc_main$7, {
        key: id,
        viewMode: props.viewMode,
        field: {
            width: fields.contributors.width,
            attentions: item.manualMode ? fields.contributors.manual.attentions : []
        }
      }, createSlots({
        title: withCtx(() => [
          createVNode(_sfc_main$8, {
            class: "noerror light title",
            optionList: unref(RELEASE_CONTRIBUTOR_ROLES),
            placeholder: unref(t)(`pages.releases.fields.contributors.roles.placeholder`),
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
          createBaseVNode("div", _hoisted_1$3, [
            (!item.manualMode)
              ? (openBlock(), createBlock(ArtistAutoComplete, {
                  key: 0,
                  placeholder: unref(t)(`pages.releases.fields.contributors.artist.placeholder`),
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
                  placeholder: unref(t)(`pages.releases.fields.contributors.artist-manual.placeholder`),
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
                  title: unref(t)(`pages.releases.sections.contributors.remove`),
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
                  createTextVNode(toDisplayString(unref(t)(`pages.releases.fields.contributors.artist.empty`)) + " ", 1),
                  createVNode(Button, {
                    name: unref(t)(`pages.releases.fields.contributors.artist.manual`),
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
                      name: unref(t)(`pages.releases.fields.contributors.artist-manual.switch`),
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
    createVNode(_sfc_main$7, {
      viewMode: props.viewMode
    }, {
      title: withCtx(() => [
        createVNode(IconButton, {
          icon: "plus",
          class: "size-m",
          disabled: !props.permissions.canEditContributor,
          title: unref(t)(`pages.releases.sections.contributors.add`),
          onClick: _cache[0] || (_cache[0] = $event => (data.contributors.push({})))
        }, null, 8, ["disabled", "title"])
      ]),
      _: 1
    }, 8, ["viewMode"])
  ], 64))
}
}

};
const SectionContributors = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-fe7365d9"]]);

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
            title: t(`pages.releases.sections.dicts.subattention1`),
            description: t(`pages.releases.sections.dicts.subattention1_`)
        }, {
            title: t(`pages.releases.sections.dicts.subattention2`),
            description: t(`pages.releases.sections.dicts.subattention2_`)
        }, {
            title: t(`pages.releases.sections.dicts.subattention1`),
            description: t(`pages.releases.sections.dicts.subattention2_`)
        }
    ];

    const fields = {
        genres: {
            name: t('dicts.genres'),
            width: 200
        },
        moods: {
            name: t('dicts.moods'),
            width: 200
        }
    };

    emit('metadata', {
        fields,
        help,
        direction: 'row'
    });

    const data = reactive({
        moods: [],
        genres: [],

        loading: true
    });


    const onMoodsChange = ({ values }) => {
        data.moods = values?.length ? values : [];

        onChange();
    };

    const onGenresChange = ({ values }) => {
        data.genres = values?.length ? values : [];

        onChange();
    };

    const onChange = () => {
        const dicts = [
            ...data.moods.map(item => item.id),
            ...data.genres.map(item => item.id)
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
            field: fields.genres,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$9, {
                placeholder: unref(t)(`dicts.genres`),
                maxValuesCount: 3,
                disabled: !props.permissions.canEdit,
                values: data.genres,
                dict: "genres",
                class: "noerror light with-placeholder",
                onChange: onGenresChange
              }, null, 8, ["placeholder", "disabled", "values"])
            ]),
            _: 1
          }, 8, ["field", "viewMode"]),
          createVNode(_sfc_main$7, {
            field: fields.moods,
            viewMode: props.viewMode
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$9, {
                placeholder: unref(t)(`dicts.moods`),
                maxValuesCount: 3,
                disabled: !props.permissions.canEdit,
                values: data.moods,
                dict: "moods",
                class: "noerror light with-placeholder",
                onChange: onMoodsChange
              }, null, 8, ["placeholder", "disabled", "values"])
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
                id: 'release-info',
                name: '',
                title: 'pages.releases.sections.release-info.name',
                component: markRaw(SectionReleaseInfo)
            }, {
                id: 'contributors',
                title: 'pages.releases.sections.contributors.name',
                name: 'pages.releases.sections.contributors.name',
                component: markRaw(SectionContributors)
            }, {
                id: 'metadata',
                title: 'pages.releases.sections.dicts.name',
                name: 'pages.releases.sections.dicts.name',
                component: markRaw(_sfc_main$4)
            }
        ]
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(ItemsSections, {
    item: props.item,
    permissions: props.permissions,
    viewMode: props.viewMode,
    sections: data.sections,
    help: "pages.releases.sections.help",
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
const _hoisted_3$1 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$2 = {
  __name: 'ReleaseInfo',
  props: {
        toolbarId: { type: String, default: '' },
        release: { type: [Object, null], default: null },
        artist: { type: [Object, null], default: null },
        viewMode: { type: String, default: 'list' }
    },
  emits: ['update', 'add', 'remove', 'edit', 'sections', 'close', 'hide', 'actions'],
  setup(__props, { emit: __emit }) {

    const modals = stores.modals();

    const releases = api.releases();
    const locale = stores.locale();

    const emit = __emit;
    const { t } = useI18n();

    const releaseInfoBox = ref(null);

    const props = __props;

    // Permissions
        const canEdit = computed(() => {
            if (data.item?.id) {
                return releases.canEdit({
                    release: data.item
                });
            }

            return releases.canAdd({
                artist: props.artist
            });
        });

        const canRemove = computed(() => {
            return releases.canRemove({
                release: data.item
            });
        });

        const canEditState = computed(() => {
            return releases.canEditState({
                release: data.item
            });
        });

        const canEditContributor = computed(() => {
            if (data.item?.id) {
                return releases.canEditContributor({
                    release: data.item
                });
            }

            return releases.canAdd({
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
        uploading: false
    });

    const getStates = async () => {
        data.states = data.id ? await releases.getAvailableStates(data.id) || [] : [];
    };

    const changeState = async (state) => {
        modals.confirm({
            title: t(`pages.releases.state.confirm.title`),
            body: t(`pages.releases.state.confirm.description`, {
                name: t(`state.default.code.${ state.toLowerCase() }`)
            }),
            onOk: async () => {
                const payload = await releases.changeState(data.id, state);

                data.item.state = payload?.state;
                getStates();

                emit('update', data.item);

                modals.open('success', {
                    data: {
                        title: t(`pages.releases.state.done.title`),
                        close: t(`pages.releases.state.done.close`)
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
            title: t(`pages.releases.remove.confirm.title`),
            body: t(`pages.releases.remove.confirm.description`, { title: data.item?.title }),
            additionFields: [
                {
                    name: t(`pages.releases.remove.confirm.with-tracks`),
                    checked: false
                }
            ],
            onOk: async ({ additionFields }) => {
                const with_tracks = additionFields?.length ? !!additionFields[0].checked : false;
                await releases.remove(data.id, with_tracks);

                modals.open('success', {
                    data: {
                        title: t(`pages.releases.remove.done.title`),
                        close: t(`pages.releases.remove.done.close`)
                    },
                    quietClose: true
                });

                emit('remove', data.item.id);
            }
        }); 
    };

    const saveChanges = async (mode) => {
        let scrollTop = releaseInfoBox.value?.closest('.item-detail')?.scrollTop;

        data.updating = true;

        const releaseInfo = { ...data.updatedItem };

        // Убираем участников, они сейвятся отдельно
        delete releaseInfo.contributors;

        // Удаляем временный айдишник
        delete releaseInfo.localId;

        // Убираем поля, которые рассчитываются автоматически

        // Вытаскиваем картинку
        const cover = releaseInfo.cover;
        if (cover) {
            delete releaseInfo.cover;
        }

        // Если мы только создаем релиз, то надо прокинуть сразу primary, чтобы привязать
        if (!data.id) {
            const contributor = data.updatedItem.contributors?.find(item => item.role === 'PRIMARY' && item.state === 'CONFIRMED');

            if (contributor) {
                releaseInfo.artist = contributor.artist?.id;
                data.updatedItem.contributors = [...data.updatedItem.contributors];
                data.updatedItem.contributors.splice(data.updatedItem.contributors.indexOf(contributor), 1);
            }
        }

        // Сейвим основные данные
        let payload;

        if (canEdit.value) {
            if (data.id) {
                payload = await releases.update(data.id, releaseInfo);
            } else {
                payload = await releases.add(releaseInfo);
            }

            // Обновляем картинку
            if (payload?.id && cover) {
                payload = await releases.updateCover(payload.id, cover);
            }
        } else if (data.id) {
            payload = await releases.get(data.id);
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
                await releases.removeContributor(id);
            }));

            // Обновляем измененные
            await Promise.all(data.updatedItem?.contributors.filter(item => item.id && oldIds.indexOf(item.id) === -1).map(async (item) => {
                await releases.updateContributor(item.id, {
                    artist: item.artist?.id,
                    role: item.role,
                    unregisteredArtistName: item.unregisteredArtistName
                });
            }));

            // Добавляем новые
            await Promise.all(data.updatedItem?.contributors.filter(item => !item.id).map(async (item) => {
                const contributor = await releases.addContributor({
                    release: payload?.id || data.id,
                    artist: item.artist?.id,
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

        await delay(200);
        data.updating = false;

        if (payload?.id) {
            message.info(t(`pages.releases.${ data.id ? 'edit' : 'add' }.done.title`));
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
                if (releaseInfoBox?.value) {
                    releaseInfoBox.value.closest('.item-detail').scrollTop = scrollTop;
                }
            });
        }
    };

    const saveChangesAndAddMore = async () => {
        await saveChanges('add-one');
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await releases.get(props.release.id);

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

        if (props.release?.localId) {
            data.item = { ...props.release };
            // data.item.localId = props.release.localId;
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
        if (props.release?.id) {
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
          class: normalizeClass(["release-info", {
            'view-mode-table': props.viewMode === 'table',
            'updating': data.updating
        }]),
          ref_key: "releaseInfoBox",
          ref: releaseInfoBox
        }, [
          (props.viewMode === 'list')
            ? (openBlock(), createElementBlock("label", _hoisted_1$2, toDisplayString(unref(t)(`pages.releases.${ props.release?.id ? (!canEdit.value ? 'view' : 'edit') : 'add' }.title`)), 1))
            : createCommentVNode("", true),
          createVNode(_sfc_main$3, {
            item: data.item,
            viewMode: props.viewMode,
            permissions: {
                canEdit: canEdit.value,
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
                ? (openBlock(), createBlock(_sfc_main$a, {
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
                              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.releases.remove.title`)), 1)
                            ]))
                          : createCommentVNode("", true),
                        createBaseVNode("li", { onClick: close }, [
                          createVNode(_component_Icon, { icon: "close" }),
                          createBaseVNode("span", null, toDisplayString(unref(t)(`pages.releases.cancel`)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["leftAuto", "rightAuto"]))
                : createCommentVNode("", true),
              (canRemove.value && props.viewMode === 'table' && data.id)
                ? (openBlock(), createBlock(Button, {
                    key: 2,
                    title: unref(t)(`pages.releases.remove.title`),
                    class: "size-m tertiary invert",
                    icon: "trash",
                    onClick: remove
                  }, null, 8, ["title"]))
                : createCommentVNode("", true),
              (data.id)
                ? (openBlock(), createBlock(_sfc_main$b, {
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
                    name: unref(t)(`pages.releases.${ props.release?.id ? 'edit' : 'add' }.save-and-add-more`),
                    class: "size-s secondary",
                    disabled: saveDisabled.value,
                    onClick: saveChangesAndAddMore
                  }, null, 8, ["name", "disabled"]))
                : createCommentVNode("", true),
              ((canEdit.value || canEditContributor.value))
                ? (openBlock(), createBlock(Button, {
                    key: 5,
                    name: unref(t)(`pages.releases.${ props.release?.id ? 'edit' : 'add' }.save`),
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
const ReleaseInfo = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-fb77a6ab"]]);

const _hoisted_1$1 = { class: "items-list" };
const _hoisted_2 = {
  key: 0,
  class: "items"
};
const _hoisted_3 = ["onClick"];

    
const _sfc_main$1 = {
  __name: 'Releases',
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
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    (props.items.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item, id) => {
            return (openBlock(), createElementBlock("li", {
              class: normalizeClass({ active: props.id === item.id || props.id === item.localId }),
              key: id,
              onClick: $event => (emit('change', item))
            }, [
              createVNode(ReleasePreview, {
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
          title: unref(t)(`pages.releases.empty.title`),
          description: unref(t)(`pages.releases.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const Releases = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-c1905f21"]]);

const _hoisted_1 = {
  key: 1,
  class: "title"
};

    
const _sfc_main = {
  __name: 'ReleaseEditor',
  props: {
        artist: { type: [Object, null], default: null },
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
            title: 'pages.releases.title',
            back: 'pages.releases.back',
            'add-one': 'pages.releases.add-one',
            'select-several': 'pages.releases.select-several',
            empty: {
                title: 'pages.releases.empty.title',
                description: 'pages.releases.empty.description'
            },
            revert: {
                confirm: {
                    title: 'pages.releases.revert.confirm.title',
                    description: 'pages.releases.revert.confirm.description'
                }
            },
            unsaved: {
                confirm: {
                    title: 'pages.releases.unsaved.confirm.title',
                    description: 'pages.releases.unsaved.confirm.description'
                }
            }
        },
        code: 'release-editor',
    });

    const canAdd = computed(() => {
        return api.releases().canAdd({ artist: props.artist });
    });

    const create = (count) => {
        editor.value.create(count);
    };

    const selectItems = (items) => {
        modals.open('select-releases', {
            data: {
                items,
                artist: props.artist
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
    getItem: unref(api).releases().get,
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
      (props.artist)
        ? (openBlock(), createBlock(PageHeaderArtistTitle, {
            key: 0,
            artist: props.artist
          }, null, 8, ["artist"]))
        : (openBlock(), createElementBlock("label", _hoisted_1, toDisplayString(unref(t)(`pages.releases.title`)), 1))
    ]),
    items: withCtx(({ id, items, change }) => [
      createVNode(Releases, {
        id: id,
        items: items,
        onChange: change
      }, null, 8, ["id", "items", "onChange"])
    ]),
    preview: withCtx(({ item }) => [
      createVNode(ReleasePreview, {
        item: item,
        row: true,
        showState: true
      }, null, 8, ["item"])
    ]),
    item: withCtx(({ toolbarId, item, viewMode, edit, add, update, remove, close, sections, hide, actions }) => [
      createVNode(ReleaseInfo, {
        toolbarId: toolbarId,
        release: item,
        viewMode: viewMode,
        artist: props.artist,
        onEdit: edit,
        onAdd: add,
        onUpdate: update,
        onRemove: remove,
        onClose: close,
        onHide: hide,
        onSections: sections,
        onActions: actions
      }, null, 8, ["toolbarId", "release", "viewMode", "artist", "onEdit", "onAdd", "onUpdate", "onRemove", "onClose", "onHide", "onSections", "onActions"])
    ]),
    _: 1
  }, 8, ["t", "code", "canAdd", "getItem", "items"]))
}
}

};
const ReleaseEditor = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-c1dbc95e"]]);

export { ReleaseEditor as R };
//# sourceMappingURL=ReleaseEditor-CshY3NOf.js.map
