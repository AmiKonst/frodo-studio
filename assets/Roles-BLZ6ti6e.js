import { _ as _export_sfc, a as useI18n, r as reactive, j as onMounted, b as createElementBlock, o as openBlock, h as createBaseVNode, c as createBlock, e as createCommentVNode, F as Fragment, d as renderList, w as withDirectives, v as vShow, n as normalizeClass, t as toDisplayString, u as unref, D as Button, i as api, O as withCtx, H as Img, X as mergeProps, Y as AutoComplete, s as stores, A as computed, N as delay, g as createVNode } from './index-6yNOSgKE.js';
import { P as PageHeader } from './PageHeader-5O8UU2_t.js';

const _hoisted_1$4 = { class: "roles-list" };
const _hoisted_2$4 = { class: "items" };
const _hoisted_3$2 = ["onClick"];

    
const _sfc_main$4 = {
  __name: 'Roles',
  props: {
        title: { type: String, default: '' },
        id: { type: [String, null], default: null }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const { t } = useI18n();
    const data = reactive({
        items: [],
        loading: false,
        skip: 0,
        take: 20,
        total: 0
    });

    const getRoles = async () => {
        data.loading = true;

        const roles = await api.roles().list({
            skip: data.skip,
            take: data.take
        });


        setTimeout(() => {
            data.items.splice(data.items.length, 0, ...roles);
            data.total = data.items.length;

            data.loading = false;
        }, 200);
    };

    const props = __props;

    onMounted(() => {
        getRoles();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("ul", _hoisted_2$4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
        return withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass({ active: props.id === item.code }),
          onClick: $event => (emit('change', item))
        }, [
          createBaseVNode("span", null, toDisplayString(unref(t)(`constants.roles.${ item.code }`)), 1)
        ], 10, _hoisted_3$2)), [
          [vShow, item.code !== 'user']
        ])
      }), 256))
    ]),
    (data.loading || (data.items.length < data.total))
      ? (openBlock(), createBlock(Button, {
          key: 0,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)('blocks.roles.load')
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const Roles$1 = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-4803083b"]]);

const _hoisted_1$3 = { class: "role" };
const _hoisted_2$3 = { class: "title" };

    
const _sfc_main$3 = {
  __name: 'RoleInfo',
  props: {
        role: { type: [Object, null], default: null }
    },
  setup(__props) {

    const { t } = useI18n();

    const props = __props;

    reactive({
    });

    onMounted(() => {
        console.log(props.role);
        // getRole();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("label", _hoisted_2$3, toDisplayString(unref(t)(`constants.roles.${ props.role?.code }`)), 1)
  ]))
}
}

};
const RoleInfo = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-1414fe98"]]);

const _hoisted_1$2 = { class: "user-option-preview" };
const _hoisted_2$2 = { class: "name" };
const _hoisted_3$1 = { class: "username" };
const _hoisted_4 = { class: "user-value-preview" };
const _hoisted_5 = { class: "name" };
const _hoisted_6 = { class: "username" };

    
const _sfc_main$2 = {
  __name: 'UserAutoComplete',
  props: {
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const emit = __emit;

    const props = __props;

    const data = reactive({
        optionList: []
    });

    const onAutoCompleteSearch = async (value) => {
        const searchStr = value?.toLowerCase().trim();

        const params = {
            skip: 0,
            take: 30,
            sort: 'firstName',
            sort_dir: 'asc'
        };

        if (searchStr?.trim()) {
            params.firstName = searchStr.trim().toLowerCase();
        }

        const payload = await api.users().list(params);

        if (!payload?.items) {
            data.optionList = [];
            return;
        }

        data.optionList = await payload.items.map(item => ({
            code: item.id,
            name: item.firstName,
            userName: item.userName,
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
      createBaseVNode("span", _hoisted_1$2, [
        (option.profileImage?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: option.profileImage?.resized,
              original: option.profileImage?.original,
              alt: option?.name
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("span", _hoisted_2$2, toDisplayString(option.name), 1),
        createBaseVNode("span", _hoisted_3$1, "@" + toDisplayString(option.userName), 1)
      ])
    ]),
    value: withCtx(({ value }) => [
      createBaseVNode("span", _hoisted_4, [
        (value.profileImage?.resized)
          ? (openBlock(), createBlock(Img, {
              key: 0,
              preview: value.profileImage?.resized,
              original: value.profileImage?.original,
              alt: value?.name
            }, null, 8, ["preview", "original", "alt"]))
          : createCommentVNode("", true),
        createBaseVNode("span", null, [
          createBaseVNode("span", _hoisted_5, toDisplayString(value.name), 1),
          createBaseVNode("span", _hoisted_6, "@" + toDisplayString(value.userName), 1)
        ])
      ])
    ]),
    _: 1
  }, 16, ["optionList"]))
}
}

};
const UserAutoComplete = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-c248855e"]]);

const _hoisted_1$1 = {
  key: 0,
  class: "users"
};
const _hoisted_2$1 = { class: "title" };
const _hoisted_3 = { class: "buttons" };
    
const _sfc_main$1 = {
  __name: 'Users',
  props: {
        role: { type: [Object, null], default: null }
    },
  setup(__props) {

    const modals = stores.modals();

    const { t } = useI18n();

    const props = __props;

    const data = reactive({
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

    const onChange = ({ values }) => {
        data.values = values?.length ? values : [];
    };

    const addRoles = async () => {
        await Promise.all(saveItems.value?.add.map(async (item) => {
            await api.users().addRole(item.code, props.role?.code);
        }));
    };

    const removeRoles = async () => {
        await Promise.all(saveItems.value?.remove.map(async (item) => {
            await api.users().removeRole(item.code, props.role?.code);
        }));
    };

    const saveChanges = () => {
        let info = '';
        let attention = '';

        if (saveItems.value?.add?.length) {
            info = `${ t('pages.roles.confirm.add.title') }: ${ saveItems.value.add.map(item => item.name).join(', ') }`;
        }

        if (saveItems.value?.remove?.length) {
            attention = `${ t('pages.roles.confirm.remove.title') }: ${ saveItems.value.remove.map(item => item.name).join(', ') }`;
        }

        modals.confirm({
            title: t('pages.roles.confirm.title'),
            body: t('pages.roles.confirm.description'),
            info,
            attention,
            onOk: async () => {
                await addRoles();
                await removeRoles();

                data.oldValues = [...data.values];

                modals.open('success', {
                    data: {
                        title: t('pages.roles.done.title'),
                        close: t('pages.roles.done.close')
                    },
                    quietClose: true
                });
            }
        }); 
    };

    const getValues = async () => {
        const payload = await api.users().list({
            roles: props.role?.code
        });

        if (!payload?.items?.length) {
            return;
        }

        data.values = payload?.items.map(item => ({
            code: item.id,
            name: item.firstName,
            userName: item.userName,
            profileImage: item.profileImage
        })) || [];

        data.oldValues = [...data.values];
    };

    onMounted(async () => {
        await getValues();

        await delay(200);
        data.loading = false;
    });

return (_ctx, _cache) => {
  return (!data.loading)
    ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(t)('pages.roles.users')), 1),
        createVNode(UserAutoComplete, {
          placeholder: unref(t)('pages.roles.users'),
          values: data.values,
          class: "noerror light",
          onChange: onChange
        }, null, 8, ["placeholder", "values"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(Button, {
            name: unref(t)('pages.roles.save'),
            class: "size-m",
            disabled: saveDisabled.value,
            onClick: saveChanges
          }, null, 8, ["name", "disabled"])
        ])
      ]))
    : (openBlock(), createBlock(Button, {
        key: 1,
        loading: data.loading,
        class: "tertiary size-l loader",
        name: " "
      }, null, 8, ["loading"]))
}
}

};
const Users = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-f3ad2e0a"]]);

const _hoisted_1 = { class: "box" };
const _hoisted_2 = {
  key: 0,
  class: "role-detail"
};

    
const _sfc_main = {
  __name: 'Roles',
  setup(__props) {

    const { t } = useI18n();

    const data = reactive({
        role: null
    });

    const onSelectRole = (role) => {
        data.role = null;
        setTimeout(() => {
            data.role = role?.code ? role : null;
        });
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(PageHeader, {
      title: unref(t)('pages.roles.title')
    }, {
      default: withCtx(() => [
        createVNode(Button, {
          icon: "plus",
          onClick: _cache[0] || (_cache[0] = () => {}),
          class: "size-s",
          name: unref(t)('pages.roles.add'),
          disabled: ""
        }, null, 8, ["name"])
      ]),
      _: 1
    }, 8, ["title"]),
    createBaseVNode("div", _hoisted_1, [
      createVNode(Roles$1, {
        id: data.role?.code,
        onChange: onSelectRole
      }, null, 8, ["id"]),
      (data.role?.code)
        ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(RoleInfo, {
              role: data.role
            }, null, 8, ["role"]),
            createVNode(Users, {
              role: data.role
            }, null, 8, ["role"])
          ]))
        : createCommentVNode("", true)
    ])
  ], 64))
}
}

};
const Roles = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-c6883298"]]);

export { Roles as default };
//# sourceMappingURL=Roles-BLZ6ti6e.js.map
