import { _ as _export_sfc, a as useI18n, r as reactive, j as onMounted, b as createElementBlock, o as openBlock, h as createBaseVNode, e as createCommentVNode, c as createBlock, g as createVNode, u as unref, k as Field, Q as Filters, S as _sfc_main$a, F as Fragment, d as renderList, n as normalizeClass, ae as ArtistPreview, D as Button, E as EmptyLabel, i as api, A as computed, t as toDisplayString, m as watch, af as knownSites, I as IconButton, ag as isValidURL, ah as detectSiteCode, s as stores, ai as isInvalidEmail, w as withDirectives, v as vShow, aj as maskArtistCode, K as Teleport, M as Loader, N as delay, G as message, O as withCtx, H as Img, Y as AutoComplete, ak as TRACK_CONTRIBUTOR_ROLES, W as TrackPreview, al as LoadMore, a3 as RELEASE_CONTRIBUTOR_ROLES, a4 as ReleasePreview, f as ref, y as resolveComponent, a2 as createSlots, V as _sfc_main$d, am as ARTISTS_FILTERS, an as ARTISTS_SORT, T as Tracks, R as Releases } from './index-CuriYjet.js';
import { P as PageHeader } from './PageHeader-k1bkUrc5.js';
import { d as _sfc_main$b, f as IconState, e as _sfc_main$c, P as PageHeaderArtistTitle, T as TrackEditor } from './TrackEditor-DQxJOVAU.js';
import { T as Total, M as Menu } from './Menu-DGTCfHx3.js';
import { F as FileUploader, T as Textarea } from './FileUploader-XsAo6vke.js';
import { L as LicenseTrackEditor } from './LicenseTrackEditor-BH-5JSzF.js';
import { R as ReleaseEditor } from './ReleaseEditor-DDoJ8Tvw.js';
import './ViewMode-BTuonIKr.js';

const _hoisted_1$9 = { class: "items-list" };
const _hoisted_2$8 = { class: "filters" };
const _hoisted_3$5 = {
  key: 0,
  class: "items"
};
const _hoisted_4$3 = ["onClick"];


    
const _sfc_main$9 = {
  __name: 'Artists',
  props: {
        sort: { type: Array, default: () => ([]) },
        filters: { type: Array, default: () => ([]) },
        endpoint: { type: String, default: 'all' },
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
        take: 30, // Temp
        total: 0,
        sort: null,
        searchStr: null,
        filters: {}
    });

    const setFilters = (payload) => {
        data.filters = payload;
        reload();
    };

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
        data.loading = true;

        if (!data.skip) {
            data.items = [];
        }

        let params = {
            skip: data.skip,
            take: data.take
        };

        if (data.sort) {
            params.sort = data.sort.code;
            params.sort_dir = data.sort.direction;
        }

        if (!!data.searchStr?.trim().length) {
            params.name = data.searchStr.toLowerCase().trim();
        }

        if (data.filters && Object.keys(data.filters)?.length) {
            params = { ...data.filters, ...params };
        }


        let payload;

        if (props.endpoint === 'all') {
            payload = await api.artists().list(params) || [];
        } else if (props.endpoint === 'my-artists') {
            payload = await api.user().getMyArtists(params) || [];
        }

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
  return (openBlock(), createElementBlock("div", _hoisted_1$9, [
    createBaseVNode("div", _hoisted_2$8, [
      createVNode(Field, {
        icon: "search",
        placeholder: unref(t)('blocks.artists.search'),
        class: "noerror light",
        onChange: onSearchChange
      }, null, 8, ["placeholder"]),
      (props.filters?.length)
        ? (openBlock(), createBlock(Filters, {
            key: 0,
            filters: props.filters,
            onChange: setFilters
          }, null, 8, ["filters"]))
        : createCommentVNode("", true),
      (props.sort?.length)
        ? (openBlock(), createBlock(_sfc_main$a, {
            key: 1,
            sort: props.sort,
            code: data.sort?.code,
            onChange: setSort
          }, null, 8, ["sort", "code"]))
        : createCommentVNode("", true)
    ]),
    (data.items.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_3$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
            return (openBlock(), createElementBlock("li", {
              class: normalizeClass({ active: props.id === item.id }),
              onClick: $event => (emit('change', item))
            }, [
              createVNode(ArtistPreview, {
                item: item,
                row: true,
                showState: true
              }, null, 8, ["item"])
            ], 10, _hoisted_4$3))
          }), 256))
        ]))
      : createCommentVNode("", true),
    (data.loading || (data.items.length < data.total))
      ? (openBlock(), createBlock(Button, {
          key: 1,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)(`blocks.artists.load`),
          onClick: getItems
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 2,
          class: "empty",
          title: unref(t)(`pages.artists.empty.title`),
          description: unref(t)(`pages.artists.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const Artists$1 = /*#__PURE__*/_export_sfc(_sfc_main$9, [['__scopeId',"data-v-bffa4a2b"]]);

const _hoisted_1$8 = { class: "artist-menu" };
const _hoisted_2$7 = { class: "items" };
const _hoisted_3$4 = ["onClick"];

    
const _sfc_main$8 = {
  __name: 'ArtistMenu',
  props: {
        code: { type: String, default: '' },
        item: { type: [Object, null], default: null },
        total: { type: [Object, null], default: null }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    // Permissions
        const canEditTeam = computed(() => {
            if (!props.item?.id) {
                return false;
            }

            return api.artists().canEditTeam({
                artist: props.item
            })
        });

        const canEditContributorState = computed(() => {
            if (!props.item?.id) {
                return false;
            }

            return api.tracks().canEditContributorState({
                artist: props.item
            }) || api.releases().canEditContributorState({
                artist: props.item
            })
        });

        

    const items = computed(() => ([
        {
            name: 'pages.artists.menu.info',
            code: 'info'
        }, {
            name: 'pages.artists.menu.metadata',
            code: 'metadata',
            disabled: !props.item?.id
        }, {
            name: 'pages.artists.menu.team',
            code: 'team',
            disabled: !props.item?.id || !canEditTeam.value
        }, {
            name: 'pages.artists.menu.tracks',
            code: 'tracks',
            disabled: !props.item?.id
        }, {
            name: 'pages.artists.menu.releases',
            code: 'releases',
            disabled: !props.item?.id
        }, {
            name: 'pages.artists.menu.collab-invites',
            code: 'collab-invites',
            disabled: !props.item?.id || !canEditContributorState.value
        }
    ]));

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("ul", _hoisted_2$7, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
        return (openBlock(), createElementBlock("li", {
          class: normalizeClass({ active: props.code === item.code, disabled: item.disabled }),
          onClick: $event => (!item.disabled ? emit('change', item.code) : '')
        }, [
          createBaseVNode("span", null, toDisplayString(unref(t)(item.name)), 1),
          (props.total && props.total[item.code])
            ? (openBlock(), createBlock(Total, {
                key: 0,
                total: props.total[item.code]
              }, null, 8, ["total"]))
            : createCommentVNode("", true)
        ], 10, _hoisted_3$4))
      }), 256))
    ])
  ]))
}
}

};
const ArtistMenu = /*#__PURE__*/_export_sfc(_sfc_main$8, [['__scopeId',"data-v-b24d2e6b"]]);

const _hoisted_1$7 = { class: "links-field" };

    
const _sfc_main$7 = {
  __name: 'LinksField',
  props: {
        value: { type: Object, default: () => ({}) },
        disabled: { type: Boolean, default: () => false }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const { t } = useI18n();
    const props = __props;

    const emit = __emit;

    const isInvalid = (index) => {
        const val = fields[index].value;
        return val && !isValidURL(val);
    };

    const fields = reactive(
        Object.entries(props.value).map(([code, value]) => ({ code, value }))
    );

    watch(
        () => props.value,
        (newVal) => {
            fields.splice(0, fields.length, ...Object.entries(newVal).map(([code, value]) => ({ code, value })));
        },
        { deep: true }
    );

    const emitValue = () => {
        const result = {};
        for (const item of fields) {
            if (item.code && item.value) {
                result[item.code] = item.value;
            }
        }
        emit('change', result);
    };

    const onChange = (e, index) => {
        const input = e.target.value.trim();
        const siteCode = detectSiteCode(input);

        fields[index].value = input;
        fields[index].code = siteCode;

        emitValue();
    };

    const addField = () => {
        fields.push({ code: '', value: '' });
    };

    const removeField = (index) => {
        fields.splice(index, 1);
        emitValue();
    };

    onMounted(() => {
        if (!fields?.length) {
            addField();
        }
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(fields, (item, index) => {
      return (openBlock(), createElementBlock("div", { key: index }, [
        createVNode(Field, {
          icon: item.code && unref(knownSites).get(item.code) ? item.code : 'link',
          value: item.value,
          disabled: props.disabled,
          placeholder: unref(t)('ui.links-field.placeholder'),
          class: normalizeClass({ 'with-error': isInvalid(index), light: true, noerror: true }),
          onChange: $event => (onChange($event, index))
        }, null, 8, ["icon", "value", "disabled", "placeholder", "class", "onChange"]),
        createVNode(IconButton, {
          icon: "minus",
          class: "size-m secondary",
          disabled: props.disabled,
          onClick: $event => (removeField(index))
        }, null, 8, ["disabled", "onClick"])
      ]))
    }), 128)),
    createVNode(IconButton, {
      icon: "plus",
      class: "size-m",
      disabled: props.disabled,
      onClick: addField
    }, null, 8, ["disabled"])
  ]))
}
}

};
const LinksField = /*#__PURE__*/_export_sfc(_sfc_main$7, [['__scopeId',"data-v-b41b3346"]]);

const _hoisted_1$6 = {
  key: 0,
  class: "artist-info"
};
const _hoisted_2$6 = { class: "title" };
const _hoisted_3$3 = { class: "form-line" };
const _hoisted_4$2 = { class: "form-line" };
const _hoisted_5$2 = { class: "box" };
const _hoisted_6$2 = { class: "attention" };
const _hoisted_7$2 = { class: "form-line" };
const _hoisted_8$2 = { class: "attention" };
const _hoisted_9$1 = { class: "profile-image-preview" };
const _hoisted_10$1 = { class: "form-line" };
const _hoisted_11 = { class: "form-line" };
const _hoisted_12 = { class: "form-line" };
const _hoisted_13 = { class: "attention" };
const _hoisted_14 = {
  key: 1,
  class: "loader"
};
    // const modals = stores.modals();
    
const _sfc_main$6 = {
  __name: 'ArtistInfo',
  props: {
        item: { type: [Object, null], default: null }
    },
  emits: ['update', 'add', 'edit'],
  setup(__props, { emit: __emit }) {

    const artists = api.artists();
    stores.user();

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        id: null,
        code: null,
        name: null,
        email: null,
        description: null,
        profileImage: {},
        links: {},
        newProfileImage: null,
        loading: true
    });

    const saveDisabled = computed(() => {
        return !data.name || !data.code || !/^[a-z0-9_-]{3,20}$/.test(data.code) || data.code?.length < 3 || (data.email && isInvalidEmail(data.email)) || !data.hasChanges;
    });

    const canEdit = computed(() => {
        if (data.id) {
            return api.artists().canEdit({
                artist: { id: data.id }
            });
        }

        return api.artists().canAdd();
    });

    const canEditByCurator = computed(() => {
        if (data.id) {
            return api.artists().canEditByCurator({
                artist: { id: data.id }
            });
        }

        return api.artists().canAdd();
    });

    const onCodeChange = (e) => {
        if (data.code !== e.target.value?.trim()) {
            data.code = e.target.value?.trim();
            onEdit();
        }
    };

    const onNameChange = (e) => {
        data.name = e.target.value?.trim();
        onEdit();
    };

    const onEmailChange = (e) => {
        data.email = e.target.value?.trim();
        onEdit();
    };

    const onDescriptionChange = (e) => {
        data.description = e.target.value?.trim();
        onEdit();
    };

    const onLinksChange = (links) => {
        data.links = links || {};
        onEdit();
    };

    const updateProfileImage = (e) => {
        if (e?.name) {
            data.newProfileImage = e;
            onEdit();
        }
    };

    const onEdit = () => {
        emit('edit');
        data.hasChanges = true;
    };

    const saveChanges = async () => {
        const artistInfo = {
            name: data.name,
            code: data.code,
            description: data.description || null,
            links: Object.keys(data.links || {}).map(code => ({ code, url: data.links[code] })),
            email: data.email || null
        };

        // Если представитель артиста, то убираем name

        data.updating = true;

        let payload;

        if (data.id) {
            payload = await artists.update(data.id, artistInfo);
        } else {
            payload = await artists.add(artistInfo);
        }

        if (payload?.id && data.newProfileImage) {
            payload = await artists.updateProfileImage(payload.id, data.newProfileImage);
        }

        await delay(200);
        data.updating = false;

        if (payload?.id) {
            message.info(t(`pages.artists.${ data.id ? 'edit' : 'add' }.done.title`));
            // modals.open('success', {
            //     data: {
            //         timer: 3,
            //         title: t(`pages.artists.${ data.id ? 'edit' : 'add' }.done.title`),
            //         close: t(`pages.artists.${ data.id ? 'edit' : 'add' }.done.close`)
            //     },
            //     quietClose: true
            // });
        }

        if (data.id) {
            emit('update', payload);
        } else {
            emit('add', payload);
        }

        data.code = payload.code;
        data.id = payload.id;
        data.profileImage = payload.profileImage || {};
        data.newProfileImage = null;

        delete data.hasChanges;
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await artists.get(props.item.id);

        data.id = payload?.id;
        data.code = payload?.code;
        data.name = payload?.name;
        data.email = payload?.email;
        data.description = payload?.description;

        data.profileImage = payload?.profileImage || {};

        const links = {};
        payload?.links?.forEach(item => links[item.code] = item.url);
        data.links = links || {};

        await delay(200);

        data.loading = false;

        delete data.hasChanges;
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
      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$6, [
          createBaseVNode("label", _hoisted_2$6, toDisplayString(unref(t)(`pages.artists.${ props.item?.id ? 'edit' : 'add' }.title`)), 1),
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.artists.fields.name`)), 1),
            createVNode(Field, {
              placeholder: unref(t)(`pages.artists.fields.name`),
              value: data.name,
              disabled: !canEditByCurator.value,
              class: "noerror light with-placeholder",
              onChange: onNameChange
            }, null, 8, ["placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.artists.fields.code.name`)), 1),
            createBaseVNode("div", _hoisted_5$2, [
              createVNode(Field, {
                placeholder: unref(t)(`pages.artists.fields.code.name`),
                value: data.code,
                disabled: !canEditByCurator.value,
                maxlength: 20,
                mask: unref(maskArtistCode),
                class: "noerror light with-placeholder",
                onChange: onCodeChange
              }, null, 8, ["placeholder", "value", "disabled", "mask"]),
              createBaseVNode("span", _hoisted_6$2, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.fields.code.subattention1`)), 1),
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.fields.code.subattention2`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createBaseVNode("label", null, [
              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.fields.profile-image`)), 1),
              createBaseVNode("span", _hoisted_8$2, toDisplayString(unref(t)(`pages.artists.fields.min-profile-image-size`)), 1)
            ]),
            createBaseVNode("div", _hoisted_9$1, [
              createVNode(FileUploader, {
                class: "upload",
                icon: "upload-img",
                acceptedFormats: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/jfif'],
                loading: data.loading,
                dropZone: true,
                showPreview: true,
                preview: data.profileImage?.resized,
                zoneSize: { width: '120px', height: '120px' },
                zoneType: "square-image",
                disabled: !canEdit.value,
                onChange: updateProfileImage
              }, null, 8, ["loading", "preview", "disabled"])
            ])
          ]),
          createBaseVNode("div", _hoisted_10$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.artists.fields.description`)), 1),
            createVNode(Textarea, {
              placeholder: unref(t)(`pages.artists.fields.description`),
              value: data.description,
              class: "noerror light with-placeholder",
              disabled: !canEdit.value,
              onChange: onDescriptionChange
            }, null, 8, ["placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.artists.fields.links`)), 1),
            createVNode(LinksField, {
              placeholder: unref(t)(`pages.artists.fields.links`),
              disabled: !canEdit.value,
              value: data.links,
              onChange: onLinksChange
            }, null, 8, ["placeholder", "disabled", "value"])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("label", null, [
              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.fields.email`)), 1),
              createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)(`pages.artists.fields.email-goal`)), 1)
            ]),
            createVNode(Field, {
              placeholder: unref(t)(`pages.artists.fields.email`),
              disabled: !canEdit.value,
              value: data.email,
              type: "email",
              class: normalizeClass(["noerror light with-placeholder", { 'with-error': unref(isInvalidEmail)(data.email) }]),
              onChange: onEmailChange
            }, null, 8, ["placeholder", "disabled", "value", "class"])
          ]),
          (openBlock(), createBlock(Teleport, { to: "#item-head-buttons" }, [
            (canEdit.value)
              ? (openBlock(), createBlock(Button, {
                  key: 0,
                  name: unref(t)(`pages.artists.${ props.item?.id ? 'edit' : 'add' }.save`),
                  class: "size-s secondary",
                  disabled: saveDisabled.value,
                  onClick: saveChanges
                }, null, 8, ["name", "disabled"]))
              : createCommentVNode("", true)
          ]))
        ], 512)), [
          [vShow, !data.updating]
        ])
      : createCommentVNode("", true),
    (data.loading || data.updating)
      ? (openBlock(), createElementBlock("div", _hoisted_14, [
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
const ArtistInfo = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-75dd524c"]]);

const _hoisted_1$5 = {
  key: 0,
  class: "artist-metadata"
};
const _hoisted_2$5 = { class: "title" };
const _hoisted_3$2 = { class: "form-line" };
const _hoisted_4$1 = { class: "form-line" };
const _hoisted_5$1 = { class: "form-line" };
const _hoisted_6$1 = { class: "form-line" };
const _hoisted_7$1 = { class: "form-line" };
const _hoisted_8$1 = {
  key: 1,
  class: "loader"
};
    
const _sfc_main$5 = {
  __name: 'ArtistMetadata',
  props: {
        item: { type: [Object, null], default: null }
    },
  emits: ['update', 'edit'],
  setup(__props, { emit: __emit }) {

    stores.modals();
    const artists = api.artists();
    const dict = api.dict();
    stores.user();

    const emit = __emit;
    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        instruments: [],
        moods: [],
        categories: [],
        genres: [],
        tags: [],

        id: null,
        loading: true
    });

    const canEdit = computed(() => {
        if (data.id) {
            return api.artists().canEdit({
                artist: { id: data.id }
            });
        }

        return api.artists().canAdd();
    });

    const onInstrumentsChange = ({ values }) => {
        data.instruments = values?.length ? values : [];

        onEdit();
    };

    const onMoodsChange = ({ values }) => {
        data.moods = values?.length ? values : [];

        onEdit();
    };

    const onCategoriesChange = ({ values }) => {
        data.categories = values?.length ? values : [];

        onEdit();
    };

    const onGenresChange = ({ values }) => {
        data.genres = values?.length ? values : [];

        onEdit();
    };

    const onTagsChange = ({ values }) => {
        data.tags = values?.length ? values : [];

        onEdit();
    };

    const onEdit = () => {
        emit('edit');
        data.hasChanges = true;
    };

    const saveChanges = async () => {
        if (!data.id) {
            return;
        }

        const artistInfo = {
            dicts: [
                ...data.instruments.map(item => item.id),
                ...data.moods.map(item => item.id),
                ...data.categories.map(item => item.id),
                ...data.genres.map(item => item.id),
                ...data.tags.map(item => item.id)
            ]
        };

        data.updating = true;

        const payload = await artists.update(data.id, artistInfo);

        await delay(200);
        data.updating = false;
        delete data.hasChanges;

        message.info(t(`pages.artists.edit.done.title`));

        emit('update', payload);
    };

    const getItem = async () => {
        data.loading = true;

        const types = {};

        (await dict.getTypes())?.forEach(item => types[item.code] = item.id);

        const payload = await artists.get(props.item.id);

        Object.keys(types).forEach(type => {
            if (data[type]) {
                data[type] = payload?.dicts.filter(item => item.dictId === types[type]).map(item => ({ ...item, name: item.title })) || [];
            }
        });

        data.id = payload?.id;

        await delay(200);

        data.loading = false;
        delete data.hasChanges;
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
      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$5, [
          createBaseVNode("label", _hoisted_2$5, toDisplayString(unref(t)(`pages.artists.dict.title`)), 1),
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("label", null, toDisplayString(unref(t)('dicts.instruments')), 1),
            createVNode(_sfc_main$b, {
              placeholder: unref(t)(`dicts.instruments`),
              values: data.instruments,
              disabled: !canEdit.value,
              maxPreviewValuesCount: 3,
              dict: "instruments",
              class: "noerror light with-placeholder",
              onChange: onInstrumentsChange
            }, null, 8, ["placeholder", "values", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)('dicts.genres')), 1),
            createVNode(_sfc_main$b, {
              placeholder: unref(t)(`dicts.genres`),
              values: data.genres,
              disabled: !canEdit.value,
              maxPreviewValuesCount: 3,
              dict: "genres",
              class: "noerror light with-placeholder",
              onChange: onGenresChange
            }, null, 8, ["placeholder", "values", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)('dicts.categories')), 1),
            createVNode(_sfc_main$b, {
              placeholder: unref(t)(`dicts.categories`),
              values: data.categories,
              disabled: !canEdit.value,
              maxPreviewValuesCount: 3,
              dict: "categories",
              class: "noerror light with-placeholder",
              onChange: onCategoriesChange
            }, null, 8, ["placeholder", "values", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)('dicts.moods')), 1),
            createVNode(_sfc_main$b, {
              placeholder: unref(t)(`dicts.moods`),
              values: data.moods,
              maxPreviewValuesCount: 3,
              disabled: !canEdit.value,
              dict: "moods",
              class: "noerror light with-placeholder",
              onChange: onMoodsChange
            }, null, 8, ["placeholder", "values", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)('dicts.tags')), 1),
            createVNode(_sfc_main$b, {
              placeholder: unref(t)(`dicts.tags`),
              values: data.tags,
              disabled: !canEdit.value,
              maxPreviewValuesCount: 3,
              dict: "tags",
              class: "noerror light with-placeholder",
              onChange: onTagsChange
            }, null, 8, ["placeholder", "values", "disabled"])
          ]),
          (openBlock(), createBlock(Teleport, { to: "#item-head-buttons" }, [
            createVNode(Button, {
              name: unref(t)(`pages.artists.edit.save`),
              disabled: !canEdit.value || !data.hasChanges,
              class: "size-s secondary",
              onClick: saveChanges
            }, null, 8, ["name", "disabled"])
          ]))
        ], 512)), [
          [vShow, !data.updating]
        ])
      : createCommentVNode("", true),
    (data.loading || data.updating)
      ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
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
const ArtistMetadata = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-01618d08"]]);

const _hoisted_1$4 = {
  key: 0,
  class: "artist-team"
};
const _hoisted_2$4 = { class: "title" };
const _hoisted_3$1 = { class: "form-line" };
const _hoisted_4 = { class: "user-option-preview" };
const _hoisted_5 = { class: "name" };
const _hoisted_6 = { class: "username" };
const _hoisted_7 = { class: "user-value-preview" };
const _hoisted_8 = { class: "name" };
const _hoisted_9 = { class: "username" };
const _hoisted_10 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$4 = {
  __name: 'ArtistTeam',
  props: {
        item: { type: [Object, null], default: null }
    },
  emits: ['update', 'edit'],
  setup(__props, { emit: __emit }) {

    const modals = stores.modals();
    const artists = api.artists();
    const user = stores.user();
    const emit = __emit;

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        searchStr: '',
        users: [],
        oldValues: [],
        values: [],
        loading: true
    });

    const saveItems = computed(() => ({
        add: data.values.filter(item => !data.oldValues.find(oldItem => oldItem.code === item.code)),
        remove: data.oldValues.filter(oldItem => !data.values.find(item => item.code === oldItem.code))
    }));

    const saveDisabled = computed(() => {
        return !(saveItems.value.add?.length + saveItems.value.remove?.length);
    });
   
    const onSearch = async (value) => {
        data.searchStr = value;

        getUsers();
    };

    const onChange = ({ values }) => {
        data.values = values?.length ? values : [];

        data.hasChanges = true;
        emit('edit');
    };

    const addRepresentative = async () => {
        await Promise.all(saveItems.value?.add.map(async (item) => {
            await artists.addTeamUser(props.item.id, item.code);
        }));
    };

    const removeRepresentative = async () => {
        await Promise.all(saveItems.value?.remove.map(async (item) => {
            await artists.removeTeamUser(props.item.id, item.code);
        }));
    };

    const saveChanges = () => {
        let info = '';
        let attention = '';

        if (saveItems.value?.add?.length) {
            info = `${ t('pages.artists.team.representative.confirm.add.title') }: ${ saveItems.value.add.map(item => item.name).join(', ') }`;
        }

        if (saveItems.value?.remove?.length) {
            attention = `${ t('pages.artists.team.representative.confirm.remove.title') }: ${ saveItems.value.remove.map(item => item.name).join(', ') }`;
        }

        modals.confirm({
            title: t('pages.artists.team.representative.confirm.title'),
            body: t('pages.artists.team.representative.confirm.description'),
            info,
            attention,
            onOk: async () => {
                await addRepresentative();
                await removeRepresentative();

                data.oldValues = [...data.values];

                delete data.hasChanges;
                const payload = await artists.get(props.item.id);
                emit('update', payload);


                modals.open('success', {
                    data: {
                        title: t('pages.artists.team.representative.done.title'),
                        close: t('pages.artists.team.representative.done.close')
                    },
                    quietClose: true
                });
            }
        }); 
    };

    const getUsers = async () => {
        const params = {};
        if (data.searchStr?.toLowerCase().trim()) {
            params.firstName = data.searchStr?.toLowerCase().trim();
        }

        const payload = await api.users().list(params);

        if (!payload?.items?.length) {
            return;
        }

        data.users = payload?.items.map(item => ({
            code: item.id,
            name: item.firstName,
            userName: item.userName,
            profileImage: item.profileImage
        }));
    };

    const getValues = async () => {
        if (!props.item?.id) {
            return
        }
        const payload = await artists.team(props.item.id);

        if (!payload?.items?.length) {
            return;
        }

        data.values = payload?.items.map(item => ({
            code: item.user.id,
            name: item.user.firstName,
            userName: item.user.userName,
            profileImage: item.user.profileImage
        })) || [];

        data.oldValues = [...data.values];
    };

    onMounted(async () => {
        await getValues();
        await getUsers();

        await delay(200);
        data.loading = false;

        delete data.hasChanges;
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (!data.loading)
      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$4, [
          createBaseVNode("label", _hoisted_2$4, toDisplayString(unref(t)(`pages.artists.team.title`)), 1),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("label", null, toDisplayString(unref(t)('pages.artists.team.representative.title')), 1),
            createVNode(AutoComplete, {
              placeholder: unref(t)('pages.artists.team.representative.title'),
              optionList: data.users,
              values: data.values,
              disabled: !unref(user).isArtistCurator,
              class: "noerror light",
              onSearch: onSearch,
              onChange: onChange
            }, {
              option: withCtx(({ option }) => [
                createBaseVNode("span", _hoisted_4, [
                  (option.profileImage?.resized)
                    ? (openBlock(), createBlock(Img, {
                        key: 0,
                        preview: option.profileImage?.resized,
                        original: option.profileImage?.original,
                        alt: option?.name
                      }, null, 8, ["preview", "original", "alt"]))
                    : createCommentVNode("", true),
                  createBaseVNode("span", _hoisted_5, toDisplayString(option.name), 1),
                  createBaseVNode("span", _hoisted_6, "@" + toDisplayString(option.userName), 1)
                ])
              ]),
              value: withCtx(({ value }) => [
                createBaseVNode("span", _hoisted_7, [
                  (value.profileImage?.resized)
                    ? (openBlock(), createBlock(Img, {
                        key: 0,
                        preview: value.profileImage?.resized,
                        original: value.profileImage?.original,
                        alt: value?.name
                      }, null, 8, ["preview", "original", "alt"]))
                    : createCommentVNode("", true),
                  createBaseVNode("span", null, [
                    createBaseVNode("span", _hoisted_8, toDisplayString(value.name), 1),
                    createBaseVNode("span", _hoisted_9, "@" + toDisplayString(value.userName), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["placeholder", "optionList", "values", "disabled"])
          ]),
          (openBlock(), createBlock(Teleport, { to: "#item-head-buttons" }, [
            createVNode(Button, {
              name: unref(t)(`pages.artists.edit.save`),
              class: "size-s secondary",
              disabled: saveDisabled.value || !unref(user).isArtistCurator,
              onClick: saveChanges
            }, null, 8, ["name", "disabled"])
          ]))
        ], 512)), [
          [vShow, !data.updating]
        ])
      : createCommentVNode("", true),
    (data.loading || data.updating)
      ? (openBlock(), createElementBlock("div", _hoisted_10, [
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
const ArtistTeam = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-c5f6146d"]]);

const _hoisted_1$3 = { class: "collab-invites-list" };
const _hoisted_2$3 = { class: "role" };

    
const _sfc_main$3 = {
  __name: 'CollabInvitesTracks',
  props: {
        artist: { type: [Object, null], default: null },
        state: { type: String, default: 'PENDING' },
    },
  emits: ['total'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const modals = stores.modals();

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        items: [],
        loading: false,
        skip: 0,
        take: 30,
        total: 0,
        filters: {},
        rolesByCode: {}
    });

    TRACK_CONTRIBUTOR_ROLES.forEach(item => data.rolesByCode[item.code] = item.name);

    const getItems = async () => {
        data.loading = true;

        if (!data.skip) {
            data.items = [];
        }

        let params = {
            skip: data.skip,
            take: data.take
        };

        if (props.artist?.id) {
            params.artistId = props.artist?.id;
        }

        if (props.state) {
            params.state = props.state;
        }

        const payload = await api.tracks().contributors.list(params) || [];

        setTimeout(() => {
            if (payload?.items?.length) {
                data.items.splice(data.items.length, 0, ...payload.items);
            }

            data.skip = data.items.length;
            data.total = payload?.total || 0;

            // emit('total', data.total);

            data.loading = false;
        }, 200);
    };

    const decreaseTotal = () => {
        data.skip -= 1;
        data.total -= 1;
        emit('total', data.total);
    };

    const reload = () => {
        data.skip = 0;
        getItems();
    };

    const reject = async (item) => {
        modals.confirm({
            title: t(`pages.artists.collab-invites.tracks.reject.confirm.title`),
            body: t(`pages.artists.collab-invites.tracks.reject.confirm.description`, {
                title: item.track.title,
                role: t(data.rolesByCode[item.role])
            }),
            onOk: async () => {
                await api.tracks().contributors.changeState(item.id, 'REJECTED');
                
                item.state = 'REJECTED';

                decreaseTotal();
                
                modals.open('reject', {
                    data: {
                        title: t(`pages.artists.collab-invites.tracks.reject.done.title`, {
                            title: item.track.title,
                            role: t(data.rolesByCode[item.role])
                        }),
                        close: t(`pages.artists.collab-invites.tracks.reject.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    const confirm = async (item) => {
        modals.confirm({
            title: t(`pages.artists.collab-invites.tracks.confirm.confirm.title`),
            body: t(`pages.artists.collab-invites.tracks.confirm.confirm.description`, {
                title: item.track.title,
                role: t(data.rolesByCode[item.role])
            }),
            onOk: async () => {
                await api.tracks().contributors.changeState(item.id, 'CONFIRMED');
                
                item.state = 'CONFIRMED';

                decreaseTotal();

                modals.open('success', {
                    data: {
                        title: t(`pages.artists.collab-invites.tracks.confirm.done.title`, {
                            title: item.track.title,
                            role: t(data.rolesByCode[item.role])
                        }),
                        close: t(`pages.artists.collab-invites.tracks.confirm.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    watch(
        () => props.state,
        () => {
            reload();
        }
    );

    onMounted(() => {
        getItems();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item) => {
        return (openBlock(), createElementBlock("li", null, [
          createVNode(TrackPreview, {
            item: item.track
          }, null, 8, ["item"]),
          createBaseVNode("label", _hoisted_2$3, [
            createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.collab-invites.role`)), 1),
            createBaseVNode("span", null, toDisplayString(unref(t)(data.rolesByCode[item.role])), 1)
          ]),
          (item.state)
            ? (openBlock(), createBlock(IconState, {
                key: 0,
                state: item.state
              }, null, 8, ["state"]))
            : createCommentVNode("", true),
          (item.state !== 'REJECTED')
            ? (openBlock(), createBlock(Button, {
                key: 1,
                name: unref(t)('pages.artists.collab-invites.reject.title'),
                class: "size-s secondary",
                disabled: item.state === 'CONFIRMED' && item.role === 'PRIMARY',
                onClick: $event => (reject(item))
              }, null, 8, ["name", "disabled", "onClick"]))
            : createCommentVNode("", true),
          (item.state !== 'CONFIRMED')
            ? (openBlock(), createBlock(Button, {
                key: 2,
                name: unref(t)('pages.artists.collab-invites.confirm.title'),
                class: "size-s",
                onClick: $event => (confirm(item))
              }, null, 8, ["name", "onClick"]))
            : createCommentVNode("", true)
        ]))
      }), 256))
    ]),
    createVNode(LoadMore, {
      loading: data.loading,
      values: data.items,
      total: data.total,
      take: data.take,
      pluralization: "collab",
      onClick: getItems
    }, null, 8, ["loading", "values", "total", "take"]),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 0,
          class: "empty",
          title: unref(t)(`pages.artists.collab-invites.tracks.empty.title`),
          description: unref(t)(`pages.artists.collab-invites.tracks.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const CollabInvitesTracks = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-755d16a8"]]);

const _hoisted_1$2 = { class: "collab-invites-list" };
const _hoisted_2$2 = { class: "role" };

    
const _sfc_main$2 = {
  __name: 'CollabInvitesReleases',
  props: {
        artist: { type: [Object, null], default: null },
        state: { type: String, default: 'PENDING' },
    },
  emits: ['total'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const modals = stores.modals();

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        items: [],
        loading: false,
        skip: 0,
        take: 30,
        total: 0,
        filters: {},
        rolesByCode: {}
    });

    RELEASE_CONTRIBUTOR_ROLES.forEach(item => data.rolesByCode[item.code] = item.name);

    const getItems = async () => {
        data.loading = true;

        if (!data.skip) {
            data.items = [];
        }

        let params = {
            skip: data.skip,
            take: data.take
        };

        if (props.artist?.id) {
            params.artistId = props.artist?.id;
        }

        if (props.state) {
            params.state = props.state;
        }

        const payload = await api.releases().contributors.list(params) || [];

        setTimeout(() => {
            if (payload?.items?.length) {
                data.items.splice(data.items.length, 0, ...payload.items);
            }

            data.skip = data.items.length;
            data.total = payload?.total || 0;

            // emit('total', data.total);

            data.loading = false;
        }, 200);
    };

    const decreaseTotal = () => {
        data.skip -= 1;
        data.total -= 1;
        emit('total', data.total);
    };

    const reload = () => {
        data.skip = 0;
        getItems();
    };

    const reject = async (item) => {
        modals.confirm({
            title: t(`pages.artists.collab-invites.releases.reject.confirm.title`),
            body: t(`pages.artists.collab-invites.releases.reject.confirm.description`, {
                title: item.release.title,
                role: t(data.rolesByCode[item.role])
            }),
            onOk: async () => {
                await api.releases().contributors.changeState(item.id, 'REJECTED');
                
                item.state = 'REJECTED';                
                decreaseTotal();
                
                modals.open('reject', {
                    data: {
                        title: t(`pages.artists.collab-invites.releases.reject.done.title`, {
                            title: item.release.title,
                            role: t(data.rolesByCode[item.role])
                        }),
                        close: t(`pages.artists.collab-invites.releases.reject.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    const confirm = async (item) => {
        modals.confirm({
            title: t(`pages.artists.collab-invites.releases.confirm.confirm.title`),
            body: t(`pages.artists.collab-invites.releases.confirm.confirm.description`, {
                title: item.release.title,
                role: t(data.rolesByCode[item.role])
            }),
            onOk: async () => {
                await api.releases().contributors.changeState(item.id, 'CONFIRMED');
                
                item.state = 'CONFIRMED';                
                decreaseTotal();
                
                modals.open('success', {
                    data: {
                        title: t(`pages.artists.collab-invites.releases.confirm.done.title`, {
                            title: item.release.title,
                            role: t(data.rolesByCode[item.role])
                        }),
                        close: t(`pages.artists.collab-invites.releases.confirm.done.close`)
                    },
                    quietClose: true
                });
            }
        }); 
    };

    watch(
        () => props.state,
        () => {
            reload();
        }
    );

    onMounted(() => {
        getItems();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item) => {
        return (openBlock(), createElementBlock("li", null, [
          createVNode(ReleasePreview, {
            item: item.release,
            row: true
          }, null, 8, ["item"]),
          createBaseVNode("label", _hoisted_2$2, [
            createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.collab-invites.role`)), 1),
            createBaseVNode("span", null, toDisplayString(unref(t)(data.rolesByCode[item.role])), 1)
          ]),
          (item.state)
            ? (openBlock(), createBlock(IconState, {
                key: 0,
                state: item.state
              }, null, 8, ["state"]))
            : createCommentVNode("", true),
          (item.state !== 'REJECTED')
            ? (openBlock(), createBlock(Button, {
                key: 1,
                name: unref(t)('pages.artists.collab-invites.reject.title'),
                class: "size-s secondary",
                disabled: item.state === 'CONFIRMED' && item.role === 'PRIMARY',
                onClick: $event => (reject(item))
              }, null, 8, ["name", "disabled", "onClick"]))
            : createCommentVNode("", true),
          (item.state !== 'CONFIRMED')
            ? (openBlock(), createBlock(Button, {
                key: 2,
                name: unref(t)('pages.artists.collab-invites.confirm.title'),
                class: "size-s",
                onClick: $event => (confirm(item))
              }, null, 8, ["name", "onClick"]))
            : createCommentVNode("", true)
        ]))
      }), 256))
    ]),
    createVNode(LoadMore, {
      loading: data.loading,
      values: data.items,
      total: data.total,
      take: data.take,
      pluralization: "collab",
      onClick: getItems
    }, null, 8, ["loading", "values", "total", "take"]),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 0,
          class: "empty",
          title: unref(t)(`pages.artists.collab-invites.releases.empty.title`),
          description: unref(t)(`pages.artists.collab-invites.releases.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const CollabInvitesReleases = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-df89557e"]]);

const _hoisted_1$1 = {
  key: 0,
  class: "artist-collab-invites"
};
const _hoisted_2$1 = { class: "title" };
const _hoisted_3 = { class: "head" };

    
const _sfc_main$1 = {
  __name: 'ArtistCollabInvites',
  props: {
        item: { type: [Object, null], default: null }
    },
  emits: ['total'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    api.artists();

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
        state: 'PENDING',
        states: ['PENDING', 'CONFIRMED', 'REJECTED'],
        sections: [
            {
                code: 'releases',
                name: 'pages.artists.collab-invites.releases.title',
                total: 0
            },
            {
                code: 'tracks',
                name: 'pages.artists.collab-invites.tracks.title',
                total: 0
            }
        ],
        section: 'releases'
    });

    const canEditTracksContributorState = computed(() => {
        if (!props.item?.id) {
            return false;
        }

        return api.tracks().canEditContributorState({
            artist: props.item
        })
    });

    const canEditReleasesContributorState = computed(() => {
        if (!props.item?.id) {
            return false;
        }

        return api.releases().canEditContributorState({
            artist: props.item
        })
    });

    const setTotal = (code, total) => {
        const item = data.sections.find(item => item.code === code);

        if (!item) {
            return;
        }

        item.total = total || 0;

        emit('total', data.sections.reduce((total, item) => total += item.total, 0));
    };

    const setSection = (section) => {
        data.section = section;
    };

    const setState = (state) => {
        data.state = state;
        getTotal();
    };

    const getTotal = async () => {
        let params = {
            skip: 0,
            take: 1
        };

        if (props.item?.id) {
            params.artistId = props.item?.id;
        }

        if (data.state) {
            params.state = data.state;
        }

        // Releases
        let payload = await api.releases().contributors.list(params) || [];
        setTotal('releases', payload?.total || 0);

        // Tracks
        payload = await api.tracks().contributors.list(params) || [];
        setTotal('tracks', payload?.total || 0);
    };

    onMounted(() => {
        getTotal();
    });

return (_ctx, _cache) => {
  return (!data.loading)
    ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(t)(`pages.artists.collab-invites.title`)), 1),
        createBaseVNode("div", _hoisted_3, [
          createVNode(Menu, {
            items: data.sections,
            code: data.section,
            onChange: setSection
          }, null, 8, ["items", "code"]),
          createVNode(_sfc_main$c, {
            to: false,
            invert: false,
            state: data.state,
            states: data.states,
            onChange: setState
          }, null, 8, ["state", "states"])
        ]),
        (data.section === 'releases' && canEditReleasesContributorState.value)
          ? (openBlock(), createBlock(CollabInvitesReleases, {
              key: 0,
              artist: props.item,
              state: data.state,
              onTotal: _cache[0] || (_cache[0] = $event => (setTotal('releases', $event)))
            }, null, 8, ["artist", "state"]))
          : createCommentVNode("", true),
        (data.section === 'tracks' && canEditTracksContributorState.value)
          ? (openBlock(), createBlock(CollabInvitesTracks, {
              key: 1,
              artist: props.item,
              state: data.state,
              onTotal: _cache[1] || (_cache[1] = $event => (setTotal('tracks', $event)))
            }, null, 8, ["artist", "state"]))
          : createCommentVNode("", true)
      ], 512)), [
        [vShow, !data.updating]
      ])
    : createCommentVNode("", true)
}
}

};
const ArtistCollabInvites = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-ae03c488"]]);

const _hoisted_1 = { class: "box" };
const _hoisted_2 = {
  key: 1,
  class: "item-detail"
};
    
const _sfc_main = {
  __name: 'Artists',
  setup(__props) {

    const user = stores.user();
    const modals = stores.modals();
    const locale = stores.locale();

    const { t } = useI18n();

    const releases = ref(null);
    const tracks = ref(null);
    const artists = ref(null);
    const trackEditor = ref(null);
    const licenseTrackEditor = ref(null);
    const releaseEditor = ref(null);

    const data = reactive({
        states: [],
        section: 'info',
        stateOpened: false,
        item: null,
        trackEditorMode: false,
        licenseTrackEditorMode: false,
        editorTracks: null,
        selectedTracks: null,
        releaseEditorMode: false,
        editorReleases: null,
        selectedReleases: null,
        total: {
            'collab-invites': 0    
        }
    });

    // Permitions
        const canAdd = computed(() => {
            return api.artists().canAdd({
                artist: { id: data.item }
            })
        });

        const canEdit = computed(() => {
            if (!data.item?.id) {
                return false;
            }

            return api.artists().canEdit({
                artist: data.item
            })
        });

        const canEditTeam = computed(() => {
            if (!data.item?.id) {
                return false;
            }

            return api.artists().canEditTeam({
                artist: data.item
            })
        });

        const canRemove = computed(() => {
            if (!data.item) {
                return false;
            }

            return api.artists().canRemove({
                artist: { id: data.item }
            })
        });

        const canEditContributorState = computed(() => {
            if (!data.item?.id) {
                return false;
            }

            return api.tracks().canEditContributorState({
                artist: data.item
            }) || api.releases().canEditContributorState({
                artist: data.item
            })
        });
        

    const setSection = (section) => {
        checkUnsaved(() => {
            data.editorReleases = null;
            data.editorTracks = null;
            data.selectedTracks = null;
            data.selectedReleases = null;

            data.section = section;
        });
    };

    const close = () => {
        checkUnsaved(() => {
            data.item = null;
            data.section = 'info';
            data.states = [];
            data.editorReleases = null;
            data.editorTracks = null;
            data.selectedTracks = null;
            data.selectedReleases = null;
        });
    };

    const onSelectItem = (item) => {
        checkUnsaved(() => {
            close();

            setTimeout(() => {
                data.item = item?.id ? item : null;
                getStates();
                getTotal();
            });
        });
    };

    // Total
        const getTotal = async () => {
            data.total['collab-invites'] = 0;

            let params = {
                skip: 0,
                take: 1
            };

            if (data.item?.id) {
                params.artistId = data.item?.id;
            }

            params.state = 'PENDING';

            // Tracks
            let payload = await api.tracks().contributors.list(params) || [];
            data.total['collab-invites'] += payload?.total || 0;

            payload = await api.releases().contributors.list(params) || [];
            data.total['collab-invites'] += payload?.total || 0;
        };

    // Artist
        const add = () => {
            checkUnsaved(() => {
                close();

                setTimeout(() => {
                    data.item = {};
                });
            });
        };

        const getStates = async () => {
            data.states = await api.artists().getAvailableStates(data.item?.id) || [];
        };

        const changeState = async (state) => {
            modals.confirm({
                title: t(`pages.artists.state.confirm.title`),
                body: t(`pages.artists.state.confirm.description`, {
                    name: t(`state.default.code.${ state.toLowerCase() }`)
                }),
                onOk: async () => {
                    const payload = await api.artists().changeState(data.item?.id, state);

                    data.item.state = payload?.state;
                    getStates();

                    modals.open('success', {
                        data: {
                            title: t(`pages.artists.state.done.title`),
                            close: t(`pages.artists.state.done.close`)
                        },
                        quietClose: true
                    });
                }
            }); 
        };

        const remove = async () => {
            if (!data.item?.id) {
                return;
            }

            modals.confirm({
                title: t(`pages.artists.remove.confirm.title`),
                body: t(`pages.artists.remove.confirm.description`, { name: data.item?.name }),
                onOk: async () => {
                    await api.artists().remove(data.item?.id);

                    modals.open('success', {
                        data: {
                            title: t(`pages.artists.remove.done.title`),
                            close: t(`pages.artists.remove.done.close`)
                        },
                        quietClose: true
                    });
                    artists.value.remove(data.item?.id);

                    delete data.hasChanges;

                    close();
                }
            }); 
        };

        const checkUnsaved = async (callback) => {
            if (data.hasChanges) {
                modals.confirm({
                    title: t(`pages.artists.unsaved.confirm.title`),
                    body: t(`pages.artists.unsaved.confirm.description`),
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
            artists.value.update(payload);
            data.item = payload;

            delete data.hasChanges;
        };

        const onEdit = () => {
            data.hasChanges = true;
        };

        const onAdd = (payload) => {
            artists.value.add(payload);
            data.item = payload;

            delete data.hasChanges;
        };

    // Tracks
        const onSelectTracks = (tracks) => {
            data.selectedTracks = tracks?.length ? tracks : null;
        };

        const addTracks = (count) => {
            data.editorTracks = [];
            data.trackEditorMode = true;

            // 
            setTimeout(() => {
                trackEditor.value?.create(count || 1);
            });
        };

        const editTracks = (tracks) => {
            data.editorTracks = tracks;
            data.trackEditorMode = true;
        };

        const closeTrackEditorMode = () => {
            data.trackEditorMode = false;
        };
            // Events
            const onAddTrack = (track) => {
                if (track?.id && tracks?.value) {
                    tracks.value.addItem(track);
                }
            };

            const onRemoveTrack = (id) => {
                if (id && tracks?.value) {
                    tracks.value.removeItems([{ id }], true);
                }
            };

            const onUpdateTrack = (track) => {
                if (track?.id && tracks?.value) {
                    tracks.value.updateItem(track);
                }
            };

        const editTracksLicenses = (tracks) => {
            data.editorTracks = tracks;
            data.licenseTrackEditorMode = true;
        };

        const closeLicenseTrackEditorMode = () => {
            data.licenseTrackEditorMode = false;
        };

    // Releases
        const onSelectReleases = (releases) => {
            data.selectedReleases = releases?.length ? releases : null;
        };

        const addReleases = (count) => {
            data.editorTracks = [];
            data.editorReleases = [];
            data.releaseEditorMode = true;

            // 
            setTimeout(() => {
                releaseEditor.value?.create(count || 1);
            });
        };

        const editReleases = (releases) => {
            data.editorReleases = releases;
            data.releaseEditorMode = true;
        };

        const editReleaseTracks = async (release) => {
            const payload = await api.releases().tracks.list(release.id);

            data.editorTracks = payload?.items || [];
            data.editorReleases = [...(data.selectedReleases || [])];
            data.trackEditorMode = true;
        };

        const editReleaseTracksLicenses = async (release) => {
            const payload = await api.releases().tracks.list(release.id);

            data.editorTracks = payload?.items || [];
            data.editorReleases = [...(data.selectedReleases || [])];
            data.licenseTrackEditorMode = true;
        };

        const closeReleaseEditorMode = () => {
            data.releaseEditorMode = false;
        };
            // Events
            const onAddRelease = (release) => {
                if (release?.id) {
                    releases.value.addItem(release);
                }
            };

            const onRemoveRelease = (id) => {
                if (id) {
                    releases.value.removeItems([{ id }], true);
                }
            };

            const onUpdateRelease = (release) => {
                if (release?.id) {
                    releases.value.updateItem(release);
                }
            };

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    withDirectives(createVNode(PageHeader, {
      title: unref(t)(`pages.artists.title`),
      detail: !!data.item && data.section !== 'collab-invites',
      secondary: !!data.selectedTracks?.length || !!data.selectedReleases?.length,
      id: "item-head-buttons"
    }, createSlots({
      default: withCtx(() => [
        (!data.item && canAdd.value)
          ? (openBlock(), createBlock(Button, {
              key: 0,
              icon: "plus",
              class: "size-s",
              name: unref(t)(`pages.artists.add.title`),
              onClick: add
            }, null, 8, ["name"]))
          : createCommentVNode("", true),
        (data.item && ['info', 'metadata', 'team'].indexOf(data.section) !== -1)
          ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              (data.item?.id && canEdit.value)
                ? (openBlock(), createBlock(_sfc_main$c, {
                    key: 0,
                    state: data.item?.state,
                    states: data.states,
                    onChange: changeState
                  }, null, 8, ["state", "states"]))
                : createCommentVNode("", true),
              (data.item?.id)
                ? (openBlock(), createBlock(_sfc_main$d, {
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
                              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.remove.title`)), 1)
                            ]))
                          : createCommentVNode("", true),
                        createBaseVNode("li", { onClick: close }, [
                          createVNode(_component_Icon, { icon: "close" }),
                          createBaseVNode("span", null, toDisplayString(unref(t)(`pages.artists.cancel`)), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["leftAuto", "rightAuto"]))
                : createCommentVNode("", true)
            ], 64))
          : createCommentVNode("", true)
      ]),
      _: 2
    }, [
      (data.item)
        ? {
            name: "title",
            fn: withCtx(() => [
              createVNode(IconButton, {
                icon: "arrow-left",
                onClick: close,
                class: "size-l tertiary rtl-sensitive",
                name: unref(t)(`pages.artists.cancel`)
              }, null, 8, ["name"]),
              createVNode(PageHeaderArtistTitle, {
                artist: data.item
              }, null, 8, ["artist"])
            ]),
            key: "0"
          }
        : undefined
    ]), 1032, ["title", "detail", "secondary"]), [
      [vShow, !data.trackEditorMode && !data.releaseEditorMode && !data.licenseTrackEditorMode]
    ]),
    withDirectives(createBaseVNode("div", _hoisted_1, [
      withDirectives(createVNode(Artists$1, {
        id: data.item?.id,
        sort: unref(ARTISTS_SORT),
        filters: unref(ARTISTS_FILTERS),
        endpoint: unref(user).isArtistCurator ? 'all' : 'my-artists' ,
        ref_key: "artists",
        ref: artists,
        onChange: onSelectItem
      }, null, 8, ["id", "sort", "filters", "endpoint"]), [
        [vShow, !data.item]
      ]),
      (data.item)
        ? (openBlock(), createBlock(ArtistMenu, {
            key: 0,
            code: data.section,
            item: data.item,
            total: data.total,
            onChange: setSection
          }, null, 8, ["code", "item", "total"]))
        : createCommentVNode("", true),
      (data.item)
        ? (openBlock(), createElementBlock("div", _hoisted_2, [
            (data.section === 'info')
              ? (openBlock(), createBlock(ArtistInfo, {
                  key: 0,
                  item: data.item,
                  onAdd: onAdd,
                  onUpdate: onUpdate,
                  onEdit: onEdit
                }, null, 8, ["item"]))
              : createCommentVNode("", true),
            (data.section === 'metadata')
              ? (openBlock(), createBlock(ArtistMetadata, {
                  key: 1,
                  item: data.item,
                  onUpdate: onUpdate,
                  onEdit: onEdit
                }, null, 8, ["item"]))
              : createCommentVNode("", true),
            (data.section === 'team' && canEditTeam.value)
              ? (openBlock(), createBlock(ArtistTeam, {
                  key: 2,
                  item: data.item,
                  onUpdate: onUpdate,
                  onEdit: onEdit
                }, null, 8, ["item"]))
              : createCommentVNode("", true),
            (data.section === 'tracks')
              ? (openBlock(), createBlock(Tracks, {
                  key: 3,
                  artist: data.item,
                  onSelect: onSelectTracks,
                  onAdd: addTracks,
                  onEdit: editTracks,
                  onLicenses: editTracksLicenses,
                  ref_key: "tracks",
                  ref: tracks
                }, null, 8, ["artist"]))
              : createCommentVNode("", true),
            (data.section === 'releases')
              ? (openBlock(), createBlock(Releases, {
                  key: 4,
                  artist: data.item,
                  onSelect: onSelectReleases,
                  onAdd: addReleases,
                  onEdit: editReleases,
                  onEditTracks: editReleaseTracks,
                  onEditTracksLicenses: editReleaseTracksLicenses,
                  ref_key: "releases",
                  ref: releases
                }, null, 8, ["artist"]))
              : createCommentVNode("", true),
            (data.section === 'collab-invites' && canEditContributorState.value)
              ? (openBlock(), createBlock(ArtistCollabInvites, {
                  key: 5,
                  item: data.item,
                  onTotal: _cache[0] || (_cache[0] = $event => {data.total['collab-invites'] = $event;})
                }, null, 8, ["item"]))
              : createCommentVNode("", true)
          ]))
        : createCommentVNode("", true)
    ], 512), [
      [vShow, !data.trackEditorMode && !data.releaseEditorMode && !data.licenseTrackEditorMode]
    ]),
    (data.releaseEditorMode)
      ? (openBlock(), createBlock(ReleaseEditor, {
          key: 0,
          artist: data.item,
          items: data.editorReleases,
          ref_key: "releaseEditor",
          ref: releaseEditor,
          onRemove: onRemoveRelease,
          onUpdate: onUpdateRelease,
          onAdd: onAddRelease,
          onClose: closeReleaseEditorMode
        }, null, 8, ["artist", "items"]))
      : createCommentVNode("", true),
    (data.trackEditorMode)
      ? (openBlock(), createBlock(TrackEditor, {
          key: 1,
          artist: data.item,
          release: data.editorReleases?.length ? data.editorReleases[0] : null,
          items: data.editorTracks,
          ref_key: "trackEditor",
          ref: trackEditor,
          onRemove: onRemoveTrack,
          onUpdate: onUpdateTrack,
          onAdd: onAddTrack,
          onClose: closeTrackEditorMode
        }, null, 8, ["artist", "release", "items"]))
      : createCommentVNode("", true),
    (data.licenseTrackEditorMode)
      ? (openBlock(), createBlock(LicenseTrackEditor, {
          key: 2,
          artist: data.item,
          release: data.editorReleases?.length ? data.editorReleases[0] : null,
          items: data.editorTracks,
          ref_key: "licenseTrackEditor",
          ref: licenseTrackEditor,
          onClose: closeLicenseTrackEditorMode
        }, null, 8, ["artist", "release", "items"]))
      : createCommentVNode("", true)
  ], 64))
}
}

};
const Artists = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-e1f71940"]]);

export { Artists as default };
//# sourceMappingURL=Artists-Brdbckw-.js.map
