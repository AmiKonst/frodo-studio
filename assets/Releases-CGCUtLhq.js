import { _ as _export_sfc, a as useI18n, f as ref, r as reactive, b as createElementBlock, o as openBlock, w as withDirectives, c as createBlock, e as createCommentVNode, v as vShow, g as createVNode, u as unref, h as createBaseVNode, R as Releases$1, F as Fragment, i as api } from './index-vvnTh7nb.js';
import { P as PageHeader } from './PageHeader-BwzzVlHj.js';
import { R as ReleaseEditor } from './ReleaseEditor-GV5hok_5.js';
import { T as TrackEditor } from './TrackEditor-dWSaoAK0.js';
import { L as LicenseTrackEditor } from './LicenseTrackEditor-GxAhTgat.js';
import './FileUploader-DjjpkjU7.js';
import './ViewMode-C8qkmpB5.js';

const _hoisted_1 = { class: "box" };
const _hoisted_2 = { class: "item-detail" };

    
const _sfc_main = {
  __name: 'Releases',
  setup(__props) {

    const { t } = useI18n();
    const releases = ref(null);
    const releaseEditor = ref(null);
    const licenseTrackEditor = ref(null);
    const trackEditor = ref(null);

    const data = reactive({
        releaseEditorMode: false,
        editorReleases: null,
        trackEditorMode: false,
        editorTracks: null,
        selectedReleases: null
    });

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

    // Tracks
        const closeTrackEditorMode = () => {
            data.trackEditorMode = false;
        };

        const closeLicenseTrackEditorMode = () => {
            data.licenseTrackEditorMode = false;
        };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    withDirectives(createVNode(PageHeader, {
      title: unref(t)(`pages.releases.title`),
      detail: !!data.selectedReleases?.length,
      id: "item-head-buttons"
    }, null, 8, ["title", "detail"]), [
      [vShow, !data.releaseEditorMode && !data.trackEditorMode && !data.licenseTrackEditorMode]
    ]),
    withDirectives(createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createVNode(Releases$1, {
          canAdd: false,
          onSelect: onSelectReleases,
          onAdd: addReleases,
          onEdit: editReleases,
          onEditTracks: editReleaseTracks,
          onEditTracksLicenses: editReleaseTracksLicenses,
          ref_key: "releases",
          ref: releases
        }, null, 512)
      ])
    ], 512), [
      [vShow, !data.releaseEditorMode && !data.trackEditorMode && !data.licenseTrackEditorMode]
    ]),
    (data.releaseEditorMode)
      ? (openBlock(), createBlock(ReleaseEditor, {
          key: 0,
          items: data.editorReleases,
          ref_key: "releaseEditor",
          ref: releaseEditor,
          onRemove: onRemoveRelease,
          onUpdate: onUpdateRelease,
          onAdd: onAddRelease,
          onClose: closeReleaseEditorMode
        }, null, 8, ["items"]))
      : createCommentVNode("", true),
    (data.trackEditorMode)
      ? (openBlock(), createBlock(TrackEditor, {
          key: 1,
          release: data.editorReleases?.length ? data.editorReleases[0] : null,
          items: data.editorTracks,
          ref_key: "trackEditor",
          ref: trackEditor,
          onRemove: _cache[0] || (_cache[0] = () => {}),
          onUpdate: _cache[1] || (_cache[1] = () => {}),
          onAdd: _cache[2] || (_cache[2] = () => {}),
          onClose: closeTrackEditorMode
        }, null, 8, ["release", "items"]))
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
const Releases = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-0331db17"]]);

export { Releases as default };
//# sourceMappingURL=Releases-CGCUtLhq.js.map
