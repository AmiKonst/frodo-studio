import { _ as _export_sfc, a as useI18n, f as ref, r as reactive, b as createElementBlock, o as openBlock, w as withDirectives, c as createBlock, e as createCommentVNode, v as vShow, g as createVNode, u as unref, h as createBaseVNode, T as Tracks$1, F as Fragment } from './index-DFUN-JeE.js';
import { P as PageHeader } from './PageHeader-weH05Po4.js';
import { T as TrackEditor } from './TrackEditor-CLeDYELw.js';
import { L as LicenseTrackEditor } from './LicenseTrackEditor-BBbfunO3.js';
import './ViewMode-FyRSJmQ_.js';
import './FileUploader-DpheBOFm.js';

const _hoisted_1 = { class: "box" };
const _hoisted_2 = { class: "item-detail" };

    
const _sfc_main = {
  __name: 'Tracks',
  setup(__props) {

    const { t } = useI18n();
    const tracks = ref(null);
    const trackEditor = ref(null);
    const licenseTrackEditor = ref(null);

    const data = reactive({
        trackEditorMode: false,
        licenseTrackEditorMode: false,
        editorTracks: null
    });

    // Tracks
    const onSelectTracks = (tracks) => {
        data.editorTracks = tracks?.length ? tracks : null;
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
            if (track?.id) {
                tracks.value.addItem(track);
            }
        };

        const onRemoveTrack = (id) => {
            if (id) {
                tracks.value.removeItems([{ id }], true);
            }
        };

        const onUpdateTrack = (track) => {
            if (track?.id) {
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

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    withDirectives(createVNode(PageHeader, {
      title: unref(t)(`pages.tracks.title`),
      detail: !!data.editorTracks?.length,
      id: "item-head-buttons"
    }, null, 8, ["title", "detail"]), [
      [vShow, !data.trackEditorMode && !data.licenseTrackEditorMode]
    ]),
    withDirectives(createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(Tracks$1, {
          canAdd: false,
          onSelect: onSelectTracks,
          onAdd: addTracks,
          onEdit: editTracks,
          onLicenses: editTracksLicenses,
          ref_key: "tracks",
          ref: tracks
        }, null, 512)
      ])
    ], 512), [
      [vShow, !data.trackEditorMode && !data.licenseTrackEditorMode]
    ]),
    (data.trackEditorMode)
      ? (openBlock(), createBlock(TrackEditor, {
          key: 0,
          items: data.editorTracks,
          ref_key: "trackEditor",
          ref: trackEditor,
          onRemove: onRemoveTrack,
          onUpdate: onUpdateTrack,
          onAdd: onAddTrack,
          onClose: closeTrackEditorMode
        }, null, 8, ["items"]))
      : createCommentVNode("", true),
    (data.licenseTrackEditorMode)
      ? (openBlock(), createBlock(LicenseTrackEditor, {
          key: 1,
          items: data.editorTracks,
          ref_key: "licenseTrackEditor",
          ref: licenseTrackEditor,
          onClose: closeLicenseTrackEditorMode
        }, null, 8, ["items"]))
      : createCommentVNode("", true)
  ], 64))
}
}

};
const Tracks = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-8d03cc21"]]);

export { Tracks as default };
//# sourceMappingURL=Tracks-CUwuPG5q.js.map
