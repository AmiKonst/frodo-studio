import { _ as _export_sfc, a as useI18n, r as reactive, A as computed, i as api, j as onMounted, b as createElementBlock, o as openBlock, h as createBaseVNode, c as createBlock, e as createCommentVNode, F as Fragment, d as renderList, n as normalizeClass, H as Img, t as toDisplayString, u as unref, D as Button, E as EmptyLabel, s as stores, w as withDirectives, v as vShow, g as createVNode, k as Field, J as Toggler, K as Teleport, M as Loader, N as delay, G as message, f as ref, O as withCtx, I as IconButton } from './index-XTe9m7FD.js';
import { P as PageHeader } from './PageHeader-Dp58SVJr.js';
import { T as Textarea, F as FileUploader } from './FileUploader-Dr3ZJs2E.js';

const _hoisted_1$2 = { class: "items-list" };
const _hoisted_2$2 = { class: "items" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "item-preview" };

    
const _sfc_main$2 = {
  __name: 'LicenseProviders',
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

    const defaultProfileImage = computed(() => {
        return api.licenses().defaultProfileImage;
    });

    const getItems = async () => {
        data.loading = true;

        if (!data.skip) {
            data.items = [];
        }

        const payload = await api.licenses().providers.list({
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
          createBaseVNode("span", _hoisted_4$1, [
            (item.profileImage?.resized || defaultProfileImage.value?.resized)
              ? (openBlock(), createBlock(Img, {
                  key: 0,
                  preview: item.profileImage?.resized || defaultProfileImage.value?.resized,
                  original: item.profileImage?.original || defaultProfileImage.value?.original,
                  alt: item?.name
                }, null, 8, ["preview", "original", "alt"]))
              : createCommentVNode("", true),
            createBaseVNode("span", null, toDisplayString(item.name), 1)
          ])
        ], 10, _hoisted_3$1))
      }), 256))
    ]),
    (data.loading || (data.items.length < data.total))
      ? (openBlock(), createBlock(Button, {
          key: 0,
          loading: data.loading,
          class: "tertiary size-l",
          name: unref(t)('pages.licenses.providers.load'),
          onClick: getItems
        }, null, 8, ["loading", "name"]))
      : createCommentVNode("", true),
    (!data.items.length && !data.loading)
      ? (openBlock(), createBlock(EmptyLabel, {
          key: 1,
          class: "empty",
          title: unref(t)(`pages.licenses.providers.empty.title`),
          description: unref(t)(`pages.licenses.providers.empty.description`)
        }, null, 8, ["title", "description"]))
      : createCommentVNode("", true)
  ]))
}
}

};
const LicenseProviders = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-3fbd6fca"]]);

const _hoisted_1$1 = {
  key: 0,
  class: "license-provider-info"
};
const _hoisted_2$1 = { class: "title" };
const _hoisted_3 = { class: "form-line" };
const _hoisted_4 = { class: "form-line" };
const _hoisted_5 = { class: "form-line" };
const _hoisted_6 = { class: "form-line" };
const _hoisted_7 = { class: "box" };
const _hoisted_8 = { class: "attention" };
const _hoisted_9 = { class: "form-line" };
const _hoisted_10 = { class: "box" };
const _hoisted_11 = { class: "attention" };
const _hoisted_12 = { class: "form-line" };
const _hoisted_13 = { class: "attention" };
const _hoisted_14 = { class: "profile-image-preview" };
const _hoisted_15 = { class: "form-line" };
const _hoisted_16 = {
  key: 1,
  class: "loader"
};

    
const _sfc_main$1 = {
  __name: 'LicenseProviderInfo',
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
        placeholder: null,
        profileImage: {},
        newProfileImage: null,
        regExp: null,
        getParams: null,
        showed: false,
        loading: true
    });

    const saveDisabled = computed(() => {
        return !data.name?.trim().length || !data.hasChanges;
    });

    const onNameChange = (e) => {
        data.name = e.target.value?.trim();
        onEdit();
    };

    const onPlaceholderChange = (e) => {
        data.placeholder = e.target.value?.trim();
        onEdit();
    };

    const onDescriptionChange = (e) => {
        data.description = e.target.value?.trim();
        onEdit();
    };

    const onRegExpChange = (e) => {
        data.regExp = e.target.value?.trim();
        onEdit();
    };

    const onGetParamsChange = (e) => {
        data.getParams = e.target.value?.trim();
        onEdit();
    };

    const updateProfileImage = (e) => {
        if (e?.name) {
            data.newProfileImage = e;
            onEdit();
        }
    };

    const onShowedChange = (e) => {
        data.showed = !!e?.value;

        onEdit();
    };

    const onEdit = () => {
        emit('edit');
        data.hasChanges = true;
    };

    const saveChanges = async () => {
        const licenseProviderInfo = {
            name: data.name,
            description: data.description || null,
            placeholder: data.placeholder || null,
            regExp: data.regExp || null,
            getParams: data.getParams || null,
            showed: !!data.showed,
        };

        data.updating = true;

        let payload;

        if (data.id) {
            payload = await api.licenses().providers.update(data.id, licenseProviderInfo);
        } else {
            payload = await api.licenses().providers.add(licenseProviderInfo);
        }

        if (payload?.id && data.newProfileImage) {
            payload = await api.licenses().providers.updateProfileImage(payload.id, data.newProfileImage);
        }

        await delay(200);
        data.updating = false;

        if (payload?.id) {
            message.info(t(`pages.licenses.providers.${ data.id ? 'edit' : 'add' }.done.title`));
            // modals.open('success', {
            //     data: {
            //         timer: 3,
            //         title: t(`pages.licenses.providers.${ data.id ? 'edit' : 'add' }.done.title`),
            //         close: t(`pages.licenses.providers.${ data.id ? 'edit' : 'add' }.done.close`)
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
        data.profileImage = payload.profileImage || {};
        data.newProfileImage = null;

        delete data.hasChanges;
    };

    const getItem = async () => {
        data.loading = true;

        const payload = await api.licenses().providers.get(props.item.id);

        data.id = payload?.id;
        data.name = payload?.name;
        data.description = payload?.description;
        data.placeholder = payload?.placeholder;
        data.regExp = payload?.regExp;
        data.getParams = payload?.getParams;
        data.showed = !!payload?.showed;
        data.profileImage = payload?.profileImage || {};

        await delay(200);

        data.loading = false;

        delete data.hasChanges;
    };

    const remove = async () => {
        modals.confirm({
            title: t(`pages.licenses.providers.remove.confirm.title`),
            body: t(`pages.licenses.providers.remove.confirm.description`, { name: data.name }),
            onOk: async () => {
                await api.licenses().providers.remove(data.id);

                emit('remove', data.id);
                
                modals.open('success', {
                    data: {
                        title: t(`pages.licenses.providers.remove.done.title`),
                        close: t(`pages.licenses.providers.remove.done.close`)
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
          createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(t)(`pages.licenses.providers.${ props.item?.id ? 'edit' : 'add' }.title`)), 1),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.name`)), 1),
            createVNode(Field, {
              placeholder: unref(t)(`pages.licenses.providers.fields.name`),
              value: data.name,
              disabled: !unref(user).isTrackCurator,
              class: "noerror light with-placeholder",
              onChange: onNameChange
            }, null, 8, ["placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.description`)), 1),
            createVNode(Textarea, {
              placeholder: unref(t)(`pages.licenses.providers.fields.description`),
              value: data.description,
              class: "noerror light with-placeholder",
              onChange: onDescriptionChange
            }, null, 8, ["placeholder", "value"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.placeholder`)), 1),
            createVNode(Field, {
              placeholder: unref(t)(`pages.licenses.providers.fields.placeholder`),
              value: data.placeholder,
              disabled: !unref(user).isTrackCurator,
              class: "noerror light with-placeholder",
              onChange: onPlaceholderChange
            }, null, 8, ["placeholder", "value", "disabled"])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.reg-exp.name`)), 1),
            createBaseVNode("div", _hoisted_7, [
              createVNode(Field, {
                placeholder: unref(t)(`pages.licenses.providers.fields.reg-exp.name`),
                value: data.regExp,
                disabled: !unref(user).isTrackCurator,
                class: "noerror light with-placeholder",
                onChange: onRegExpChange
              }, null, 8, ["placeholder", "value", "disabled"]),
              createBaseVNode("span", _hoisted_8, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.reg-exp.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("label", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.get-params.name`)), 1),
            createBaseVNode("div", _hoisted_10, [
              createVNode(Field, {
                placeholder: unref(t)(`pages.licenses.providers.fields.get-params.name`),
                value: data.getParams,
                disabled: !unref(user).isTrackCurator,
                class: "noerror light with-placeholder",
                onChange: onGetParamsChange
              }, null, 8, ["placeholder", "value", "disabled"]),
              createBaseVNode("span", _hoisted_11, [
                createBaseVNode("span", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.get-params.subattention1`)), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("label", null, [
              createBaseVNode("span", null, toDisplayString(unref(t)(`pages.licenses.providers.fields.profile-image`)), 1),
              createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)(`pages.licenses.providers.fields.min-profile-image-size`)), 1)
            ]),
            createBaseVNode("div", _hoisted_14, [
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
                onChange: updateProfileImage
              }, null, 8, ["loading", "preview"])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createVNode(Toggler, {
              name: unref(t)(`pages.licenses.providers.fields.showed`),
              inline: true,
              checked: data.showed,
              disabled: !unref(user).isTrackCurator,
              class: "reverse solid",
              onOnClick: onShowedChange
            }, null, 8, ["name", "checked", "disabled"])
          ]),
          (openBlock(), createBlock(Teleport, { to: "#head-buttons" }, [
            (data.id)
              ? (openBlock(), createBlock(Button, {
                  key: 0,
                  icon: "trash",
                  name: unref(t)(`pages.licenses.providers.remove.title`),
                  class: "size-s tertiary invert",
                  onClick: remove
                }, null, 8, ["name"]))
              : createCommentVNode("", true),
            createVNode(Button, {
              name: unref(t)(`pages.licenses.providers.${ props.item?.id ? 'edit' : 'add' }.save`),
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
      ? (openBlock(), createElementBlock("div", _hoisted_16, [
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
const LicenseProviderInfo = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-17ffacf3"]]);

const _hoisted_1 = { class: "box" };
const _hoisted_2 = {
  key: 0,
  class: "item-detail"
};

    
const _sfc_main = {
  __name: 'Licenses',
  setup(__props) {

    const modals = stores.modals();
    const { t } = useI18n();
    const licenseProviders = ref(null);

    const data = reactive({
        item: null
    });

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
            modals.confirm({
                title: t(`pages.licenses.providers.unsaved.confirm.title`),
                body: t(`pages.licenses.providers.unsaved.confirm.description`),
                onOk: async() => {
                    delete data.hasChanges;

                    callback();
                }
            }); 
            return;
        }

        callback();
    };

    const onRemove = (id) => {
        licenseProviders.value.remove(id);
        delete data.hasChanges;
        close();
    };

    const onUpdate = (payload) => {
        licenseProviders.value.update(payload);
        data.item = payload;

        delete data.hasChanges;
    };

    const onEdit = () => {
        data.hasChanges = true;
    };

    const onAdd = (payload) => {
        licenseProviders.value.add(payload);
        data.item = payload;

        delete data.hasChanges;
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(PageHeader, {
      title: unref(t)('pages.licenses.providers.title'),
      detail: !!data.item
    }, {
      default: withCtx(() => [
        (!data.item)
          ? (openBlock(), createBlock(Button, {
              key: 0,
              icon: "plus",
              class: "size-s",
              name: unref(t)('pages.licenses.providers.add.title'),
              onClick: add
            }, null, 8, ["name"]))
          : createCommentVNode("", true),
        (data.item)
          ? (openBlock(), createBlock(IconButton, {
              key: 1,
              icon: "close",
              class: "size-s tertiary invert",
              title: unref(t)('pages.licenses.cancel'),
              onClick: close
            }, null, 8, ["title"]))
          : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["title", "detail"]),
    createBaseVNode("div", _hoisted_1, [
      createVNode(LicenseProviders, {
        id: data.item?.id,
        ref_key: "licenseProviders",
        ref: licenseProviders,
        onChange: onSelectItem
      }, null, 8, ["id"]),
      (data.item)
        ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(LicenseProviderInfo, {
              item: data.item,
              onAdd: onAdd,
              onUpdate: onUpdate,
              onRemove: onRemove,
              onEdit: onEdit
            }, null, 8, ["item"])
          ]))
        : createCommentVNode("", true)
    ])
  ], 64))
}
}

};
const Licenses = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-ff0ac156"]]);

export { Licenses as default };
//# sourceMappingURL=Licenses-lbJj_IYK.js.map
