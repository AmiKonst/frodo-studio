import { P as hooks, i as api, _ as _export_sfc, a as useI18n, r as reactive, j as onMounted, b as createElementBlock, o as openBlock, h as createBaseVNode, e as createCommentVNode, c as createBlock, g as createVNode, u as unref, k as Field, Q as Filters, S as _sfc_main$2, F as Fragment, d as renderList, n as normalizeClass, H as Img, t as toDisplayString, D as Button, E as EmptyLabel } from './index-D4RMqZs5.js';
import { P as PageHeader } from './PageHeader-BEgsLcfl.js';

const USERS_FILTERS = [
    {
        code: "userName",
        type: "string",
        name: 'filter.users.default.username'
    }, {
        code: "created_date",
        type: "date",
        range: true,
        name: 'filter.users.default.created-date',
        formatter: (values) => {
            if (values?.length !== 2) {
                return {};
            }
            return {
                created_date_lte: hooks(values[1]).toISOString(),
                created_date_gte: hooks(values[0]).toISOString()
            };
        }
    }, {
        code: "roles",
        type: "autocomplete",
        multiple: true,
        name: 'filter.users.default.roles',
        options: [],
        onSearch: async (searchStr) => {
            return await api.roles().list({
                title: searchStr,
                skip: 0,
                take: 20
            });
        }
    }
];

const USERS_SORT = [
    {
        icon: 'sort-a-z',
        code: 'firstName',
        direction: 'asc',
        name: 'sort.users.default.first_name'
    }, {
        icon: 'sort-a-z',
        code: 'userName',
        direction: 'asc',
        name: 'sort.users.default.username'
    }, {
        icon: 'calendar',
        code: 'createdDate',
        direction: 'desc',
        name: 'sort.default.created_date'
    }, {
        icon: 'sort-9-1',
        code: 'tracksCount',
        direction: 'asc',
        name: 'sort.default.tracks_count'
    }
];

const _hoisted_1$1 = { class: "items-list" };
const _hoisted_2$1 = { class: "filters" };
const _hoisted_3 = {
  key: 0,
  class: "items"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "user-value-preview" };
const _hoisted_6 = { class: "name" };
const _hoisted_7 = { class: "username" };

    
const _sfc_main$1 = {
  __name: 'Users',
  props: {
        title: { type: String, default: '' },
        sort: { type: Array, default: () => ([]) },
        filters: { type: Array, default: () => ([]) },
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
        total: 0,
        sort: null,
        searchStr: null,
        filters: {},
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
            params.firstName = data.searchStr.toLowerCase().trim();
        }

        if (data.filters && Object.keys(data.filters)?.length) {
            params = { ...data.filters, ...params };
        }

        const payload = await api.users().list(params) || [];

        setTimeout(() => {
            if (payload?.items?.length) {
                data.items.splice(data.items.length, 0, ...payload.items);
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

    const updateItem = (item) => {
        console.log(item);
    };

    __expose({
        reload,
        updateItem
    });

    onMounted(() => {
        getItems();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createVNode(Field, {
        icon: "search",
        placeholder: unref(t)('blocks.users.search'),
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
        ? (openBlock(), createBlock(_sfc_main$2, {
            key: 1,
            sort: props.sort,
            code: data.sort?.code,
            onChange: setSort
          }, null, 8, ["sort", "code"]))
        : createCommentVNode("", true)
    ]),
    (data.items.length)
      ? (openBlock(), createElementBlock("ul", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
            return (openBlock(), createElementBlock("li", {
              class: normalizeClass({ active: props.id === item.id }),
              onClick: $event => (emit('change', item))
            }, [
              createBaseVNode("span", _hoisted_5, [
                (item.profileImage?.resized)
                  ? (openBlock(), createBlock(Img, {
                      key: 0,
                      preview: item.profileImage?.resized,
                      original: item.profileImage?.original,
                      alt: item?.firstName
                    }, null, 8, ["preview", "original", "alt"]))
                  : createCommentVNode("", true),
                createBaseVNode("span", null, [
                  createBaseVNode("span", _hoisted_6, toDisplayString(item.firstName), 1),
                  createBaseVNode("span", _hoisted_7, "@" + toDisplayString(item.userName), 1)
                ])
              ])
            ], 10, _hoisted_4))
          }), 256))
        ]))
      : createCommentVNode("", true),
    (data.loading || (data.items.length < data.total))
      ? (openBlock(), createBlock(Button, {
          key: 1,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)('blocks.roles.load'),
          onClick: getItems
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 2,
          class: "empty",
          title: unref(t)(`pages.users.empty.title`),
          description: unref(t)(`pages.users.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const Users$1 = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-6d5d2a40"]]);

const _hoisted_1 = { class: "box" };
const _hoisted_2 = {
  key: 0,
  class: "user-detail"
};

    
const _sfc_main = {
  __name: 'Users',
  setup(__props) {

    const { t } = useI18n();

    const data = reactive({
        user: null
    });

    const onSelectUser = (user) => {
        data.user = null;
        setTimeout(() => {
            data.user = user?.code ? user : null;
        });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(PageHeader, {
      title: unref(t)('pages.users.title')
    }, null, 8, ["title"]),
    createBaseVNode("div", _hoisted_1, [
      createVNode(Users$1, {
        id: data.user?.code,
        onChange: onSelectUser,
        sort: unref(USERS_SORT),
        filters: unref(USERS_FILTERS)
      }, null, 8, ["id", "sort", "filters"]),
      (data.user?.code)
        ? (openBlock(), createElementBlock("div", _hoisted_2))
        : createCommentVNode("", true)
    ])
  ], 64))
}
}

};
const Users = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-809bcfa0"]]);

export { Users as default };
//# sourceMappingURL=Users-DefziIDL.js.map
