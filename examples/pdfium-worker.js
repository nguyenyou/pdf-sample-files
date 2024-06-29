var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// ../engine/dist/index.js
var __require2 = /* @__PURE__ */ ((x) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof __require !== "undefined" ? __require : a)[b]
}) : x)(function(x) {
  if (typeof __require !== "undefined") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __require22 = /* @__PURE__ */ ((x) => typeof __require2 !== "undefined" ? __require2 : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof __require2 !== "undefined" ? __require2 : a)[b]
}) : x)(function(x) {
  if (typeof __require2 !== "undefined") return __require2.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var functions = {
  PDFiumExt_Init: [[], null],
  PDFiumExt_OpenFileWriter: [[], "number"],
  PDFiumExt_CloseFileWriter: [["number"], null],
  PDFiumExt_GetFileWriterSize: [["number"], "number"],
  PDFiumExt_GetFileWriterData: [["number", "number", "number"], null],
  PDFiumExt_OpenFormFillInfo: [[], "number"],
  PDFiumExt_CloseFormFillInfo: [["number"], null],
  PDFiumExt_InitFormFillEnvironment: [["number", "number"], "number"],
  PDFiumExt_ExitFormFillEnvironment: [["number"], null],
  PDFiumExt_SaveAsCopy: [["number", "number"], null],
  FPDF_LoadMemDocument: [["number", "number", "number"], "number"],
  FPDF_GetPageSizeByIndexF: [["number", "number", "number"], "number"],
  FPDF_GetLastError: [[], "number"],
  FPDF_GetPageCount: [["number"], "number"],
  FPDF_CloseDocument: [["number"], null],
  FPDF_DestroyLibrary: [[], null],
  FPDF_GetMetaText: [["number", "string", "number", "number"], "number"],
  FPDFBitmap_FillRect: [["number", "number", "number", "number", "number", "number"], null],
  FPDFBitmap_Create: [["number", "number", "number"], "number"],
  FPDFBitmap_CreateEx: [["number", "number", "number", "number", "number"], "number"],
  FPDFBitmap_GetBuffer: [["number"], "number"],
  FPDFBitmap_GetWidth: [["number"], "number"],
  FPDFBitmap_GetHeight: [["number"], "number"],
  FPDFBitmap_GetFormat: [["number"], "number"],
  FPDFBitmap_Destroy: [["number"], null],
  FPDFPageObj_Destroy: [["number"], null],
  FPDFPageObj_NewImageObj: [["number"], "number"],
  FPDFPageObj_GetMatrix: [["number", "number"], "boolean"],
  FPDFPageObj_SetMatrix: [["number", "number"], "boolean"],
  FPDFPageObj_GetBounds: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPageObj_Transform: [["number", "number", "number", "number", "number", "number", "number"], null],
  FPDFImageObj_SetBitmap: [["number", "number", "number", "number"], "boolean"],
  FPDFImageObj_GetBitmap: [["number"], "number"],
  FPDFPath_CountSegments: [["number"], "number"],
  FPDFPath_GetPathSegment: [["number", "number"], "number"],
  FPDFPathSegment_GetType: [["number"], "number"],
  FPDFPathSegment_GetPoint: [["number", "number", "number"], "boolean"],
  FPDFPathSegment_GetClose: [["number"], "boolean"],
  FPDFFormObj_CountObjects: [["number"], "number"],
  FPDFFormObj_GetObject: [["number", "number"], "number"],
  FPDFBookmark_GetFirstChild: [["number", "number"], "number"],
  FPDFBookmark_GetNextSibling: [["number", "number"], "number"],
  FPDFBookmark_Find: [["number", "string"], "number"],
  FPDFBookmark_GetTitle: [["number", "number", "number"], "number"],
  FPDFBookmark_GetAction: [["number"], "number"],
  FPDFBookmark_GetDest: [["number", "number"], "number"],
  FPDFAction_GetType: [["number"], "number"],
  FPDFAction_GetFilePath: [["number", "number", "number"], "number"],
  FPDFAction_GetDest: [["number", "number"], "number"],
  FPDFAction_GetURIPath: [["number", "number", "number", "number"], "number"],
  FPDFDest_GetDestPageIndex: [["number", "number"], "number"],
  FPDFDest_GetView: [["number", "number", "number"], "number"],
  FPDFDest_GetLocationInPage: [["number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDF_LoadPage: [["number", "number"], "number"],
  FPDF_RenderPageBitmap: [["number", "number", "number", "number", "number", "number", "number", "number"], null],
  FPDF_PageToDevice: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], null],
  FPDF_DeviceToPage: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFPage_GetAnnotCount: [["number"], "number"],
  FPDFPage_GetAnnot: [["number", "number"], "number"],
  FPDFPage_CreateAnnot: [["number", "number"], "number"],
  FPDFPage_InsertObject: [["number", "number"], "boolean"],
  FPDFPage_RemoveAnnot: [["number", "number"], "boolean"],
  FPDFPage_GenerateContent: [["number"], "boolean"],
  FPDF_ClosePage: [["number"], null],
  FPDFAnnot_GetSubtype: [["number"], "number"],
  FPDFAnnot_GetAP: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetObjectCount: [["number"], "number"],
  FPDFAnnot_GetObject: [["number", "number"], "number"],
  FPDFAnnot_AppendObject: [["number", "number"], "boolean"],
  FPDFAnnot_GetRect: [["number", "number"], "boolean"],
  FPDFAnnot_SetRect: [["number", "number"], "boolean"],
  FPDFAnnot_GetLink: [["number"], "number"],
  FPDFAnnot_GetFormFieldType: [["number", "number"], "number"],
  FPDFAnnot_GetFormFieldFlags: [["number", "number"], "number"],
  FPDFAnnot_GetFormFieldName: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetFormFieldAlternateName: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetFormFieldValue: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetOptionCount: [["number", "number"], "number"],
  FPDFAnnot_GetOptionLabel: [["number", "number", "number", "number", "number"], "number"],
  FPDFAnnot_IsOptionSelected: [["number", "number", "number"], "boolean"],
  FPDFAnnot_IsChecked: [["number", "number"], "boolean"],
  FPDFAnnot_GetStringValue: [["number", "string", "number", "number"], "number"],
  FPDFAnnot_GetColor: [["number", "number", "number", "number", "number", "number"], "number"],
  FPDFAnnot_GetLinkedAnnot: [["number", "string"], "number"],
  FPDFAnnot_GetInkListCount: [["number"], "number"],
  FPDFAnnot_GetInkListPath: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_AddInkStroke: [["number", "number", "number"], "number"],
  FPDFAnnot_RemoveInkList: [["number"], "boolean"],
  FPDFAnnot_GetVertices: [["number", "number", "number"], "number"],
  FPDFAnnot_GetLine: [["number", "number", "number"], "number"],
  FPDFPageObj_GetType: [["number"], "number"],
  FPDFLink_GetDest: [["number", "number"], "number"],
  FPDFLink_GetAction: [["number"], "number"],
  FPDFText_LoadPage: [["number"], "number"],
  FPDFText_CountChars: [["number"], "number"],
  FPDFText_CountRects: [["number", "number", "number"], "number"],
  FPDFText_GetRect: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFText_GetCharIndexAtPos: [["number", "number", "number", "number", "number"], "number"],
  FPDFText_GetFontSize: [["number", "number"], "number"],
  FPDFText_GetFontInfo: [["number", "number", "number", "number", "number"], "number"],
  FPDFText_GetBoundedText: [["number", "number", "number", "number", "number", "number", "number"], "number"],
  FPDFText_FindStart: [["number", "number", "number", "number"], "number"],
  FPDFText_FindNext: [["number"], "boolean"],
  FPDFText_FindPrev: [["number"], "boolean"],
  FPDFText_GetSchResultIndex: [["number"], "number"],
  FPDFText_GetSchCount: [["number"], "number"],
  FPDFText_FindClose: [["number"], null],
  FPDFText_ClosePage: [["number"], null],
  FPDFText_GetText: [["number", "number", "number", "number"], "number"],
  FPDFPage_CloseAnnot: [["number"], null],
  FPDFDoc_GetAttachmentCount: [["number"], "number"],
  FPDFDoc_GetAttachment: [["number", "number"], "number"],
  FPDFAttachment_GetName: [["number", "number", "number"], "number"],
  FPDFAttachment_GetStringValue: [["number", "string", "number", "number"], "number"],
  FPDFAttachment_GetFile: [["number", "number", "number", "number"], "boolean"],
  FPDFAnnot_SetFocusableSubtypes: [["number", "number", "number"], "boolean"],
  FORM_SetFocusedAnnot: [["number", "number"], "boolean"],
  FORM_SetIndexSelected: [["number", "number", "number", "boolean"], "boolean"],
  FORM_SelectAllText: [["number", "number"], "boolean"],
  FORM_ReplaceSelection: [["number", "number", "string"], "boolean"],
  FORM_ForceToKillFocus: [["number"], "boolean"],
  FPDF_GetSignatureCount: [["number"], "number"],
  FPDF_GetSignatureObject: [["number", "number"], "number"],
  FPDFSignatureObj_GetContents: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetByteRange: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetSubFilter: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetReason: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetTime: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetDocMDPPermission: [["number"], "number"],
  FPDF_CreateNewDocument: [[], "number"],
  FPDF_ImportPagesByIndex: [["number", "number", "number", "number", "number"], "boolean"],
  FPDF_ImportPages: [["number", "number", "number", "number"], "boolean"]
};
var createPdfium = (() => {
  var _scriptName = import.meta.url;
  return function(moduleArg = {}) {
    var moduleRtn;
    var Module = Object.assign({}, moduleArg);
    var readyPromiseResolve, readyPromiseReject;
    var readyPromise = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    ["_malloc", "_free", "_PDFiumExt_Init", "_PDFiumExt_OpenFileWriter", "_PDFiumExt_CloseFileWriter", "_PDFiumExt_GetFileWriterSize", "_PDFiumExt_GetFileWriterData", "_PDFiumExt_OpenFormFillInfo", "_PDFiumExt_CloseFormFillInfo", "_PDFiumExt_InitFormFillEnvironment", "_PDFiumExt_ExitFormFillEnvironment", "_PDFiumExt_SaveAsCopy", "_FPDF_LoadMemDocument", "_FPDF_GetPageSizeByIndexF", "_FPDF_GetLastError", "_FPDF_GetPageCount", "_FPDF_CloseDocument", "_FPDF_DestroyLibrary", "_FPDF_GetMetaText", "_FPDFBitmap_FillRect", "_FPDFBitmap_Create", "_FPDFBitmap_CreateEx", "_FPDFBitmap_GetBuffer", "_FPDFBitmap_GetWidth", "_FPDFBitmap_GetHeight", "_FPDFBitmap_GetFormat", "_FPDFBitmap_Destroy", "_FPDFPageObj_Destroy", "_FPDFPageObj_NewImageObj", "_FPDFPageObj_GetMatrix", "_FPDFPageObj_SetMatrix", "_FPDFPageObj_GetBounds", "_FPDFPageObj_Transform", "_FPDFImageObj_SetBitmap", "_FPDFImageObj_GetBitmap", "_FPDFPath_CountSegments", "_FPDFPath_GetPathSegment", "_FPDFPathSegment_GetType", "_FPDFPathSegment_GetPoint", "_FPDFPathSegment_GetClose", "_FPDFFormObj_CountObjects", "_FPDFFormObj_GetObject", "_FPDFBookmark_GetFirstChild", "_FPDFBookmark_GetNextSibling", "_FPDFBookmark_Find", "_FPDFBookmark_GetTitle", "_FPDFBookmark_GetAction", "_FPDFBookmark_GetDest", "_FPDFAction_GetType", "_FPDFAction_GetFilePath", "_FPDFAction_GetDest", "_FPDFAction_GetURIPath", "_FPDFDest_GetDestPageIndex", "_FPDFDest_GetView", "_FPDFDest_GetLocationInPage", "_FPDF_LoadPage", "_FPDF_RenderPageBitmap", "_FPDF_PageToDevice", "_FPDF_DeviceToPage", "_FPDFPage_GetAnnotCount", "_FPDFPage_GetAnnot", "_FPDFPage_CreateAnnot", "_FPDFPage_InsertObject", "_FPDFPage_RemoveAnnot", "_FPDFPage_GenerateContent", "_FPDF_ClosePage", "_FPDFAnnot_GetSubtype", "_FPDFAnnot_GetAP", "_FPDFAnnot_GetObjectCount", "_FPDFAnnot_GetObject", "_FPDFAnnot_AppendObject", "_FPDFAnnot_GetRect", "_FPDFAnnot_SetRect", "_FPDFAnnot_GetLink", "_FPDFAnnot_GetFormFieldType", "_FPDFAnnot_GetFormFieldFlags", "_FPDFAnnot_GetFormFieldName", "_FPDFAnnot_GetFormFieldAlternateName", "_FPDFAnnot_GetFormFieldValue", "_FPDFAnnot_GetOptionCount", "_FPDFAnnot_GetOptionLabel", "_FPDFAnnot_IsOptionSelected", "_FPDFAnnot_IsChecked", "_FPDFAnnot_GetStringValue", "_FPDFAnnot_GetColor", "_FPDFAnnot_GetLinkedAnnot", "_FPDFAnnot_GetInkListCount", "_FPDFAnnot_GetInkListPath", "_FPDFAnnot_AddInkStroke", "_FPDFAnnot_RemoveInkList", "_FPDFAnnot_GetVertices", "_FPDFAnnot_GetLine", "_FPDFPageObj_GetType", "_FPDFLink_GetDest", "_FPDFLink_GetAction", "_FPDFText_LoadPage", "_FPDFText_CountChars", "_FPDFText_CountRects", "_FPDFText_GetRect", "_FPDFText_GetCharIndexAtPos", "_FPDFText_GetFontSize", "_FPDFText_GetFontInfo", "_FPDFText_GetBoundedText", "_FPDFText_FindStart", "_FPDFText_FindNext", "_FPDFText_FindPrev", "_FPDFText_GetSchResultIndex", "_FPDFText_GetSchCount", "_FPDFText_FindClose", "_FPDFText_ClosePage", "_FPDFText_GetText", "_FPDFPage_CloseAnnot", "_FPDFDoc_GetAttachmentCount", "_FPDFDoc_GetAttachment", "_FPDFAttachment_GetName", "_FPDFAttachment_GetStringValue", "_FPDFAttachment_GetFile", "_FPDFAnnot_SetFocusableSubtypes", "_FORM_SetFocusedAnnot", "_FORM_SetIndexSelected", "_FORM_SelectAllText", "_FORM_ReplaceSelection", "_FORM_ForceToKillFocus", "_FPDF_GetSignatureCount", "_FPDF_GetSignatureObject", "_FPDFSignatureObj_GetContents", "_FPDFSignatureObj_GetByteRange", "_FPDFSignatureObj_GetSubFilter", "_FPDFSignatureObj_GetReason", "_FPDFSignatureObj_GetTime", "_FPDFSignatureObj_GetDocMDPPermission", "_FPDF_CreateNewDocument", "_FPDF_ImportPagesByIndex", "_FPDF_ImportPages", "_memory", "___indirect_function_table", "onRuntimeInitialized"].forEach((prop) => {
      if (!Object.getOwnPropertyDescriptor(readyPromise, prop)) {
        Object.defineProperty(readyPromise, prop, {
          get: () => abort("You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),
          set: () => abort("You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
        });
      }
    });
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = true;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    if (Module["ENVIRONMENT"]) {
      throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
    }
    var moduleOverrides = Object.assign({}, Module);
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary;
    if (ENVIRONMENT_IS_SHELL) {
      if (typeof process == "object" && typeof __require22 === "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptName) {
        scriptDirectory = _scriptName;
      }
      if (scriptDirectory.startsWith("blob:")) {
        scriptDirectory = "";
      } else {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      }
      if (!(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      {
        read_ = (url) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = (url) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(
              /** @type{!ArrayBuffer} */
              xhr.response
            );
          };
        }
        readAsync = (url, onload, onerror) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = () => {
            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
    } else {
      throw new Error("environment detection error");
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.error.bind(console);
    Object.assign(Module, moduleOverrides);
    moduleOverrides = null;
    checkIncomingModuleAPI();
    if (Module["arguments"]) arguments_ = Module["arguments"];
    legacyModuleProp("arguments", "arguments_");
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    legacyModuleProp("thisProgram", "thisProgram");
    if (Module["quit"]) quit_ = Module["quit"];
    legacyModuleProp("quit", "quit_");
    assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["read"] == "undefined", "Module.read option was removed (modify read_ in JS)");
    assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
    assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
    assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
    assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
    legacyModuleProp("asm", "wasmExports");
    legacyModuleProp("read", "read_");
    legacyModuleProp("readAsync", "readAsync");
    legacyModuleProp("readBinary", "readBinary");
    legacyModuleProp("setWindowTitle", "setWindowTitle");
    var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";
    var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";
    var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";
    var FETCHFS = "FETCHFS is no longer included by default; build with -lfetchfs.js";
    var ICASEFS = "ICASEFS is no longer included by default; build with -licasefs.js";
    var JSFILEFS = "JSFILEFS is no longer included by default; build with -ljsfilefs.js";
    var OPFS = "OPFS is no longer included by default; build with -lopfs.js";
    var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";
    assert(!ENVIRONMENT_IS_WEB, "web environment detected but not enabled at build time.  Add `web` to `-sENVIRONMENT` to enable.");
    assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.");
    assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    legacyModuleProp("wasmBinary", "wasmBinary");
    if (typeof WebAssembly != "object") {
      err("no native wasm support detected");
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed" + (text ? ": " + text : ""));
      }
    }
    var HEAP, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateMemoryViews() {
      var b = wasmMemory.buffer;
      Module["HEAP8"] = HEAP8 = new Int8Array(b);
      Module["HEAP16"] = HEAP16 = new Int16Array(b);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
      Module["HEAP32"] = HEAP32 = new Int32Array(b);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
    }
    assert(!Module["STACK_SIZE"], "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
    assert(
      typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != void 0 && Int32Array.prototype.set != void 0,
      "JS engine does not provide full typed array support"
    );
    assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
    assert(!Module["INITIAL_MEMORY"], "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
    function writeStackCookie() {
      var max = _emscripten_stack_get_end();
      assert((max & 3) == 0);
      if (max == 0) {
        max += 4;
      }
      HEAPU32[max >> 2] = 34821223;
      HEAPU32[max + 4 >> 2] = 2310721022;
      HEAPU32[0 >> 2] = 1668509029;
    }
    function checkStackCookie() {
      if (ABORT) return;
      var max = _emscripten_stack_get_end();
      if (max == 0) {
        max += 4;
      }
      var cookie1 = HEAPU32[max >> 2];
      var cookie2 = HEAPU32[max + 4 >> 2];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
      }
      if (HEAPU32[0 >> 2] != 1668509029) {
        abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
      }
    }
    (function() {
      var h16 = new Int16Array(1);
      var h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
    })();
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATEXIT__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      checkStackCookie();
      if (!Module["noFSInit"] && !FS.init.initialized)
        FS.init();
      FS.ignorePermissions = false;
      TTY.init();
      callRuntimeCallbacks(__ATINIT__);
    }
    function postRun() {
      checkStackCookie();
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnExit(cb) {
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    var runDependencyTracking = {};
    function getUniqueRunDependency(id) {
      var orig = id;
      while (1) {
        if (!runDependencyTracking[id]) return id;
        id = orig + Math.random();
      }
    }
    function addRunDependency(id) {
      runDependencies++;
      Module["monitorRunDependencies"]?.(runDependencies);
      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;
        if (runDependencyWatcher === null && typeof setInterval != "undefined") {
          runDependencyWatcher = setInterval(() => {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }
            var shown = false;
            for (var dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err("still waiting on run dependencies:");
              }
              err(`dependency: ${dep}`);
            }
            if (shown) {
              err("(end of list)");
            }
          }, 1e4);
        }
      } else {
        err("warning: run dependency added without ID");
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      Module["monitorRunDependencies"]?.(runDependencies);
      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id];
      } else {
        err("warning: run dependency removed without ID");
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    function abort(what) {
      Module["onAbort"]?.(what);
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
    var isFileURI = (filename) => filename.startsWith("file://");
    function createExportWrapper(name, nargs) {
      return (...args) => {
        assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
        var f = wasmExports[name];
        assert(f, `exported native function \`${name}\` not found`);
        assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
        return f(...args);
      };
    }
    function findWasmBinary() {
      if (Module["locateFile"]) {
        var f = "pdfium.wasm";
        if (!isDataURI(f)) {
          return locateFile(f);
        }
        return f;
      }
      return new URL("pdfium.wasm", import.meta.url).href;
    }
    var wasmBinaryFile;
    function getBinarySync(file) {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) {
        return readBinary(file);
      }
      throw "both async and sync fetching of the wasm failed";
    }
    function getBinaryPromise(binaryFile) {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function") {
          return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
            if (!response["ok"]) {
              throw `failed to load wasm binary file at '${binaryFile}'`;
            }
            return response["arrayBuffer"]();
          }).catch(() => getBinarySync(binaryFile));
        }
      }
      return Promise.resolve().then(() => getBinarySync(binaryFile));
    }
    function instantiateArrayBuffer(binaryFile, imports, receiver) {
      return getBinaryPromise(binaryFile).then((binary) => {
        return WebAssembly.instantiate(binary, imports);
      }).then(receiver, (reason) => {
        err(`failed to asynchronously prepare wasm: ${reason}`);
        if (isFileURI(wasmBinaryFile)) {
          err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
        }
        abort(reason);
      });
    }
    function instantiateAsync(binary, binaryFile, imports, callback) {
      if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
        return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
          var result = WebAssembly.instantiateStreaming(response, imports);
          return result.then(
            callback,
            function(reason) {
              err(`wasm streaming compile failed: ${reason}`);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(binaryFile, imports, callback);
            }
          );
        });
      }
      return instantiateArrayBuffer(binaryFile, imports, callback);
    }
    function getWasmImports() {
      return {
        "env": wasmImports,
        "wasi_snapshot_preview1": wasmImports
      };
    }
    function createWasm() {
      var info = getWasmImports();
      function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        Module["wasmExports"] = wasmExports;
        wasmMemory = wasmExports["memory"];
        assert(wasmMemory, "memory not found in wasm exports");
        updateMemoryViews();
        wasmTable = wasmExports["__indirect_function_table"];
        assert(wasmTable, "table not found in wasm exports");
        addOnInit(wasmExports["__wasm_call_ctors"]);
        removeRunDependency("wasm-instantiate");
        return wasmExports;
      }
      addRunDependency("wasm-instantiate");
      var trueModule = Module;
      function receiveInstantiationResult(result) {
        assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
        trueModule = null;
        receiveInstance(result["instance"]);
      }
      if (Module["instantiateWasm"]) {
        try {
          return Module["instantiateWasm"](info, receiveInstance);
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`);
          readyPromiseReject(e);
        }
      }
      if (!wasmBinaryFile) wasmBinaryFile = findWasmBinary();
      instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
      return {};
    }
    var tempDouble;
    var tempI64;
    function legacyModuleProp(prop, newName, incoming = true) {
      if (!Object.getOwnPropertyDescriptor(Module, prop)) {
        Object.defineProperty(Module, prop, {
          configurable: true,
          get() {
            let extra = incoming ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : "";
            abort(`\`Module.${prop}\` has been replaced by \`${newName}\`` + extra);
          }
        });
      }
    }
    function ignoredModuleProp(prop) {
      if (Object.getOwnPropertyDescriptor(Module, prop)) {
        abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
      }
    }
    function isExportedByForceFilesystem(name) {
      return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || // The old FS has some functionality that WasmFS lacks.
      name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
    }
    function missingGlobal(sym, msg) {
      if (typeof globalThis != "undefined") {
        Object.defineProperty(globalThis, sym, {
          configurable: true,
          get() {
            warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
            return void 0;
          }
        });
      }
    }
    missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
    missingGlobal("asm", "Please use wasmExports instead");
    function missingLibrarySymbol(sym) {
      if (typeof globalThis != "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
        Object.defineProperty(globalThis, sym, {
          configurable: true,
          get() {
            var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
            var librarySymbol = sym;
            if (!librarySymbol.startsWith("_")) {
              librarySymbol = "$" + sym;
            }
            msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
            if (isExportedByForceFilesystem(sym)) {
              msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
            }
            warnOnce(msg);
            return void 0;
          }
        });
      }
      unexportedRuntimeSymbol(sym);
    }
    function unexportedRuntimeSymbol(sym) {
      if (!Object.getOwnPropertyDescriptor(Module, sym)) {
        Object.defineProperty(Module, sym, {
          configurable: true,
          get() {
            var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
            if (isExportedByForceFilesystem(sym)) {
              msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
            }
            abort(msg);
          }
        });
      }
    }
    function dbg(...args) {
      console.warn(...args);
    }
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }
    var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        callbacks.shift()(Module);
      }
    };
    function getValue(ptr, type = "i8") {
      if (type.endsWith("*")) type = "*";
      switch (type) {
        case "i1":
          return HEAP8[ptr];
        case "i8":
          return HEAP8[ptr];
        case "i16":
          return HEAP16[ptr >> 1];
        case "i32":
          return HEAP32[ptr >> 2];
        case "i64":
          abort("to do getValue(i64) use WASM_BIGINT");
        case "float":
          return HEAPF32[ptr >> 2];
        case "double":
          return HEAPF64[ptr >> 3];
        case "*":
          return HEAPU32[ptr >> 2];
        default:
          abort(`invalid type for getValue: ${type}`);
      }
    }
    var noExitRuntime = Module["noExitRuntime"] || true;
    var ptrToString = (ptr) => {
      assert(typeof ptr === "number");
      ptr >>>= 0;
      return "0x" + ptr.toString(16).padStart(8, "0");
    };
    function setValue(ptr, value, type = "i8") {
      if (type.endsWith("*")) type = "*";
      switch (type) {
        case "i1":
          HEAP8[ptr] = value;
          break;
        case "i8":
          HEAP8[ptr] = value;
          break;
        case "i16":
          HEAP16[ptr >> 1] = value;
          break;
        case "i32":
          HEAP32[ptr >> 2] = value;
          break;
        case "i64":
          abort("to do setValue(i64) use WASM_BIGINT");
        case "float":
          HEAPF32[ptr >> 2] = value;
          break;
        case "double":
          HEAPF64[ptr >> 3] = value;
          break;
        case "*":
          HEAPU32[ptr >> 2] = value;
          break;
        default:
          abort(`invalid type for setValue: ${type}`);
      }
    }
    var stackRestore = (val) => __emscripten_stack_restore(val);
    var stackSave = () => _emscripten_stack_get_current();
    var warnOnce = (text) => {
      warnOnce.shown || (warnOnce.shown = {});
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    };
    var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = "";
      while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    };
    var UTF8ToString = (ptr, maxBytesToRead) => {
      assert(typeof ptr == "number", `UTF8ToString expects a number (got ${typeof ptr})`);
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    };
    var ___assert_fail = (condition, filename, line, func) => {
      abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
    };
    function syscallGetVarargI() {
      assert(SYSCALLS.varargs != void 0);
      var ret = HEAP32[+SYSCALLS.varargs >> 2];
      SYSCALLS.varargs += 4;
      return ret;
    }
    var syscallGetVarargP = syscallGetVarargI;
    var PATH = {
      isAbs: (path) => path.charAt(0) === "/",
      splitPath: (filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: (parts, allowAboveRoot) => {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize: (path) => {
        var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter((p) => !!p), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname: (path) => {
        var result = PATH.splitPath(path), root = result[0], dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: (path) => {
        if (path === "/") return "/";
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1);
      },
      join: (...paths) => PATH.normalize(paths.join("/")),
      join2: (l, r) => PATH.normalize(l + "/" + r)
    };
    var initRandomFill = () => {
      if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        return (view) => crypto.getRandomValues(view);
      } else
        abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
    };
    var randomFill = (view) => {
      return (randomFill = initRandomFill())(view);
    };
    var PATH_FS = {
      resolve: (...args) => {
        var resolvedPath = "", resolvedAbsolute = false;
        for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = i >= 0 ? args[i] : FS.cwd();
          if (typeof path != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!path) {
            return "";
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((p) => !!p), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
      },
      relative: (from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== "") break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== "") break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push("..");
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/");
      }
    };
    var FS_stdin_getChar_buffer = [];
    var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
          len++;
        } else if (c <= 2047) {
          len += 2;
        } else if (c >= 55296 && c <= 57343) {
          len += 4;
          ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
    var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      assert(typeof str === "string", `stringToUTF8Array expects a string (got ${typeof str})`);
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 1114111) warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        }
      }
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    }
    var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (typeof window != "undefined" && typeof window.prompt == "function") {
          result = window.prompt("Input: ");
          if (result !== null) {
            result += "\n";
          }
        } else if (typeof readline == "function") {
          result = readline();
          if (result !== null) {
            result += "\n";
          }
        }
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
    var TTY = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        close(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
        fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
        read(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0) break;
            bytesRead++;
            buffer[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
        write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }
      },
      default_tty_ops: {
        get_char(tty) {
          return FS_stdin_getChar();
        },
        put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
        ioctl_tcgets(tty) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3,
              28,
              127,
              21,
              4,
              0,
              1,
              0,
              17,
              19,
              26,
              0,
              18,
              15,
              23,
              22,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          };
        },
        ioctl_tcsets(tty, optional_actions, data) {
          return 0;
        },
        ioctl_tiocgwinsz(tty) {
          return [24, 80];
        }
      },
      default_tty1_ops: {
        put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      }
    };
    var zeroMemory = (address, size) => {
      HEAPU8.fill(0, address, address + size);
      return address;
    };
    var alignMemory = (size, alignment) => {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    };
    var mmapAlloc = (size) => {
      abort("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
    };
    var MEMFS = {
      ops_table: null,
      mount(mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0);
      },
      createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          throw new FS.ErrnoError(63);
        }
        MEMFS.ops_table || (MEMFS.ops_table = {
          dir: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              lookup: MEMFS.node_ops.lookup,
              mknod: MEMFS.node_ops.mknod,
              rename: MEMFS.node_ops.rename,
              unlink: MEMFS.node_ops.unlink,
              rmdir: MEMFS.node_ops.rmdir,
              readdir: MEMFS.node_ops.readdir,
              symlink: MEMFS.node_ops.symlink
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
              read: MEMFS.stream_ops.read,
              write: MEMFS.stream_ops.write,
              allocate: MEMFS.stream_ops.allocate,
              mmap: MEMFS.stream_ops.mmap,
              msync: MEMFS.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              readlink: MEMFS.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: FS.chrdev_stream_ops
          }
        });
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0;
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },
      getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents);
      },
      expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
      },
      resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null;
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
          }
          node.usedBytes = newSize;
        }
      },
      node_ops: {
        getattr(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        setattr(node, attr) {
          if (attr.mode !== void 0) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== void 0) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        lookup(parent, name) {
          throw FS.genericErrors[44];
        },
        mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        rename(old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now();
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },
        unlink(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
        rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
        readdir(node) {
          var entries = [".", ".."];
          for (var key of Object.keys(node.contents)) {
            entries.push(key);
          }
          return entries;
        },
        symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        },
        readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }
      },
      stream_ops: {
        read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
        write(stream, buffer, offset, length, position, canOwn) {
          assert(!(buffer instanceof ArrayBuffer));
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              assert(position === 0, "canOwn must imply no weird position inside the file");
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer.subarray) {
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
        allocate(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
        mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr, allocated };
        },
        msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          return 0;
        }
      }
    };
    var asyncLoad = (url, onload, onerror, noRunDep) => {
      var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
      readAsync(url, (arrayBuffer) => {
        assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, (event) => {
        if (onerror) {
          onerror();
        } else {
          throw `Loading data file "${url}" failed.`;
        }
      });
      if (dep) addRunDependency(dep);
    };
    var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
      FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };
    var preloadPlugins = Module["preloadPlugins"] || [];
    var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      if (typeof Browser != "undefined") Browser.init();
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin["canHandle"](fullname)) {
          plugin["handle"](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
    var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`);
      function processData(byteArray) {
        function finish(byteArray2) {
          preFinish?.();
          if (!dontCreateFile) {
            FS_createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
          }
          onload?.();
          removeRunDependency(dep);
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          onerror?.();
          removeRunDependency(dep);
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency(dep);
      if (typeof url == "string") {
        asyncLoad(url, processData, onerror);
      } else {
        processData(url);
      }
    };
    var FS_modeStringToFlags = (str) => {
      var flagModes = {
        "r": 0,
        "r+": 2,
        "w": 512 | 64 | 1,
        "w+": 512 | 64 | 2,
        "a": 1024 | 64 | 1,
        "a+": 1024 | 64 | 2
      };
      var flags = flagModes[str];
      if (typeof flags == "undefined") {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
    var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
    var ERRNO_MESSAGES = {
      0: "Success",
      1: "Arg list too long",
      2: "Permission denied",
      3: "Address already in use",
      4: "Address not available",
      5: "Address family not supported by protocol family",
      6: "No more processes",
      7: "Socket already connected",
      8: "Bad file number",
      9: "Trying to read unreadable message",
      10: "Mount device busy",
      11: "Operation canceled",
      12: "No children",
      13: "Connection aborted",
      14: "Connection refused",
      15: "Connection reset by peer",
      16: "File locking deadlock error",
      17: "Destination address required",
      18: "Math arg out of domain of func",
      19: "Quota exceeded",
      20: "File exists",
      21: "Bad address",
      22: "File too large",
      23: "Host is unreachable",
      24: "Identifier removed",
      25: "Illegal byte sequence",
      26: "Connection already in progress",
      27: "Interrupted system call",
      28: "Invalid argument",
      29: "I/O error",
      30: "Socket is already connected",
      31: "Is a directory",
      32: "Too many symbolic links",
      33: "Too many open files",
      34: "Too many links",
      35: "Message too long",
      36: "Multihop attempted",
      37: "File or path name too long",
      38: "Network interface is not configured",
      39: "Connection reset by network",
      40: "Network is unreachable",
      41: "Too many open files in system",
      42: "No buffer space available",
      43: "No such device",
      44: "No such file or directory",
      45: "Exec format error",
      46: "No record locks available",
      47: "The link has been severed",
      48: "Not enough core",
      49: "No message of desired type",
      50: "Protocol not available",
      51: "No space left on device",
      52: "Function not implemented",
      53: "Socket is not connected",
      54: "Not a directory",
      55: "Directory not empty",
      56: "State not recoverable",
      57: "Socket operation on non-socket",
      59: "Not a typewriter",
      60: "No such device or address",
      61: "Value too large for defined data type",
      62: "Previous owner died",
      63: "Not super-user",
      64: "Broken pipe",
      65: "Protocol error",
      66: "Unknown protocol",
      67: "Protocol wrong type for socket",
      68: "Math result not representable",
      69: "Read only file system",
      70: "Illegal seek",
      71: "No such process",
      72: "Stale file handle",
      73: "Connection timed out",
      74: "Text file busy",
      75: "Cross-device link",
      100: "Device not a stream",
      101: "Bad font file fmt",
      102: "Invalid slot",
      103: "Invalid request code",
      104: "No anode",
      105: "Block device required",
      106: "Channel number out of range",
      107: "Level 3 halted",
      108: "Level 3 reset",
      109: "Link number out of range",
      110: "Protocol driver not attached",
      111: "No CSI structure available",
      112: "Level 2 halted",
      113: "Invalid exchange",
      114: "Invalid request descriptor",
      115: "Exchange full",
      116: "No data (for no delay io)",
      117: "Timer expired",
      118: "Out of streams resources",
      119: "Machine is not on the network",
      120: "Package not installed",
      121: "The object is remote",
      122: "Advertise error",
      123: "Srmount error",
      124: "Communication error on send",
      125: "Cross mount point (not really error)",
      126: "Given log. name not unique",
      127: "f.d. invalid for this operation",
      128: "Remote address changed",
      129: "Can   access a needed shared lib",
      130: "Accessing a corrupted shared lib",
      131: ".lib section in a.out corrupted",
      132: "Attempting to link in too many libs",
      133: "Attempting to exec a shared library",
      135: "Streams pipe error",
      136: "Too many users",
      137: "Socket type not supported",
      138: "Not supported",
      139: "Protocol family not supported",
      140: "Can't send after socket shutdown",
      141: "Too many references",
      142: "Host is down",
      148: "No medium (in tape drive)",
      156: "Level 2 not synchronized"
    };
    var ERRNO_CODES = {
      "EPERM": 63,
      "ENOENT": 44,
      "ESRCH": 71,
      "EINTR": 27,
      "EIO": 29,
      "ENXIO": 60,
      "E2BIG": 1,
      "ENOEXEC": 45,
      "EBADF": 8,
      "ECHILD": 12,
      "EAGAIN": 6,
      "EWOULDBLOCK": 6,
      "ENOMEM": 48,
      "EACCES": 2,
      "EFAULT": 21,
      "ENOTBLK": 105,
      "EBUSY": 10,
      "EEXIST": 20,
      "EXDEV": 75,
      "ENODEV": 43,
      "ENOTDIR": 54,
      "EISDIR": 31,
      "EINVAL": 28,
      "ENFILE": 41,
      "EMFILE": 33,
      "ENOTTY": 59,
      "ETXTBSY": 74,
      "EFBIG": 22,
      "ENOSPC": 51,
      "ESPIPE": 70,
      "EROFS": 69,
      "EMLINK": 34,
      "EPIPE": 64,
      "EDOM": 18,
      "ERANGE": 68,
      "ENOMSG": 49,
      "EIDRM": 24,
      "ECHRNG": 106,
      "EL2NSYNC": 156,
      "EL3HLT": 107,
      "EL3RST": 108,
      "ELNRNG": 109,
      "EUNATCH": 110,
      "ENOCSI": 111,
      "EL2HLT": 112,
      "EDEADLK": 16,
      "ENOLCK": 46,
      "EBADE": 113,
      "EBADR": 114,
      "EXFULL": 115,
      "ENOANO": 104,
      "EBADRQC": 103,
      "EBADSLT": 102,
      "EDEADLOCK": 16,
      "EBFONT": 101,
      "ENOSTR": 100,
      "ENODATA": 116,
      "ETIME": 117,
      "ENOSR": 118,
      "ENONET": 119,
      "ENOPKG": 120,
      "EREMOTE": 121,
      "ENOLINK": 47,
      "EADV": 122,
      "ESRMNT": 123,
      "ECOMM": 124,
      "EPROTO": 65,
      "EMULTIHOP": 36,
      "EDOTDOT": 125,
      "EBADMSG": 9,
      "ENOTUNIQ": 126,
      "EBADFD": 127,
      "EREMCHG": 128,
      "ELIBACC": 129,
      "ELIBBAD": 130,
      "ELIBSCN": 131,
      "ELIBMAX": 132,
      "ELIBEXEC": 133,
      "ENOSYS": 52,
      "ENOTEMPTY": 55,
      "ENAMETOOLONG": 37,
      "ELOOP": 32,
      "EOPNOTSUPP": 138,
      "EPFNOSUPPORT": 139,
      "ECONNRESET": 15,
      "ENOBUFS": 42,
      "EAFNOSUPPORT": 5,
      "EPROTOTYPE": 67,
      "ENOTSOCK": 57,
      "ENOPROTOOPT": 50,
      "ESHUTDOWN": 140,
      "ECONNREFUSED": 14,
      "EADDRINUSE": 3,
      "ECONNABORTED": 13,
      "ENETUNREACH": 40,
      "ENETDOWN": 38,
      "ETIMEDOUT": 73,
      "EHOSTDOWN": 142,
      "EHOSTUNREACH": 23,
      "EINPROGRESS": 26,
      "EALREADY": 7,
      "EDESTADDRREQ": 17,
      "EMSGSIZE": 35,
      "EPROTONOSUPPORT": 66,
      "ESOCKTNOSUPPORT": 137,
      "EADDRNOTAVAIL": 4,
      "ENETRESET": 39,
      "EISCONN": 30,
      "ENOTCONN": 53,
      "ETOOMANYREFS": 141,
      "EUSERS": 136,
      "EDQUOT": 19,
      "ESTALE": 72,
      "ENOTSUP": 138,
      "ENOMEDIUM": 148,
      "EILSEQ": 25,
      "EOVERFLOW": 61,
      "ECANCELED": 11,
      "ENOTRECOVERABLE": 56,
      "EOWNERDEAD": 62,
      "ESTRPIPE": 135
    };
    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      ErrnoError: class extends Error {
        // We set the `name` property to be able to identify `FS.ErrnoError`
        // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
        // - when using PROXYFS, an error can come from an underlying FS
        // as different FS objects have their own FS.ErrnoError each,
        // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
        // we'll use the reliable test `err.name == "ErrnoError"` instead
        constructor(errno) {
          super(ERRNO_MESSAGES[errno]);
          this.name = "ErrnoError";
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
        }
      },
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      FSStream: class {
        constructor() {
          this.shared = {};
        }
        get object() {
          return this.node;
        }
        set object(val) {
          this.node = val;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(val) {
          this.shared.flags = val;
        }
        get position() {
          return this.shared.position;
        }
        set position(val) {
          this.shared.position = val;
        }
      },
      FSNode: class {
        constructor(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.mounted = null;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.node_ops = {};
          this.stream_ops = {};
          this.rdev = rdev;
          this.readMode = 292 | 73;
          this.writeMode = 146;
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(val) {
          val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(val) {
          val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return FS.isDir(this.mode);
        }
        get isDevice() {
          return FS.isChrdev(this.mode);
        }
      },
      lookupPath(path, opts = {}) {
        path = PATH_FS.resolve(path);
        if (!path) return { path: "", node: null };
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        opts = Object.assign(defaults, opts);
        if (opts.recurse_count > 8) {
          throw new FS.ErrnoError(32);
        }
        var parts = path.split("/").filter((p) => !!p);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
          var islast = i === parts.length - 1;
          if (islast && opts.parent) {
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          if (FS.isMountpoint(current)) {
            if (!islast || islast && opts.follow_mount) {
              current = current.mounted.root;
            }
          }
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
              current = lookup.node;
              if (count++ > 40) {
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },
      getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
      hashName(parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
        }
        return (parentid + hash >>> 0) % FS.nameTable.length;
      },
      hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
      hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        return FS.lookup(parent, name);
      },
      createNode(parent, name, mode, rdev) {
        assert(typeof parent == "object");
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      destroyNode(node) {
        FS.hashRemoveNode(node);
      },
      isRoot(node) {
        return node === node.parent;
      },
      isMountpoint(node) {
        return !!node.mounted;
      },
      isFile(mode) {
        return (mode & 61440) === 32768;
      },
      isDir(mode) {
        return (mode & 61440) === 16384;
      },
      isLink(mode) {
        return (mode & 61440) === 40960;
      },
      isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
      isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
      isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
      isSocket(mode) {
        return (mode & 49152) === 49152;
      },
      flagsToPermissionString(flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
          perms += "w";
        }
        return perms;
      },
      nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        if (perms.includes("r") && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes("w") && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes("x") && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup(dir) {
        if (!FS.isDir(dir.mode)) return 54;
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
      mayCreate(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, "wx");
      },
      mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
      mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== "r" || // opening for write
          flags & 512) {
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
      getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
      getStream: (fd) => FS.streams[fd],
      createStream(stream, fd = -1) {
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
      closeStream(fd) {
        FS.streams[fd] = null;
      },
      dupStream(origStream, fd = -1) {
        var stream = FS.createStream(origStream, fd);
        stream.stream_ops?.dup?.(stream);
        return stream;
      },
      chrdev_stream_ops: {
        open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          stream.stream_ops.open?.(stream);
        },
        llseek() {
          throw new FS.ErrnoError(70);
        }
      },
      major: (dev) => dev >> 8,
      minor: (dev) => dev & 255,
      makedev: (ma, mi) => ma << 8 | mi,
      registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
      getDevice: (dev) => FS.devices[dev],
      getMounts(mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
          var m = check.pop();
          mounts.push(m);
          check.push(...m.mounts);
        }
        return mounts;
      },
      syncfs(populate, callback) {
        if (typeof populate == "function") {
          callback = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        ;
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      mount(type, opts, mountpoint) {
        if (typeof type == "string") {
          throw type;
        }
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          mountpoint = lookup.path;
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          node.mounted = mount;
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
          while (current) {
            var next = current.name_next;
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
      lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      create(path, mode) {
        mode = mode !== void 0 ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      mkdir(path, mode) {
        mode = mode !== void 0 ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      mkdirTree(path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += "/" + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            if (e.errno != 20) throw e;
          }
        }
      },
      mkdev(path, mode, dev) {
        if (typeof dev == "undefined") {
          dev = mode;
          mode = 438;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(28);
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(55);
        }
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
        }
        if (old_node === new_node) {
          return;
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
          throw new FS.ErrnoError(10);
        }
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        FS.hashRemoveNode(old_node);
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(old_node);
        }
      },
      rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
      readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
      unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
      readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
      stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
      lstat(path) {
        return FS.stat(path, true);
      },
      chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: mode & 4095 | node.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
      fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.chmod(stream.node, mode);
      },
      chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },
      lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.chown(stream.node, uid, gid);
      },
      truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == "string") {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },
      ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
      utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },
      open(path, flags, mode) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
        mode = typeof mode == "undefined" ? 438 : mode;
        if (flags & 64) {
          mode = mode & 4095 | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == "object") {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
          }
        }
        var created = false;
        if (flags & 64) {
          if (node) {
            if (flags & 128) {
              throw new FS.ErrnoError(20);
            }
          } else {
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        if (flags & 512 && !created) {
          FS.truncate(node, 0);
        }
        flags &= ~(128 | 512 | 131072);
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),
          // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
      close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null;
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      isClosed(stream) {
        return stream.fd === null;
      },
      llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      read(stream, buffer, offset, length, position) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
      write(stream, buffer, offset, length, position, canOwn) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
      allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      mmap(stream, length, position, prot, flags) {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
      msync(stream, buffer, offset, length, mmapFlags) {
        assert(offset >= 0);
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
      ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === "binary") {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == "string") {
          var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        FS.close(stream);
      },
      cwd: () => FS.currentPath,
      chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories() {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice("/dev", "random", randomByte);
        FS.createDevice("/dev", "urandom", randomByte);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        FS.mkdir("/proc");
        var proc_self = FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: "fake" },
                  node_ops: { readlink: () => stream.path }
                };
                ret.parent = ret;
                return ret;
              }
            };
            return node;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams() {
        if (Module["stdin"]) {
          FS.createDevice("/dev", "stdin", Module["stdin"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdin");
        }
        if (Module["stdout"]) {
          FS.createDevice("/dev", "stdout", null, Module["stdout"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdout");
        }
        if (Module["stderr"]) {
          FS.createDevice("/dev", "stderr", null, Module["stderr"]);
        } else {
          FS.symlink("/dev/tty1", "/dev/stderr");
        }
        var stdin = FS.open("/dev/stdin", 0);
        var stdout = FS.open("/dev/stdout", 1);
        var stderr = FS.open("/dev/stderr", 1);
        assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
        assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
        assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
      },
      staticInit() {
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = "<generic error, no stack>";
        });
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = {
          "MEMFS": MEMFS
        };
      },
      init(input, output, error) {
        assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        FS.init.initialized = true;
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams();
      },
      quit() {
        FS.init.initialized = false;
        _fflush(0);
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
      analyzePath(path, dontResolveLastLink) {
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === "/";
        } catch (e) {
          ret.error = e.errno;
        }
        ;
        return ret;
      },
      createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
          }
          parent = current;
        }
        return current;
      },
      createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == "string" ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == "string") {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
      createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            if (output?.buffer?.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0) break;
              bytesRead++;
              buffer[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
      forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          try {
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      createLazyFile(parent, name, url, canRead, canWrite) {
        class LazyUint8Array {
          constructor() {
            this.lengthKnown = false;
            this.chunks = [];
          }
          get(idx) {
            if (idx > this.length - 1 || idx < 0) {
              return void 0;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset];
          }
          setDataGetter(getter) {
            this.getter = getter;
          }
          cacheLength() {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing) chunkSize = datalength;
            var doXHR = (from, to) => {
              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
              var xhr2 = new XMLHttpRequest();
              xhr2.open("GET", url, false);
              if (datalength !== chunkSize) xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
              xhr2.responseType = "arraybuffer";
              if (xhr2.overrideMimeType) {
                xhr2.overrideMimeType("text/plain; charset=x-user-defined");
              }
              xhr2.send(null);
              if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
              if (xhr2.response !== void 0) {
                return new Uint8Array(
                  /** @type{Array<number>} */
                  xhr2.response || []
                );
              }
              return intArrayFromString(xhr2.responseText || "", true);
            };
            var lazyArray2 = this;
            lazyArray2.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum + 1) * chunkSize - 1;
              end = Math.min(end, datalength - 1);
              if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                lazyArray2.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray2.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
              return lazyArray2.chunks[chunkNum];
            });
            if (usesGzip || !datalength) {
              chunkSize = datalength = 1;
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          }
          get length() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }
          get chunkSize() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
        if (typeof XMLHttpRequest != "undefined") {
          if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var lazyArray = new LazyUint8Array();
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        Object.defineProperties(node, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = (...args) => {
            FS.forceLoadFile(node);
            return fn(...args);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position);
        };
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
      absolutePath() {
        abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
      },
      createFolder() {
        abort("FS.createFolder has been removed; use FS.mkdir instead");
      },
      createLink() {
        abort("FS.createLink has been removed; use FS.symlink instead");
      },
      joinPath() {
        abort("FS.joinPath has been removed; use PATH.join instead");
      },
      mmapAlloc() {
        abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
      },
      standardizePath() {
        abort("FS.standardizePath has been removed; use PATH.normalize instead");
      }
    };
    var SYSCALLS = {
      DEFAULT_POLLMASK: 5,
      calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);
            ;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },
      doStat(func, path, buf) {
        var stat = func(path);
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 4 >> 2] = stat.mode;
        HEAPU32[buf + 8 >> 2] = stat.nlink;
        HEAP32[buf + 12 >> 2] = stat.uid;
        HEAP32[buf + 16 >> 2] = stat.gid;
        HEAP32[buf + 20 >> 2] = stat.rdev;
        tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
        HEAP32[buf + 32 >> 2] = 4096;
        HEAP32[buf + 36 >> 2] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3;
        tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
        HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3;
        tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
        HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3;
        tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
        return 0;
      },
      doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
      getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
      varargs: void 0,
      getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      }
    };
    function ___syscall_fcntl64(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = syscallGetVarargI();
            if (arg < 0) {
              return -28;
            }
            while (FS.streams[arg]) {
              arg++;
            }
            var newStream;
            newStream = FS.dupStream(stream, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = syscallGetVarargI();
            stream.flags |= arg;
            return 0;
          }
          case 12: {
            var arg = syscallGetVarargP();
            var offset = 0;
            HEAP16[arg + offset >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_fstat64(fd, buf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
    function ___syscall_getdents64(fd, dirp, count) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        stream.getdents || (stream.getdents = FS.readdir(stream.path));
        var struct_size = 280;
        var pos = 0;
        var off = FS.llseek(stream, 0, 1);
        var idx = Math.floor(off / struct_size);
        while (idx < stream.getdents.length && pos + struct_size <= count) {
          var id;
          var type;
          var name = stream.getdents[idx];
          if (name === ".") {
            id = stream.node.id;
            type = 4;
          } else if (name === "..") {
            var lookup = FS.lookupPath(stream.path, { parent: true });
            id = lookup.node.id;
            type = 4;
          } else {
            var child = FS.lookupNode(stream.node, name);
            id = child.id;
            type = FS.isChrdev(child.mode) ? 2 : (
              // DT_CHR, character device.
              FS.isDir(child.mode) ? 4 : (
                // DT_DIR, directory.
                FS.isLink(child.mode) ? 10 : (
                  // DT_LNK, symbolic link.
                  8
                )
              )
            );
          }
          assert(id);
          tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
          tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
          HEAP16[dirp + pos + 16 >> 1] = 280;
          HEAP8[dirp + pos + 18] = type;
          stringToUTF8(name, dirp + pos + 19, 256);
          pos += struct_size;
          idx += 1;
        }
        FS.llseek(stream, idx * struct_size, 0);
        return pos;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_ioctl(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21505: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tcgets) {
              var termios = stream.tty.ops.ioctl_tcgets(stream);
              var argp = syscallGetVarargP();
              HEAP32[argp >> 2] = termios.c_iflag || 0;
              HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
              HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
              HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
              for (var i = 0; i < 32; i++) {
                HEAP8[argp + i + 17] = termios.c_cc[i] || 0;
              }
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tcsets) {
              var argp = syscallGetVarargP();
              var c_iflag = HEAP32[argp >> 2];
              var c_oflag = HEAP32[argp + 4 >> 2];
              var c_cflag = HEAP32[argp + 8 >> 2];
              var c_lflag = HEAP32[argp + 12 >> 2];
              var c_cc = [];
              for (var i = 0; i < 32; i++) {
                c_cc.push(HEAP8[argp + i + 17]);
              }
              return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
            }
            return 0;
          }
          case 21519: {
            if (!stream.tty) return -59;
            var argp = syscallGetVarargP();
            HEAP32[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty) return -59;
            return -28;
          }
          case 21531: {
            var argp = syscallGetVarargP();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tiocgwinsz) {
              var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
              var argp = syscallGetVarargP();
              HEAP16[argp >> 1] = winsize[0];
              HEAP16[argp + 2 >> 1] = winsize[1];
            }
            return 0;
          }
          case 21524: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21515: {
            if (!stream.tty) return -59;
            return 0;
          }
          default:
            return -28;
        }
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_lstat64(path, buf) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.lstat, path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_newfstatat(dirfd, path, buf, flags) {
      try {
        path = SYSCALLS.getStr(path);
        var nofollow = flags & 256;
        var allowEmpty = flags & 4096;
        flags = flags & ~6400;
        assert(!flags, `unknown flags in __syscall_newfstatat: ${flags}`);
        path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
        return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_openat(dirfd, path, flags, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        var mode = varargs ? syscallGetVarargI() : 0;
        return FS.open(path, flags, mode).fd;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_rmdir(path) {
      try {
        path = SYSCALLS.getStr(path);
        FS.rmdir(path);
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_stat64(path, buf) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_unlinkat(dirfd, path, flags) {
      try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (flags === 0) {
          FS.unlink(path);
        } else if (flags === 512) {
          FS.rmdir(path);
        } else {
          abort("Invalid flags passed to unlinkat");
        }
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    var __abort_js = () => {
      abort("native code called abort()");
    };
    var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
    var __emscripten_throw_longjmp = () => {
      throw Infinity;
    };
    var convertI32PairToI53Checked = (lo, hi) => {
      assert(lo == lo >>> 0 || lo == (lo | 0));
      assert(hi === (hi | 0));
      return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
    };
    function __gmtime_js(time_low, time_high, tmPtr) {
      var time = convertI32PairToI53Checked(time_low, time_high);
      var date = new Date(time * 1e3);
      HEAP32[tmPtr >> 2] = date.getUTCSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
      HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
      HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      ;
    }
    var isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var ydayFromDate = (date) => {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
      return yday;
    };
    function __localtime_js(time_low, time_high, tmPtr) {
      var time = convertI32PairToI53Checked(time_low, time_high);
      var date = new Date(time * 1e3);
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getHours();
      HEAP32[tmPtr + 12 >> 2] = date.getDate();
      HEAP32[tmPtr + 16 >> 2] = date.getMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getDay();
      var yday = ydayFromDate(date) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
      HEAP32[tmPtr + 32 >> 2] = dst;
      ;
    }
    var __tzset_js = (timezone, daylight, std_name, dst_name) => {
      var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
      HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
      HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
      var extractZone = (date) => date.toLocaleTimeString(void 0, { hour12: false, timeZoneName: "short" }).split(" ")[1];
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      assert(winterName);
      assert(summerName);
      assert(lengthBytesUTF8(winterName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${winterName})`);
      assert(lengthBytesUTF8(summerName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${summerName})`);
      if (summerOffset < winterOffset) {
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };
    var _emscripten_date_now = () => Date.now();
    var _emscripten_errn = (str, len) => err(UTF8ToString(str, len));
    var getHeapMax = () => (
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      2147483648
    );
    var growMemory = (size) => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536;
      try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1;
      } catch (e) {
        err(`growMemory: Attempted to grow heap from ${b.byteLength} bytes to ${size} bytes, but got error: ${e}`);
      }
    };
    var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      requestedSize >>>= 0;
      assert(requestedSize > oldSize);
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        err(`Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`);
        return false;
      }
      var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
      return false;
    };
    var ENV = {};
    var getExecutableName = () => {
      return thisProgram || "./this.program";
    };
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
          "USER": "web_user",
          "LOGNAME": "web_user",
          "PATH": "/",
          "PWD": "/",
          "HOME": "/home/web_user",
          "LANG": lang,
          "_": getExecutableName()
        };
        for (var x in ENV) {
          if (ENV[x] === void 0) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
    var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
        HEAP8[buffer++] = str.charCodeAt(i);
      }
      HEAP8[buffer] = 0;
    };
    var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[__environ + i * 4 >> 2] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };
    var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach((string) => bufSize += string.length + 1);
      HEAPU32[penviron_buf_size >> 2] = bufSize;
      return 0;
    };
    function _fd_close(fd) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break;
        if (typeof offset != "undefined") {
          offset += curr;
        }
      }
      return ret;
    };
    function _fd_read(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      var offset = convertI32PairToI53Checked(offset_low, offset_high);
      try {
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
      ;
    }
    var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (typeof offset != "undefined") {
          offset += curr;
        }
      }
      return ret;
    };
    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var arraySum = (array, index) => {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
      }
      return sum;
    };
    var MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var addDays = (date, days) => {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    };
    var writeArrayToMemory = (array, buffer) => {
      assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
      HEAP8.set(array, buffer);
    };
    var _strftime = (s, maxsize, format, tm) => {
      var tm_zone = HEAPU32[tm + 40 >> 2];
      var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[tm + 4 >> 2],
        tm_hour: HEAP32[tm + 8 >> 2],
        tm_mday: HEAP32[tm + 12 >> 2],
        tm_mon: HEAP32[tm + 16 >> 2],
        tm_year: HEAP32[tm + 20 >> 2],
        tm_wday: HEAP32[tm + 24 >> 2],
        tm_yday: HEAP32[tm + 28 >> 2],
        tm_isdst: HEAP32[tm + 32 >> 2],
        tm_gmtoff: HEAP32[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
      };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        "%D": "%m/%d/%y",
        // Equivalent to %m / %d / %y
        "%F": "%Y-%m-%d",
        // Equivalent to %Y - %m - %d
        "%h": "%b",
        // Equivalent to %b
        "%r": "%I:%M:%S %p",
        // Replaced by the time in a.m. and p.m. notation
        "%R": "%H:%M",
        // Replaced by the time in 24-hour notation
        "%T": "%H:%M:%S",
        // Replaced by the time
        "%x": "%m/%d/%y",
        // Replaced by the locale's appropriate date representation
        "%X": "%H:%M:%S",
        // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        "%Ec": "%c",
        // Replaced by the locale's alternative appropriate date and time representation.
        "%EC": "%C",
        // Replaced by the name of the base year (period) in the locale's alternative representation.
        "%Ex": "%m/%d/%y",
        // Replaced by the locale's alternative date representation.
        "%EX": "%H:%M:%S",
        // Replaced by the locale's alternative time representation.
        "%Ey": "%y",
        // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        "%EY": "%Y",
        // Replaced by the full alternative year representation.
        "%Od": "%d",
        // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        "%Oe": "%e",
        // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        "%OH": "%H",
        // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        "%OI": "%I",
        // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        "%Om": "%m",
        // Replaced by the month using the locale's alternative numeric symbols.
        "%OM": "%M",
        // Replaced by the minutes using the locale's alternative numeric symbols.
        "%OS": "%S",
        // Replaced by the seconds using the locale's alternative numeric symbols.
        "%Ou": "%u",
        // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        "%OU": "%U",
        // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        "%OV": "%V",
        // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        "%Ow": "%w",
        // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        "%OW": "%W",
        // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        "%Oy": "%y"
        // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function leadingSomething(value, digits, character) {
        var str = typeof value == "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date2) {
        var thisDate = addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          }
          return thisDate.getFullYear();
        }
        return thisDate.getFullYear() - 1;
      }
      var EXPANSION_RULES_2 = {
        "%a": (date2) => WEEKDAYS[date2.tm_wday].substring(0, 3),
        "%A": (date2) => WEEKDAYS[date2.tm_wday],
        "%b": (date2) => MONTHS[date2.tm_mon].substring(0, 3),
        "%B": (date2) => MONTHS[date2.tm_mon],
        "%C": (date2) => {
          var year = date2.tm_year + 1900;
          return leadingNulls(year / 100 | 0, 2);
        },
        "%d": (date2) => leadingNulls(date2.tm_mday, 2),
        "%e": (date2) => leadingSomething(date2.tm_mday, 2, " "),
        "%g": (date2) => {
          return getWeekBasedYear(date2).toString().substring(2);
        },
        "%G": getWeekBasedYear,
        "%H": (date2) => leadingNulls(date2.tm_hour, 2),
        "%I": (date2) => {
          var twelveHour = date2.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        "%j": (date2) => {
          return leadingNulls(date2.tm_mday + arraySum(isLeapYear(date2.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
        },
        "%m": (date2) => leadingNulls(date2.tm_mon + 1, 2),
        "%M": (date2) => leadingNulls(date2.tm_min, 2),
        "%n": () => "\n",
        "%p": (date2) => {
          if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
            return "AM";
          }
          return "PM";
        },
        "%S": (date2) => leadingNulls(date2.tm_sec, 2),
        "%t": () => "	",
        "%u": (date2) => date2.tm_wday || 7,
        "%U": (date2) => {
          var days = date2.tm_yday + 7 - date2.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        "%V": (date2) => {
          var val = Math.floor((date2.tm_yday + 7 - (date2.tm_wday + 6) % 7) / 7);
          if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
            if (dec31 == 4 || dec31 == 5 && isLeapYear(date2.tm_year % 400 - 1)) {
              val++;
            }
          } else if (val == 53) {
            var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date2.tm_year)))
              val = 1;
          }
          return leadingNulls(val, 2);
        },
        "%w": (date2) => date2.tm_wday,
        "%W": (date2) => {
          var days = date2.tm_yday + 7 - (date2.tm_wday + 6) % 7;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        "%y": (date2) => {
          return (date2.tm_year + 1900).toString().substring(2);
        },
        // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
        "%Y": (date2) => date2.tm_year + 1900,
        "%z": (date2) => {
          var off = date2.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = off / 60 * 100 + off % 60;
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
        },
        "%Z": (date2) => date2.tm_zone,
        "%%": () => "%"
      };
      pattern = pattern.replace(/%%/g, "\0\0");
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, "%");
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    };
    var _strftime_l = (s, maxsize, format, tm, loc) => {
      return _strftime(s, maxsize, format, tm);
    };
    var wasmTableMirror = [];
    var wasmTable;
    var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
      return func;
    };
    var getCFunc = (ident) => {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func;
    };
    var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
    var stringToUTF8OnStack = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    };
    var ccall = (ident, returnType, argTypes, args, opts) => {
      var toC = {
        "string": (str) => {
          var ret2 = 0;
          if (str !== null && str !== void 0 && str !== 0) {
            ret2 = stringToUTF8OnStack(str);
          }
          return ret2;
        },
        "array": (arr) => {
          var ret2 = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret2);
          return ret2;
        }
      };
      function convertReturnValue(ret2) {
        if (returnType === "string") {
          return UTF8ToString(ret2);
        }
        if (returnType === "boolean") return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== "array", 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func(...cArgs);
      function onDone(ret2) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret2);
      }
      ret = onDone(ret);
      return ret;
    };
    var cwrap = (ident, returnType, argTypes, opts) => {
      return (...args) => ccall(ident, returnType, argTypes, args, opts);
    };
    var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
    ;
    var UTF16ToString = (ptr, maxBytesToRead) => {
      assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
      var endPtr = ptr;
      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2;
      while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder)
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      var str = "";
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = HEAP16[ptr + i * 2 >> 1];
        if (codeUnit == 0) break;
        str += String.fromCharCode(codeUnit);
      }
      return str;
    };
    var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
      assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      maxBytesToWrite ?? (maxBytesToWrite = 2147483647);
      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    };
    FS.createPreloadedFile = FS_createPreloadedFile;
    FS.staticInit();
    ;
    function checkIncomingModuleAPI() {
      ignoredModuleProp("fetchSettings");
    }
    var wasmImports = {
      /** @export */
      __assert_fail: ___assert_fail,
      /** @export */
      __syscall_fcntl64: ___syscall_fcntl64,
      /** @export */
      __syscall_fstat64: ___syscall_fstat64,
      /** @export */
      __syscall_getdents64: ___syscall_getdents64,
      /** @export */
      __syscall_ioctl: ___syscall_ioctl,
      /** @export */
      __syscall_lstat64: ___syscall_lstat64,
      /** @export */
      __syscall_newfstatat: ___syscall_newfstatat,
      /** @export */
      __syscall_openat: ___syscall_openat,
      /** @export */
      __syscall_rmdir: ___syscall_rmdir,
      /** @export */
      __syscall_stat64: ___syscall_stat64,
      /** @export */
      __syscall_unlinkat: ___syscall_unlinkat,
      /** @export */
      _abort_js: __abort_js,
      /** @export */
      _emscripten_memcpy_js: __emscripten_memcpy_js,
      /** @export */
      _emscripten_throw_longjmp: __emscripten_throw_longjmp,
      /** @export */
      _gmtime_js: __gmtime_js,
      /** @export */
      _localtime_js: __localtime_js,
      /** @export */
      _tzset_js: __tzset_js,
      /** @export */
      emscripten_date_now: _emscripten_date_now,
      /** @export */
      emscripten_errn: _emscripten_errn,
      /** @export */
      emscripten_resize_heap: _emscripten_resize_heap,
      /** @export */
      environ_get: _environ_get,
      /** @export */
      environ_sizes_get: _environ_sizes_get,
      /** @export */
      fd_close: _fd_close,
      /** @export */
      fd_read: _fd_read,
      /** @export */
      fd_seek: _fd_seek,
      /** @export */
      fd_write: _fd_write,
      /** @export */
      invoke_ii,
      /** @export */
      invoke_iii,
      /** @export */
      invoke_iiii,
      /** @export */
      invoke_iiiii,
      /** @export */
      invoke_v,
      /** @export */
      invoke_vi,
      /** @export */
      invoke_viii,
      /** @export */
      invoke_viiii,
      /** @export */
      strftime_l: _strftime_l
    };
    var wasmExports = createWasm();
    var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors", 0);
    var _PDFiumExt_Init = Module["_PDFiumExt_Init"] = createExportWrapper("PDFiumExt_Init", 0);
    var _PDFiumExt_OpenFileWriter = Module["_PDFiumExt_OpenFileWriter"] = createExportWrapper("PDFiumExt_OpenFileWriter", 0);
    var _PDFiumExt_GetFileWriterSize = Module["_PDFiumExt_GetFileWriterSize"] = createExportWrapper("PDFiumExt_GetFileWriterSize", 1);
    var _PDFiumExt_GetFileWriterData = Module["_PDFiumExt_GetFileWriterData"] = createExportWrapper("PDFiumExt_GetFileWriterData", 3);
    var _PDFiumExt_CloseFileWriter = Module["_PDFiumExt_CloseFileWriter"] = createExportWrapper("PDFiumExt_CloseFileWriter", 1);
    var _PDFiumExt_SaveAsCopy = Module["_PDFiumExt_SaveAsCopy"] = createExportWrapper("PDFiumExt_SaveAsCopy", 2);
    var _PDFiumExt_OpenFormFillInfo = Module["_PDFiumExt_OpenFormFillInfo"] = createExportWrapper("PDFiumExt_OpenFormFillInfo", 0);
    var _PDFiumExt_CloseFormFillInfo = Module["_PDFiumExt_CloseFormFillInfo"] = createExportWrapper("PDFiumExt_CloseFormFillInfo", 1);
    var _PDFiumExt_InitFormFillEnvironment = Module["_PDFiumExt_InitFormFillEnvironment"] = createExportWrapper("PDFiumExt_InitFormFillEnvironment", 2);
    var _PDFiumExt_ExitFormFillEnvironment = Module["_PDFiumExt_ExitFormFillEnvironment"] = createExportWrapper("PDFiumExt_ExitFormFillEnvironment", 1);
    var _FPDFPage_CreateAnnot = Module["_FPDFPage_CreateAnnot"] = createExportWrapper("FPDFPage_CreateAnnot", 2);
    var _FPDFPage_GetAnnotCount = Module["_FPDFPage_GetAnnotCount"] = createExportWrapper("FPDFPage_GetAnnotCount", 1);
    var _FPDFPage_GetAnnot = Module["_FPDFPage_GetAnnot"] = createExportWrapper("FPDFPage_GetAnnot", 2);
    var _FPDFPage_CloseAnnot = Module["_FPDFPage_CloseAnnot"] = createExportWrapper("FPDFPage_CloseAnnot", 1);
    var _FPDFPage_RemoveAnnot = Module["_FPDFPage_RemoveAnnot"] = createExportWrapper("FPDFPage_RemoveAnnot", 2);
    var _FPDFAnnot_GetSubtype = Module["_FPDFAnnot_GetSubtype"] = createExportWrapper("FPDFAnnot_GetSubtype", 1);
    var _FPDFAnnot_AddInkStroke = Module["_FPDFAnnot_AddInkStroke"] = createExportWrapper("FPDFAnnot_AddInkStroke", 3);
    var _FPDFAnnot_RemoveInkList = Module["_FPDFAnnot_RemoveInkList"] = createExportWrapper("FPDFAnnot_RemoveInkList", 1);
    var _FPDFAnnot_AppendObject = Module["_FPDFAnnot_AppendObject"] = createExportWrapper("FPDFAnnot_AppendObject", 2);
    var _FPDFAnnot_GetObjectCount = Module["_FPDFAnnot_GetObjectCount"] = createExportWrapper("FPDFAnnot_GetObjectCount", 1);
    var _FPDFAnnot_GetObject = Module["_FPDFAnnot_GetObject"] = createExportWrapper("FPDFAnnot_GetObject", 2);
    var _FPDFAnnot_GetColor = Module["_FPDFAnnot_GetColor"] = createExportWrapper("FPDFAnnot_GetColor", 6);
    var _FPDFAnnot_SetRect = Module["_FPDFAnnot_SetRect"] = createExportWrapper("FPDFAnnot_SetRect", 2);
    var _FPDFAnnot_GetRect = Module["_FPDFAnnot_GetRect"] = createExportWrapper("FPDFAnnot_GetRect", 2);
    var _FPDFAnnot_GetVertices = Module["_FPDFAnnot_GetVertices"] = createExportWrapper("FPDFAnnot_GetVertices", 3);
    var _FPDFAnnot_GetInkListCount = Module["_FPDFAnnot_GetInkListCount"] = createExportWrapper("FPDFAnnot_GetInkListCount", 1);
    var _FPDFAnnot_GetInkListPath = Module["_FPDFAnnot_GetInkListPath"] = createExportWrapper("FPDFAnnot_GetInkListPath", 4);
    var _FPDFAnnot_GetLine = Module["_FPDFAnnot_GetLine"] = createExportWrapper("FPDFAnnot_GetLine", 3);
    var _FPDFAnnot_GetStringValue = Module["_FPDFAnnot_GetStringValue"] = createExportWrapper("FPDFAnnot_GetStringValue", 4);
    var _FPDFAnnot_GetAP = Module["_FPDFAnnot_GetAP"] = createExportWrapper("FPDFAnnot_GetAP", 4);
    var _FPDFAnnot_GetLinkedAnnot = Module["_FPDFAnnot_GetLinkedAnnot"] = createExportWrapper("FPDFAnnot_GetLinkedAnnot", 2);
    var _FPDFAnnot_GetFormFieldFlags = Module["_FPDFAnnot_GetFormFieldFlags"] = createExportWrapper("FPDFAnnot_GetFormFieldFlags", 2);
    var _FPDFAnnot_GetFormFieldName = Module["_FPDFAnnot_GetFormFieldName"] = createExportWrapper("FPDFAnnot_GetFormFieldName", 4);
    var _FPDFAnnot_GetFormFieldType = Module["_FPDFAnnot_GetFormFieldType"] = createExportWrapper("FPDFAnnot_GetFormFieldType", 2);
    var _FPDFAnnot_GetFormFieldAlternateName = Module["_FPDFAnnot_GetFormFieldAlternateName"] = createExportWrapper("FPDFAnnot_GetFormFieldAlternateName", 4);
    var _FPDFAnnot_GetFormFieldValue = Module["_FPDFAnnot_GetFormFieldValue"] = createExportWrapper("FPDFAnnot_GetFormFieldValue", 4);
    var _FPDFAnnot_GetOptionCount = Module["_FPDFAnnot_GetOptionCount"] = createExportWrapper("FPDFAnnot_GetOptionCount", 2);
    var _FPDFAnnot_GetOptionLabel = Module["_FPDFAnnot_GetOptionLabel"] = createExportWrapper("FPDFAnnot_GetOptionLabel", 5);
    var _FPDFAnnot_IsOptionSelected = Module["_FPDFAnnot_IsOptionSelected"] = createExportWrapper("FPDFAnnot_IsOptionSelected", 3);
    var _FPDFAnnot_IsChecked = Module["_FPDFAnnot_IsChecked"] = createExportWrapper("FPDFAnnot_IsChecked", 2);
    var _FPDFAnnot_SetFocusableSubtypes = Module["_FPDFAnnot_SetFocusableSubtypes"] = createExportWrapper("FPDFAnnot_SetFocusableSubtypes", 3);
    var _FPDFAnnot_GetLink = Module["_FPDFAnnot_GetLink"] = createExportWrapper("FPDFAnnot_GetLink", 1);
    var _FPDFDoc_GetAttachmentCount = Module["_FPDFDoc_GetAttachmentCount"] = createExportWrapper("FPDFDoc_GetAttachmentCount", 1);
    var _FPDFDoc_GetAttachment = Module["_FPDFDoc_GetAttachment"] = createExportWrapper("FPDFDoc_GetAttachment", 2);
    var _FPDFAttachment_GetName = Module["_FPDFAttachment_GetName"] = createExportWrapper("FPDFAttachment_GetName", 3);
    var _FPDFAttachment_GetStringValue = Module["_FPDFAttachment_GetStringValue"] = createExportWrapper("FPDFAttachment_GetStringValue", 4);
    var _FPDFAttachment_GetFile = Module["_FPDFAttachment_GetFile"] = createExportWrapper("FPDFAttachment_GetFile", 4);
    var _FPDFBookmark_GetFirstChild = Module["_FPDFBookmark_GetFirstChild"] = createExportWrapper("FPDFBookmark_GetFirstChild", 2);
    var _FPDFBookmark_GetNextSibling = Module["_FPDFBookmark_GetNextSibling"] = createExportWrapper("FPDFBookmark_GetNextSibling", 2);
    var _FPDFBookmark_GetTitle = Module["_FPDFBookmark_GetTitle"] = createExportWrapper("FPDFBookmark_GetTitle", 3);
    var _FPDFBookmark_Find = Module["_FPDFBookmark_Find"] = createExportWrapper("FPDFBookmark_Find", 2);
    var _FPDFBookmark_GetDest = Module["_FPDFBookmark_GetDest"] = createExportWrapper("FPDFBookmark_GetDest", 2);
    var _FPDFBookmark_GetAction = Module["_FPDFBookmark_GetAction"] = createExportWrapper("FPDFBookmark_GetAction", 1);
    var _FPDFAction_GetType = Module["_FPDFAction_GetType"] = createExportWrapper("FPDFAction_GetType", 1);
    var _FPDFAction_GetDest = Module["_FPDFAction_GetDest"] = createExportWrapper("FPDFAction_GetDest", 2);
    var _FPDFAction_GetFilePath = Module["_FPDFAction_GetFilePath"] = createExportWrapper("FPDFAction_GetFilePath", 3);
    var _FPDFAction_GetURIPath = Module["_FPDFAction_GetURIPath"] = createExportWrapper("FPDFAction_GetURIPath", 4);
    var _FPDFDest_GetDestPageIndex = Module["_FPDFDest_GetDestPageIndex"] = createExportWrapper("FPDFDest_GetDestPageIndex", 2);
    var _FPDFDest_GetView = Module["_FPDFDest_GetView"] = createExportWrapper("FPDFDest_GetView", 3);
    var _FPDFDest_GetLocationInPage = Module["_FPDFDest_GetLocationInPage"] = createExportWrapper("FPDFDest_GetLocationInPage", 7);
    var _FPDFLink_GetDest = Module["_FPDFLink_GetDest"] = createExportWrapper("FPDFLink_GetDest", 2);
    var _FPDFLink_GetAction = Module["_FPDFLink_GetAction"] = createExportWrapper("FPDFLink_GetAction", 1);
    var _FPDF_GetMetaText = Module["_FPDF_GetMetaText"] = createExportWrapper("FPDF_GetMetaText", 4);
    var _FPDFPageObj_NewImageObj = Module["_FPDFPageObj_NewImageObj"] = createExportWrapper("FPDFPageObj_NewImageObj", 1);
    var _FPDFImageObj_SetBitmap = Module["_FPDFImageObj_SetBitmap"] = createExportWrapper("FPDFImageObj_SetBitmap", 4);
    var _FPDFImageObj_GetBitmap = Module["_FPDFImageObj_GetBitmap"] = createExportWrapper("FPDFImageObj_GetBitmap", 1);
    var _FPDF_CreateNewDocument = Module["_FPDF_CreateNewDocument"] = createExportWrapper("FPDF_CreateNewDocument", 0);
    var _FPDFPage_InsertObject = Module["_FPDFPage_InsertObject"] = createExportWrapper("FPDFPage_InsertObject", 2);
    var _FPDFPageObj_Destroy = Module["_FPDFPageObj_Destroy"] = createExportWrapper("FPDFPageObj_Destroy", 1);
    var _FPDFPageObj_GetType = Module["_FPDFPageObj_GetType"] = createExportWrapper("FPDFPageObj_GetType", 1);
    var _FPDFPage_GenerateContent = Module["_FPDFPage_GenerateContent"] = createExportWrapper("FPDFPage_GenerateContent", 1);
    var _FPDFPageObj_Transform = Module["_FPDFPageObj_Transform"] = createExportWrapper("FPDFPageObj_Transform", 7);
    var _FPDFPageObj_GetMatrix = Module["_FPDFPageObj_GetMatrix"] = createExportWrapper("FPDFPageObj_GetMatrix", 2);
    var _FPDFPageObj_SetMatrix = Module["_FPDFPageObj_SetMatrix"] = createExportWrapper("FPDFPageObj_SetMatrix", 2);
    var _FPDFPageObj_GetBounds = Module["_FPDFPageObj_GetBounds"] = createExportWrapper("FPDFPageObj_GetBounds", 5);
    var _FPDFFormObj_CountObjects = Module["_FPDFFormObj_CountObjects"] = createExportWrapper("FPDFFormObj_CountObjects", 1);
    var _FPDFFormObj_GetObject = Module["_FPDFFormObj_GetObject"] = createExportWrapper("FPDFFormObj_GetObject", 2);
    var _FPDFPath_CountSegments = Module["_FPDFPath_CountSegments"] = createExportWrapper("FPDFPath_CountSegments", 1);
    var _FPDFPath_GetPathSegment = Module["_FPDFPath_GetPathSegment"] = createExportWrapper("FPDFPath_GetPathSegment", 2);
    var _FPDFPathSegment_GetPoint = Module["_FPDFPathSegment_GetPoint"] = createExportWrapper("FPDFPathSegment_GetPoint", 3);
    var _FPDFPathSegment_GetType = Module["_FPDFPathSegment_GetType"] = createExportWrapper("FPDFPathSegment_GetType", 1);
    var _FPDFPathSegment_GetClose = Module["_FPDFPathSegment_GetClose"] = createExportWrapper("FPDFPathSegment_GetClose", 1);
    var _malloc = Module["_malloc"] = createExportWrapper("malloc", 1);
    var _free = Module["_free"] = createExportWrapper("free", 1);
    var _FORM_ReplaceSelection = Module["_FORM_ReplaceSelection"] = createExportWrapper("FORM_ReplaceSelection", 3);
    var _FORM_SelectAllText = Module["_FORM_SelectAllText"] = createExportWrapper("FORM_SelectAllText", 2);
    var _FORM_ForceToKillFocus = Module["_FORM_ForceToKillFocus"] = createExportWrapper("FORM_ForceToKillFocus", 1);
    var _FORM_SetFocusedAnnot = Module["_FORM_SetFocusedAnnot"] = createExportWrapper("FORM_SetFocusedAnnot", 2);
    var _FORM_SetIndexSelected = Module["_FORM_SetIndexSelected"] = createExportWrapper("FORM_SetIndexSelected", 4);
    var _FPDF_ImportPagesByIndex = Module["_FPDF_ImportPagesByIndex"] = createExportWrapper("FPDF_ImportPagesByIndex", 5);
    var _FPDF_ImportPages = Module["_FPDF_ImportPages"] = createExportWrapper("FPDF_ImportPages", 4);
    var _FPDF_GetSignatureCount = Module["_FPDF_GetSignatureCount"] = createExportWrapper("FPDF_GetSignatureCount", 1);
    var _FPDF_GetSignatureObject = Module["_FPDF_GetSignatureObject"] = createExportWrapper("FPDF_GetSignatureObject", 2);
    var _FPDFSignatureObj_GetContents = Module["_FPDFSignatureObj_GetContents"] = createExportWrapper("FPDFSignatureObj_GetContents", 3);
    var _FPDFSignatureObj_GetByteRange = Module["_FPDFSignatureObj_GetByteRange"] = createExportWrapper("FPDFSignatureObj_GetByteRange", 3);
    var _FPDFSignatureObj_GetSubFilter = Module["_FPDFSignatureObj_GetSubFilter"] = createExportWrapper("FPDFSignatureObj_GetSubFilter", 3);
    var _FPDFSignatureObj_GetReason = Module["_FPDFSignatureObj_GetReason"] = createExportWrapper("FPDFSignatureObj_GetReason", 3);
    var _FPDFSignatureObj_GetTime = Module["_FPDFSignatureObj_GetTime"] = createExportWrapper("FPDFSignatureObj_GetTime", 3);
    var _FPDFSignatureObj_GetDocMDPPermission = Module["_FPDFSignatureObj_GetDocMDPPermission"] = createExportWrapper("FPDFSignatureObj_GetDocMDPPermission", 1);
    var _FPDFText_LoadPage = Module["_FPDFText_LoadPage"] = createExportWrapper("FPDFText_LoadPage", 1);
    var _FPDFText_ClosePage = Module["_FPDFText_ClosePage"] = createExportWrapper("FPDFText_ClosePage", 1);
    var _FPDFText_CountChars = Module["_FPDFText_CountChars"] = createExportWrapper("FPDFText_CountChars", 1);
    var _FPDFText_GetFontSize = Module["_FPDFText_GetFontSize"] = createExportWrapper("FPDFText_GetFontSize", 2);
    var _FPDFText_GetFontInfo = Module["_FPDFText_GetFontInfo"] = createExportWrapper("FPDFText_GetFontInfo", 5);
    var _FPDFText_GetCharIndexAtPos = Module["_FPDFText_GetCharIndexAtPos"] = createExportWrapper("FPDFText_GetCharIndexAtPos", 5);
    var _FPDFText_GetText = Module["_FPDFText_GetText"] = createExportWrapper("FPDFText_GetText", 4);
    var _FPDFText_CountRects = Module["_FPDFText_CountRects"] = createExportWrapper("FPDFText_CountRects", 3);
    var _FPDFText_GetRect = Module["_FPDFText_GetRect"] = createExportWrapper("FPDFText_GetRect", 6);
    var _FPDFText_GetBoundedText = Module["_FPDFText_GetBoundedText"] = createExportWrapper("FPDFText_GetBoundedText", 7);
    var _FPDFText_FindStart = Module["_FPDFText_FindStart"] = createExportWrapper("FPDFText_FindStart", 4);
    var _FPDFText_FindNext = Module["_FPDFText_FindNext"] = createExportWrapper("FPDFText_FindNext", 1);
    var _FPDFText_FindPrev = Module["_FPDFText_FindPrev"] = createExportWrapper("FPDFText_FindPrev", 1);
    var _FPDFText_GetSchResultIndex = Module["_FPDFText_GetSchResultIndex"] = createExportWrapper("FPDFText_GetSchResultIndex", 1);
    var _FPDFText_GetSchCount = Module["_FPDFText_GetSchCount"] = createExportWrapper("FPDFText_GetSchCount", 1);
    var _FPDFText_FindClose = Module["_FPDFText_FindClose"] = createExportWrapper("FPDFText_FindClose", 1);
    var _FPDF_DestroyLibrary = Module["_FPDF_DestroyLibrary"] = createExportWrapper("FPDF_DestroyLibrary", 0);
    var _FPDF_LoadMemDocument = Module["_FPDF_LoadMemDocument"] = createExportWrapper("FPDF_LoadMemDocument", 3);
    var _FPDF_GetPageCount = Module["_FPDF_GetPageCount"] = createExportWrapper("FPDF_GetPageCount", 1);
    var _FPDF_LoadPage = Module["_FPDF_LoadPage"] = createExportWrapper("FPDF_LoadPage", 2);
    var _FPDF_RenderPageBitmap = Module["_FPDF_RenderPageBitmap"] = createExportWrapper("FPDF_RenderPageBitmap", 8);
    var _FPDF_ClosePage = Module["_FPDF_ClosePage"] = createExportWrapper("FPDF_ClosePage", 1);
    var _FPDF_CloseDocument = Module["_FPDF_CloseDocument"] = createExportWrapper("FPDF_CloseDocument", 1);
    var _FPDF_GetLastError = Module["_FPDF_GetLastError"] = createExportWrapper("FPDF_GetLastError", 0);
    var _FPDF_DeviceToPage = Module["_FPDF_DeviceToPage"] = createExportWrapper("FPDF_DeviceToPage", 10);
    var _FPDF_PageToDevice = Module["_FPDF_PageToDevice"] = createExportWrapper("FPDF_PageToDevice", 10);
    var _FPDFBitmap_Create = Module["_FPDFBitmap_Create"] = createExportWrapper("FPDFBitmap_Create", 3);
    var _FPDFBitmap_CreateEx = Module["_FPDFBitmap_CreateEx"] = createExportWrapper("FPDFBitmap_CreateEx", 5);
    var _FPDFBitmap_GetFormat = Module["_FPDFBitmap_GetFormat"] = createExportWrapper("FPDFBitmap_GetFormat", 1);
    var _FPDFBitmap_FillRect = Module["_FPDFBitmap_FillRect"] = createExportWrapper("FPDFBitmap_FillRect", 6);
    var _FPDFBitmap_GetBuffer = Module["_FPDFBitmap_GetBuffer"] = createExportWrapper("FPDFBitmap_GetBuffer", 1);
    var _FPDFBitmap_GetWidth = Module["_FPDFBitmap_GetWidth"] = createExportWrapper("FPDFBitmap_GetWidth", 1);
    var _FPDFBitmap_GetHeight = Module["_FPDFBitmap_GetHeight"] = createExportWrapper("FPDFBitmap_GetHeight", 1);
    var _FPDFBitmap_Destroy = Module["_FPDFBitmap_Destroy"] = createExportWrapper("FPDFBitmap_Destroy", 1);
    var _FPDF_GetPageSizeByIndexF = Module["_FPDF_GetPageSizeByIndexF"] = createExportWrapper("FPDF_GetPageSizeByIndexF", 3);
    var _fflush = createExportWrapper("fflush", 1);
    var _setThrew = createExportWrapper("setThrew", 2);
    var __emscripten_tempret_set = createExportWrapper("_emscripten_tempret_set", 1);
    var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports["emscripten_stack_init"])();
    var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports["emscripten_stack_get_free"])();
    var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports["emscripten_stack_get_base"])();
    var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports["emscripten_stack_get_end"])();
    var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"])(a0);
    var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(a0);
    var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"])();
    var dynCall_j = Module["dynCall_j"] = createExportWrapper("dynCall_j", 1);
    var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji", 2);
    var dynCall_iiij = Module["dynCall_iiij"] = createExportWrapper("dynCall_iiij", 5);
    var dynCall_jji = Module["dynCall_jji"] = createExportWrapper("dynCall_jji", 4);
    var dynCall_iji = Module["dynCall_iji"] = createExportWrapper("dynCall_iji", 4);
    var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii", 7);
    var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji", 5);
    var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji", 5);
    var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij", 7);
    var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj", 9);
    var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj", 10);
    function invoke_viii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iii(index, a1, a2) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vi(index, a1) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ii(index, a1) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_v(index) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    Module["wasmExports"] = wasmExports;
    Module["ccall"] = ccall;
    Module["cwrap"] = cwrap;
    Module["setValue"] = setValue;
    Module["getValue"] = getValue;
    Module["UTF8ToString"] = UTF8ToString;
    Module["stringToUTF8"] = stringToUTF8;
    Module["UTF16ToString"] = UTF16ToString;
    Module["stringToUTF16"] = stringToUTF16;
    var missingLibrarySymbols = [
      "writeI53ToI64",
      "writeI53ToI64Clamped",
      "writeI53ToI64Signaling",
      "writeI53ToU64Clamped",
      "writeI53ToU64Signaling",
      "readI53FromI64",
      "readI53FromU64",
      "convertI32PairToI53",
      "convertU32PairToI53",
      "getTempRet0",
      "setTempRet0",
      "exitJS",
      "inetPton4",
      "inetNtop4",
      "inetPton6",
      "inetNtop6",
      "readSockaddr",
      "writeSockaddr",
      "emscriptenLog",
      "readEmAsmArgs",
      "jstoi_q",
      "listenOnce",
      "autoResumeAudioContext",
      "dynCallLegacy",
      "getDynCaller",
      "dynCall",
      "handleException",
      "keepRuntimeAlive",
      "runtimeKeepalivePush",
      "runtimeKeepalivePop",
      "callUserCallback",
      "maybeExit",
      "asmjsMangle",
      "HandleAllocator",
      "getNativeTypeSize",
      "STACK_SIZE",
      "STACK_ALIGN",
      "POINTER_SIZE",
      "ASSERTIONS",
      "uleb128Encode",
      "sigToWasmTypes",
      "generateFuncType",
      "convertJsFunctionToWasm",
      "getEmptyTableSlot",
      "updateTableMap",
      "getFunctionAddress",
      "addFunction",
      "removeFunction",
      "reallyNegative",
      "unSign",
      "strLen",
      "reSign",
      "formatString",
      "intArrayToString",
      "AsciiToString",
      "lengthBytesUTF16",
      "UTF32ToString",
      "stringToUTF32",
      "lengthBytesUTF32",
      "stringToNewUTF8",
      "registerKeyEventCallback",
      "maybeCStringToJsString",
      "findEventTarget",
      "getBoundingClientRect",
      "fillMouseEventData",
      "registerMouseEventCallback",
      "registerWheelEventCallback",
      "registerUiEventCallback",
      "registerFocusEventCallback",
      "fillDeviceOrientationEventData",
      "registerDeviceOrientationEventCallback",
      "fillDeviceMotionEventData",
      "registerDeviceMotionEventCallback",
      "screenOrientation",
      "fillOrientationChangeEventData",
      "registerOrientationChangeEventCallback",
      "fillFullscreenChangeEventData",
      "registerFullscreenChangeEventCallback",
      "JSEvents_requestFullscreen",
      "JSEvents_resizeCanvasForFullscreen",
      "registerRestoreOldStyle",
      "hideEverythingExceptGivenElement",
      "restoreHiddenElements",
      "setLetterbox",
      "softFullscreenResizeWebGLRenderTarget",
      "doRequestFullscreen",
      "fillPointerlockChangeEventData",
      "registerPointerlockChangeEventCallback",
      "registerPointerlockErrorEventCallback",
      "requestPointerLock",
      "fillVisibilityChangeEventData",
      "registerVisibilityChangeEventCallback",
      "registerTouchEventCallback",
      "fillGamepadEventData",
      "registerGamepadEventCallback",
      "registerBeforeUnloadEventCallback",
      "fillBatteryEventData",
      "battery",
      "registerBatteryEventCallback",
      "setCanvasElementSize",
      "getCanvasElementSize",
      "jsStackTrace",
      "getCallstack",
      "convertPCtoSourceLocation",
      "checkWasiClock",
      "wasiRightsToMuslOFlags",
      "wasiOFlagsToMuslOFlags",
      "createDyncallWrapper",
      "safeSetTimeout",
      "setImmediateWrapped",
      "clearImmediateWrapped",
      "polyfillSetImmediate",
      "getPromise",
      "makePromise",
      "idsToPromises",
      "makePromiseCallback",
      "ExceptionInfo",
      "findMatchingCatch",
      "Browser_asyncPrepareDataCounter",
      "setMainLoop",
      "getSocketFromFD",
      "getSocketAddress",
      "FS_unlink",
      "FS_mkdirTree",
      "_setNetworkCallback",
      "heapObjectForWebGLType",
      "toTypedArrayIndex",
      "webgl_enable_ANGLE_instanced_arrays",
      "webgl_enable_OES_vertex_array_object",
      "webgl_enable_WEBGL_draw_buffers",
      "webgl_enable_WEBGL_multi_draw",
      "emscriptenWebGLGet",
      "computeUnpackAlignedImageSize",
      "colorChannelsInGlTextureFormat",
      "emscriptenWebGLGetTexPixelData",
      "emscriptenWebGLGetUniform",
      "webglGetUniformLocation",
      "webglPrepareUniformLocationsBeforeFirstUse",
      "webglGetLeftBracePos",
      "emscriptenWebGLGetVertexAttrib",
      "__glGetActiveAttribOrUniform",
      "writeGLArray",
      "registerWebGlEventCallback",
      "runAndAbortIfError",
      "ALLOC_NORMAL",
      "ALLOC_STACK",
      "allocate",
      "writeStringToMemory",
      "writeAsciiToMemory",
      "setErrNo",
      "demangle",
      "stackTrace"
    ];
    missingLibrarySymbols.forEach(missingLibrarySymbol);
    var unexportedSymbols = [
      "run",
      "addOnPreRun",
      "addOnInit",
      "addOnPreMain",
      "addOnExit",
      "addOnPostRun",
      "addRunDependency",
      "removeRunDependency",
      "FS_createFolder",
      "FS_createPath",
      "FS_createLazyFile",
      "FS_createLink",
      "FS_createDevice",
      "FS_readFile",
      "out",
      "err",
      "callMain",
      "abort",
      "wasmMemory",
      "writeStackCookie",
      "checkStackCookie",
      "convertI32PairToI53Checked",
      "stackSave",
      "stackRestore",
      "stackAlloc",
      "ptrToString",
      "zeroMemory",
      "getHeapMax",
      "growMemory",
      "ENV",
      "MONTH_DAYS_REGULAR",
      "MONTH_DAYS_LEAP",
      "MONTH_DAYS_REGULAR_CUMULATIVE",
      "MONTH_DAYS_LEAP_CUMULATIVE",
      "isLeapYear",
      "ydayFromDate",
      "arraySum",
      "addDays",
      "ERRNO_CODES",
      "ERRNO_MESSAGES",
      "DNS",
      "Protocols",
      "Sockets",
      "initRandomFill",
      "randomFill",
      "timers",
      "warnOnce",
      "readEmAsmArgsArray",
      "jstoi_s",
      "getExecutableName",
      "asyncLoad",
      "alignMemory",
      "mmapAlloc",
      "wasmTable",
      "noExitRuntime",
      "getCFunc",
      "freeTableIndexes",
      "functionsInTableMap",
      "PATH",
      "PATH_FS",
      "UTF8Decoder",
      "UTF8ArrayToString",
      "stringToUTF8Array",
      "lengthBytesUTF8",
      "intArrayFromString",
      "stringToAscii",
      "UTF16Decoder",
      "stringToUTF8OnStack",
      "writeArrayToMemory",
      "JSEvents",
      "specialHTMLTargets",
      "findCanvasEventTarget",
      "currentFullscreenStrategy",
      "restoreOldWindowedStyle",
      "UNWIND_CACHE",
      "ExitStatus",
      "getEnvStrings",
      "doReadv",
      "doWritev",
      "promiseMap",
      "uncaughtExceptionCount",
      "exceptionLast",
      "exceptionCaught",
      "Browser",
      "getPreloadedImageData__data",
      "wget",
      "SYSCALLS",
      "preloadPlugins",
      "FS_createPreloadedFile",
      "FS_modeStringToFlags",
      "FS_getMode",
      "FS_stdin_getChar_buffer",
      "FS_stdin_getChar",
      "FS",
      "FS_createDataFile",
      "MEMFS",
      "TTY",
      "PIPEFS",
      "SOCKFS",
      "tempFixedLengthArray",
      "miniTempWebGLFloatBuffers",
      "miniTempWebGLIntBuffers",
      "GL",
      "AL",
      "GLUT",
      "EGL",
      "GLEW",
      "IDBStore",
      "SDL",
      "SDL_gfx",
      "allocateUTF8",
      "allocateUTF8OnStack"
    ];
    unexportedSymbols.forEach(unexportedRuntimeSymbol);
    var calledRun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function stackCheckInit() {
      _emscripten_stack_init();
      writeStackCookie();
    }
    function run() {
      if (runDependencies > 0) {
        return;
      }
      stackCheckInit();
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
      checkStackCookie();
    }
    function checkUnflushedContent() {
      var oldOut = out;
      var oldErr = err;
      var has = false;
      out = err = (x) => {
        has = true;
      };
      try {
        _fflush(0);
        ["stdout", "stderr"].forEach(function(name) {
          var info = FS.analyzePath("/dev/" + name);
          if (!info) return;
          var stream = info.object;
          var rdev = stream.rdev;
          var tty = TTY.ttys[rdev];
          if (tty?.output?.length) {
            has = true;
          }
        });
      } catch (e) {
      }
      out = oldOut;
      err = oldErr;
      if (has) {
        warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
      }
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    moduleRtn = readyPromise;
    for (const prop of Object.keys(Module)) {
      if (!(prop in moduleArg)) {
        Object.defineProperty(moduleArg, prop, {
          configurable: true,
          get() {
            abort(`Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
          }
        });
      }
    }
    return moduleRtn;
  };
})();
var pdfium_default = createPdfium;
async function init(moduleOverrides) {
  const pdfium = await pdfium_default(moduleOverrides);
  const module = {
    pdfium
  };
  for (const key in functions) {
    const ident = key;
    const args = functions[ident][0];
    const ret = functions[ident][1];
    module[ident] = pdfium.cwrap(key, ret, args);
  }
  return module;
}
function swap(size) {
  const { width, height } = size;
  return {
    width: height,
    height: width
  };
}
function transformSize(size, rotation, scaleFactor) {
  size = rotation % 2 === 0 ? size : swap(size);
  return {
    width: Math.ceil(size.width * scaleFactor),
    height: Math.ceil(size.height * scaleFactor)
  };
}
var NoopLogger = class {
  /** {@inheritDoc Logger.debug} */
  debug() {
  }
  /** {@inheritDoc Logger.info} */
  info() {
  }
  /** {@inheritDoc Logger.warn} */
  warn() {
  }
  /** {@inheritDoc Logger.error} */
  error() {
  }
  /** {@inheritDoc Logger.perf} */
  perf() {
  }
};
function unionFlags(flags) {
  return flags.reduce(
    (flag, currFlag) => {
      return flag | currFlag;
    },
    0
    /* None */
  );
}
function compareSearchTarget(targetA, targetB) {
  const flagA = unionFlags(targetA.flags);
  const flagB = unionFlags(targetB.flags);
  return flagA === flagB && targetA.keyword === targetB.keyword;
}
var TaskAbortError = class extends Error {
};
var TaskBase = class _TaskBase {
  constructor() {
    this.state = {
      stage: 0
      /* Pending */
    };
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
  }
  /**
   * Create a task that has been resolved with value
   * @param result - resolved value
   * @returns resolved task
   */
  static resolve(result) {
    const task = new _TaskBase();
    task.resolve(result);
    return task;
  }
  /**
   * Create a task that has been rejected with error
   * @param error - rejected error
   * @returns rejected task
   */
  static reject(error) {
    const task = new _TaskBase();
    task.reject(error);
    return task;
  }
  /**
   * {@inheritDoc Task.wait}
   *
   * @virtual
   */
  process(resolvedCallback, rejectedCallback) {
    switch (this.state.stage) {
      case 0:
        this.resolvedCallbacks.push(resolvedCallback);
        this.rejectedCallbacks.push(rejectedCallback);
        break;
      case 1:
        resolvedCallback(this.state.result);
        break;
      case 2:
        rejectedCallback(this.state.error);
        break;
      case 3:
        rejectedCallback(this.state.error);
        break;
    }
  }
  /**
   * {@inheritDoc Task.resolve}
   *
   * @virtual
   */
  resolve(result) {
    if (this.state.stage === 0) {
      this.state = {
        stage: 1,
        result
      };
      for (const resolvedCallback of this.resolvedCallbacks) {
        try {
          resolvedCallback(result);
        } catch (e) {
        }
      }
      this.resolvedCallbacks = [];
      this.rejectedCallbacks = [];
    }
  }
  /**
   * {@inheritDoc Task.reject}
   *
   * @virtual
   */
  reject(error) {
    if (this.state.stage === 0) {
      this.state = {
        stage: 2,
        error
      };
      for (const rejectedCallback of this.rejectedCallbacks) {
        try {
          rejectedCallback(error);
        } catch (e) {
        }
      }
      this.resolvedCallbacks = [];
      this.rejectedCallbacks = [];
    }
  }
  /** {@inheritDoc Task.abort} */
  abort(error) {
    if (this.state.stage === 0) {
      this.state = {
        stage: 3,
        error: error || new TaskAbortError()
      };
      for (const rejectedCallback of this.rejectedCallbacks) {
        try {
          rejectedCallback(this.state.error);
        } catch (e) {
        }
      }
      this.resolvedCallbacks = [];
      this.rejectedCallbacks = [];
    }
  }
};
var PdfEngineError = class extends Error {
  /**
   *
   * @param message - error message
   * @param code - error code
   */
  constructor(message, code) {
    super(message);
    this.code = code;
  }
};
var LOG_SOURCE = "WebWorkerEngineRunner";
var LOG_CATEGORY = "Engine";
var EngineRunner = class {
  /**
   * Create instance of EngineRunnder
   * @param logger - logger instance
   */
  constructor(logger = new NoopLogger()) {
    this.logger = logger;
    this.execute = (request) => {
      this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "runner start exeucte request");
      if (!this.engine) {
        const response = {
          id: request.id,
          type: "ExecuteResponse",
          data: {
            type: "reject",
            error: new PdfEngineError("engine has not started yet")
          }
        };
        this.respond(response);
        return;
      }
      const engine = this.engine;
      const { name, args } = request.data;
      if (!engine[name]) {
        const response = {
          id: request.id,
          type: "ExecuteResponse",
          data: {
            type: "reject",
            error: new PdfEngineError("engine method has not supported yet")
          }
        };
        this.respond(response);
        return;
      }
      let task;
      switch (name) {
        case "isSupport":
          task = this.engine[name](...args);
          break;
        case "initialize":
          task = this.engine[name](...args);
          break;
        case "destroy":
          task = this.engine[name](...args);
          break;
        case "openDocument":
          task = this.engine[name](...args);
          break;
        case "getMetadata":
          task = this.engine[name](...args);
          break;
        case "getBookmarks":
          task = this.engine[name](...args);
          break;
        case "getSignatures":
          task = this.engine[name](...args);
          break;
        case "renderPage":
          task = this.engine[name](...args);
          break;
        case "renderPageRect":
          task = this.engine[name](...args);
          break;
        case "renderThumbnail":
          task = this.engine[name](...args);
          break;
        case "getPageAnnotations":
          task = this.engine[name](...args);
          break;
        case "createPageAnnotation":
          task = this.engine[name](...args);
          break;
        case "transformPageAnnotation":
          task = this.engine[name](...args);
          break;
        case "removePageAnnotation":
          task = this.engine[name](...args);
          break;
        case "getPageTextRects":
          task = this.engine[name](...args);
          break;
        case "startSearch":
          task = this.engine[name](...args);
          break;
        case "searchNext":
          task = this.engine[name](...args);
          break;
        case "searchPrev":
          task = this.engine[name](...args);
          break;
        case "stopSearch":
          task = this.engine[name](...args);
          break;
        case "closeDocument":
          task = this.engine[name](...args);
          break;
        case "saveAsCopy":
          task = this.engine[name](...args);
          break;
        case "getAttachments":
          task = this.engine[name](...args);
          break;
        case "readAttachmentContent":
          task = this.engine[name](...args);
          break;
        case "setFormFieldValue":
          task = this.engine[name](...args);
          break;
        case "extractPages":
          task = this.engine[name](...args);
          break;
        case "extractText":
          task = this.engine[name](...args);
          break;
        case "merge":
          task = this.engine[name](...args);
          break;
      }
      task.process(
        (result) => {
          const response = {
            id: request.id,
            type: "ExecuteResponse",
            data: {
              type: "resolve",
              result
            }
          };
          this.respond(response);
        },
        (error) => {
          const response = {
            id: request.id,
            type: "ExecuteResponse",
            data: {
              type: "reject",
              error
            }
          };
          this.respond(response);
        }
      );
    };
  }
  /**
   * Listening on post message
   */
  listen() {
    self.onmessage = (evt) => {
      return this.handle(evt);
    };
  }
  /**
   * Handle post message
   */
  handle(evt) {
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "webworker receive message event: ", evt.data);
    try {
      const request = evt.data;
      switch (request.type) {
        case "ExecuteRequest":
          this.execute(request);
          break;
      }
    } catch (e) {
      this.logger.info(LOG_SOURCE, LOG_CATEGORY, "webworker met error when processing message event:", e);
    }
  }
  /**
   * Send the ready response when pdf engine is ready
   * @returns
   *
   * @protected
   */
  ready() {
    this.listen();
    this.respond({
      id: "0",
      type: "ReadyResponse"
    });
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "runner is ready");
  }
  /**
   * Send back the response
   * @param response - response that needs sent back
   *
   * @protected
   */
  respond(response) {
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "runner respond: ", response);
    self.postMessage(response);
  }
};
function readString(wasmModule, readChars, parseChars, defaultLength = 100) {
  let buffer = wasmModule.wasmExports.malloc(defaultLength);
  for (let i = 0; i < defaultLength; i++) {
    wasmModule.HEAP8[buffer + i] = 0;
  }
  const actualLength = readChars(buffer, defaultLength);
  let str;
  if (actualLength > defaultLength) {
    wasmModule.wasmExports.free(buffer);
    buffer = wasmModule.wasmExports.malloc(actualLength);
    for (let i = 0; i < actualLength; i++) {
      wasmModule.HEAP8[buffer + i] = 0;
    }
    readChars(buffer, actualLength);
    str = parseChars(buffer);
  } else {
    str = parseChars(buffer);
  }
  wasmModule.wasmExports.free(buffer);
  return str;
}
function readArrayBuffer(wasmModule, readChars) {
  const bufferSize = readChars(0, 0);
  const bufferPtr = wasmModule.wasmExports.malloc(bufferSize);
  readChars(bufferPtr, bufferSize);
  const arrayBuffer = new ArrayBuffer(bufferSize);
  const view = new DataView(arrayBuffer);
  for (let i = 0; i < bufferSize; i++) {
    view.setInt8(i, wasmModule.getValue(bufferPtr + i, "i8"));
  }
  wasmModule.wasmExports.free(bufferPtr);
  return arrayBuffer;
}
var DPR = self.devicePixelRatio || 1;
var LOG_SOURCE2 = "PDFiumEngine";
var LOG_CATEGORY2 = "Engine";
var PdfiumEngine = class {
  /**
   * Create an instance of PdfiumEngine
   * @param wasmModule - pdfium wasm module
   * @param logger - logger instance
   */
  constructor(pdfiumModule, logger = new NoopLogger()) {
    this.pdfiumModule = pdfiumModule;
    this.logger = logger;
    this.docs = {};
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.initialize}
   *
   * @public
   */
  initialize() {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "initialize");
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Initialize`, "Begin", "General");
    this.pdfiumModule.PDFiumExt_Init();
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Initialize`, "End", "General");
    return TaskBase.resolve(true);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.destroy}
   *
   * @public
   */
  destroy() {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "destroy");
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Destroy`, "Begin", "General");
    this.pdfiumModule.FPDF_DestroyLibrary();
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Destroy`, "End", "General");
    return TaskBase.resolve(true);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.openDocument}
   *
   * @public
   */
  openDocument(file, password) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "openDocument", file, password);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `OpenDocument`, "Begin", file.id);
    const array = new Uint8Array(file.content);
    const length = array.length;
    const filePtr = this.malloc(length);
    this.pdfiumModule.pdfium.HEAPU8.set(array, filePtr);
    const passwordBytesSize = new TextEncoder().encode(password).length + 1;
    const passwordPtr = this.malloc(passwordBytesSize);
    this.pdfiumModule.pdfium.stringToUTF8(password, passwordPtr, passwordBytesSize);
    const docPtr = this.pdfiumModule.FPDF_LoadMemDocument(filePtr, length, passwordPtr);
    this.free(passwordPtr);
    if (!docPtr) {
      const lastError = this.pdfiumModule.FPDF_GetLastError();
      this.logger.error(LOG_SOURCE2, LOG_CATEGORY2, `FPDF_LoadMemDocument failed with ${lastError}`);
      this.free(filePtr);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `OpenDocument`, "End", file.id);
      return TaskBase.reject(new PdfEngineError(`FPDF_LoadMemDocument failed`, lastError));
    }
    const pageCount = this.pdfiumModule.FPDF_GetPageCount(docPtr);
    const pages = [];
    const sizePtr = this.malloc(8);
    for (let index = 0; index < pageCount; index++) {
      const result = this.pdfiumModule.FPDF_GetPageSizeByIndexF(docPtr, index, sizePtr);
      if (result === 0) {
        const lastError = this.pdfiumModule.FPDF_GetLastError();
        this.logger.error(LOG_SOURCE2, LOG_CATEGORY2, `FPDF_GetPageSizeByIndexF failed with ${lastError}`);
        this.free(sizePtr);
        this.pdfiumModule.FPDF_CloseDocument(docPtr);
        this.free(passwordPtr);
        this.free(filePtr);
        this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `OpenDocument`, "End", file.id);
        return TaskBase.reject(new PdfEngineError(`FPDF_GetPageSizeByIndexF failed`, lastError));
      }
      const page = {
        index,
        size: {
          width: this.pdfiumModule.pdfium.getValue(sizePtr, "float"),
          height: this.pdfiumModule.pdfium.getValue(sizePtr + 4, "float")
        }
      };
      pages.push(page);
    }
    this.free(sizePtr);
    const pdfDoc = {
      id: file.id,
      name: file.name,
      pageCount,
      pages
    };
    this.docs[file.id] = {
      filePtr,
      docPtr,
      searchContexts: /* @__PURE__ */ new Map()
    };
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `OpenDocument`, "End", file.id);
    return TaskBase.resolve(pdfDoc);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.getMetadata}
   *
   * @public
   */
  getMetadata(doc) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "getMetadata", doc);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetMetadata`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetMetadata`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const metadata = {
      title: this.readMetaText(docPtr, "Title"),
      author: this.readMetaText(docPtr, "Author"),
      subject: this.readMetaText(docPtr, "Subject"),
      keywords: this.readMetaText(docPtr, "Keywords"),
      producer: this.readMetaText(docPtr, "Producer"),
      creator: this.readMetaText(docPtr, "Creator"),
      creationDate: this.readMetaText(docPtr, "CreationDate"),
      modificationDate: this.readMetaText(docPtr, "ModDate")
    };
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetMetadata`, "End", doc.id);
    return TaskBase.resolve(metadata);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.getSignatures}
   *
   * @public
   */
  getSignatures(doc) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "getSignatures", doc);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetSignatures`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetSignatures`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const signatures = [];
    const count = this.pdfiumModule.FPDF_GetSignatureCount(docPtr);
    for (let i = 0; i < count; i++) {
      const signatureObjPtr = this.pdfiumModule.FPDF_GetSignatureObject(docPtr, i);
      const contents = readArrayBuffer(this.pdfiumModule.pdfium, (buffer, bufferSize) => {
        return this.pdfiumModule.FPDFSignatureObj_GetContents(signatureObjPtr, buffer, bufferSize);
      });
      const byteRange = readArrayBuffer(this.pdfiumModule.pdfium, (buffer, bufferSize) => {
        return this.pdfiumModule.FPDFSignatureObj_GetByteRange(signatureObjPtr, buffer, bufferSize) * 4;
      });
      const subFilter = readArrayBuffer(this.pdfiumModule.pdfium, (buffer, bufferSize) => {
        return this.pdfiumModule.FPDFSignatureObj_GetSubFilter(signatureObjPtr, buffer, bufferSize);
      });
      const reason = readString(
        this.pdfiumModule.pdfium,
        (buffer, bufferLength) => {
          return this.pdfiumModule.FPDFSignatureObj_GetReason(signatureObjPtr, buffer, bufferLength);
        },
        this.pdfiumModule.pdfium.UTF16ToString
      );
      const time = readString(
        this.pdfiumModule.pdfium,
        (buffer, bufferLength) => {
          return this.pdfiumModule.FPDFSignatureObj_GetTime(signatureObjPtr, buffer, bufferLength);
        },
        this.pdfiumModule.pdfium.UTF8ToString
      );
      const docMDP = this.pdfiumModule.FPDFSignatureObj_GetDocMDPPermission(signatureObjPtr);
      signatures.push({
        contents,
        byteRange,
        subFilter,
        reason,
        time,
        docMDP
      });
    }
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetSignatures`, "End", doc.id);
    return TaskBase.resolve(signatures);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.getBookmarks}
   *
   * @public
   */
  getBookmarks(doc) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "getBookmarks", doc);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetBookmarks`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `getBookmarks`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const bookmarks = this.readPdfBookmarks(docPtr, 0);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetBookmarks`, "End", doc.id);
    return TaskBase.resolve({
      bookmarks
    });
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.renderPage}
   *
   * @public
   */
  renderPage(doc, page, scaleFactor, rotation, options) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "renderPage", doc, page, scaleFactor, rotation, options);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderPage`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderPage`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const imageData = this.renderPageRectToImageData(
      docPtr,
      page,
      {
        origin: { x: 0, y: 0 },
        size: page.size
      },
      scaleFactor,
      rotation,
      options
    );
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderPage`, "End", `${doc.id}-${page.index}`);
    return TaskBase.resolve(imageData);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.renderPageRect}
   *
   * @public
   */
  renderPageRect(doc, page, scaleFactor, rotation, rect, options) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "renderPageRect", doc, page, scaleFactor, rotation, rect, options);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderPageRect`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderPageRect`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const imageData = this.renderPageRectToImageData(docPtr, page, rect, scaleFactor, rotation, options);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderPageRect`, "End", `${doc.id}-${page.index}`);
    return TaskBase.resolve(imageData);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.getPageAnnotations}
   *
   * @public
   */
  getPageAnnotations(doc, page, scaleFactor, rotation) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "getPageAnnotations", doc, page, scaleFactor, rotation);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetPageAnnotations`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetPageAnnotations`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, page.index);
    const textPagePtr = this.pdfiumModule.FPDFText_LoadPage(pagePtr);
    const annotations = this.readPageAnnotations(page, docPtr, pagePtr, textPagePtr, scaleFactor, rotation);
    this.pdfiumModule.FPDFText_ClosePage(textPagePtr);
    this.pdfiumModule.FPDF_ClosePage(pagePtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetPageAnnotations`, "End", `${doc.id}-${page.index}`);
    return TaskBase.resolve(annotations);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.createPageAnnotation}
   *
   * @public
   */
  createPageAnnotation(doc, page, annotation) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "createPageAnnotation", doc, page, annotation);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CreatePageAnnotation`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CreatePageAnnotation`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, page.index);
    const annotationPtr = this.pdfiumModule.FPDFPage_CreateAnnot(pagePtr, annotation.type);
    if (!annotationPtr) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CreatePageAnnotation`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("can not create annotation with specified type"));
    }
    if (!this.setPageAnnoRect(page, pagePtr, annotationPtr, annotation.rect)) {
      this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
      this.pdfiumModule.FPDF_ClosePage(pagePtr);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CreatePageAnnotation`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("can not set the rect of the rect"));
    }
    let isSucceed = false;
    switch (annotation.type) {
      case 15:
        isSucceed = this.addInkStroke(page, pagePtr, annotationPtr, annotation.inkList);
        break;
      case 13:
        isSucceed = this.addStampContent(docPtr, page, pagePtr, annotationPtr, annotation.rect, annotation.contents);
        break;
    }
    if (!isSucceed) {
      this.pdfiumModule.FPDFPage_RemoveAnnot(pagePtr, annotationPtr);
      this.pdfiumModule.FPDF_ClosePage(pagePtr);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CreatePageAnnotation`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("can not add content of the annotation"));
    }
    this.pdfiumModule.FPDFPage_GenerateContent(pagePtr);
    this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
    this.pdfiumModule.FPDF_ClosePage(pagePtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CreatePageAnnotation`, "End", `${doc.id}-${page.index}`);
    return TaskBase.resolve(true);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.transformPageAnnotation}
   *
   * @public
   */
  transformPageAnnotation(doc, page, annotation, transformation) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "transformPageAnnotation", doc, page, annotation, transformation);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `TransformPageAnnotation`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `TransformPageAnnotation`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, page.index);
    const annotationPtr = this.pdfiumModule.FPDFPage_GetAnnot(pagePtr, annotation.id);
    const rect = {
      origin: {
        x: annotation.rect.origin.x + transformation.offset.x,
        y: annotation.rect.origin.y + transformation.offset.y
      },
      size: {
        width: annotation.rect.size.width * transformation.scale.width,
        height: annotation.rect.size.height * transformation.scale.height
      }
    };
    if (!this.setPageAnnoRect(page, pagePtr, annotationPtr, rect)) {
      this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
      this.pdfiumModule.FPDF_ClosePage(pagePtr);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `TransformPageAnnotation`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("can not set the rect of the annotation"));
    }
    switch (annotation.type) {
      case 15:
        {
          if (!this.pdfiumModule.FPDFAnnot_RemoveInkList(annotationPtr)) {
            this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
            this.pdfiumModule.FPDF_ClosePage(pagePtr);
            this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `TransformPageAnnotation`, "End", `${doc.id}-${page.index}`);
            return TaskBase.reject(new PdfEngineError("can not remove the ink list of annotation"));
          }
          const inkList = annotation.inkList.map((inkStroke) => {
            return {
              points: inkStroke.points.map((point) => {
                return {
                  x: rect.origin.x + (point.x - annotation.rect.origin.x) * transformation.scale.width,
                  y: rect.origin.y + (point.y - annotation.rect.origin.y) * transformation.scale.height
                };
              })
            };
          });
          if (!this.addInkStroke(page, pagePtr, annotationPtr, inkList)) {
            this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
            this.pdfiumModule.FPDF_ClosePage(pagePtr);
            this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `TransformPageAnnotation`, "End", `${doc.id}-${page.index}`);
            return TaskBase.reject(new PdfEngineError("can not add stroke to the ink list of annotation"));
          }
        }
        break;
    }
    this.pdfiumModule.FPDFPage_GenerateContent(pagePtr);
    this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
    this.pdfiumModule.FPDF_ClosePage(pagePtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `TransformPageAnnotation`, "End", `${doc.id}-${page.index}`);
    return TaskBase.resolve(true);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.removePageAnnotation}
   *
   * @public
   */
  removePageAnnotation(doc, page, annotation) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "removePageAnnotation", doc, page, annotation);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RemovePageAnnotation`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RemovePageAnnotation`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, page.index);
    const result = this.pdfiumModule.FPDFPage_RemoveAnnot(pagePtr, annotation.id);
    this.pdfiumModule.FPDFPage_GenerateContent(pagePtr);
    this.pdfiumModule.FPDF_ClosePage(pagePtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RemovePageAnnotation`, "End", `${doc.id}-${page.index}`);
    return TaskBase.resolve(result);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.getPageTextRects}
   *
   * @public
   */
  getPageTextRects(doc, page, scaleFactor, rotation) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "getPageTextRects", doc, page, scaleFactor, rotation);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetPageTextRects`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetPageTextRects`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, page.index);
    const textPagePtr = this.pdfiumModule.FPDFText_LoadPage(pagePtr);
    const textRects = this.readPageTextRects(page, docPtr, pagePtr, textPagePtr);
    this.pdfiumModule.FPDFText_ClosePage(textPagePtr);
    this.pdfiumModule.FPDF_ClosePage(pagePtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetPageTextRects`, "End", `${doc.id}-${page.index}`);
    return TaskBase.resolve(textRects);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.renderThumbnail}
   *
   * @public
   */
  renderThumbnail(doc, page, scaleFactor, rotation) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "renderThumbnail", doc, page, scaleFactor, rotation);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderThumbnail`, "Begin", `${doc.id}-${page.index}`);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderThumbnail`, "End", `${doc.id}-${page.index}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    scaleFactor = Math.max(scaleFactor, 0.5);
    const result = this.renderPage(doc, page, scaleFactor, rotation, {
      withAnnotations: true
    });
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `RenderThumbnail`, "End", `${doc.id}-${page.index}`);
    return result;
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.startSearch}
   *
   * @public
   */
  startSearch(doc, contextId) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "startSearch", doc, contextId);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `StartSearch`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `StartSearch`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `StartSearch`, "End", doc.id);
    return TaskBase.resolve(true);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.searchNext}
   *
   * @public
   */
  searchNext(doc, contextId, target) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "searchNext", doc, contextId, target);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchNext`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchNext`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { keyword, flags } = target;
    const searchContext = this.setupSearchContext(doc, contextId, keyword, flags);
    if (searchContext.currPageIndex === doc.pageCount) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchNext`, "End", doc.id);
      return TaskBase.resolve(void 0);
    }
    const { docPtr } = this.docs[doc.id];
    let pageIndex = searchContext.currPageIndex;
    let startIndex = searchContext.startIndex;
    const length = 2 * (keyword.length + 1);
    const keywordPtr = this.malloc(length);
    this.pdfiumModule.pdfium.stringToUTF16(keyword, keywordPtr, length);
    const flag = flags.reduce(
      (flag2, currFlag) => {
        return flag2 | currFlag;
      },
      0
      /* None */
    );
    while (pageIndex < doc.pageCount) {
      const result = this.searchTextInPage(docPtr, pageIndex, startIndex, keywordPtr, flag);
      if (result) {
        searchContext.currPageIndex = result.pageIndex;
        searchContext.startIndex = result.charIndex + result.charCount;
        this.free(keywordPtr);
        this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchNext`, "End", doc.id);
        return TaskBase.resolve(result);
      }
      pageIndex++;
      startIndex = 0;
      searchContext.currPageIndex = pageIndex;
      searchContext.startIndex = startIndex;
    }
    this.free(keywordPtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchNext`, "End", doc.id);
    return TaskBase.resolve(void 0);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.searchPrev}
   *
   * @public
   */
  searchPrev(doc, contextId, target) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "searchPrev", doc, contextId, target);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchPrev`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchPrev`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { keyword, flags } = target;
    const searchContext = this.setupSearchContext(doc, contextId, keyword, flags);
    if (searchContext.currPageIndex === -1) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchPrev`, "End", doc.id);
      return TaskBase.resolve(void 0);
    }
    const { docPtr } = this.docs[doc.id];
    let pageIndex = searchContext.currPageIndex;
    let startIndex = searchContext.startIndex;
    const length = 2 * (keyword.length + 1);
    const keywordPtr = this.malloc(length);
    this.pdfiumModule.pdfium.stringToUTF16(keyword, keywordPtr, length);
    const flag = target.flags.reduce(
      (flag2, currFlag) => {
        return flag2 | currFlag;
      },
      0
      /* None */
    );
    while (pageIndex < doc.pageCount) {
      const result = this.searchTextInPage(docPtr, pageIndex, startIndex, keywordPtr, flag);
      if (result) {
        searchContext.currPageIndex = pageIndex;
        searchContext.startIndex = result.charIndex + result.charCount;
        this.free(keywordPtr);
        this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchPrev`, "End", doc.id);
        return TaskBase.resolve(result);
      }
      pageIndex--;
      startIndex = 0;
      searchContext.currPageIndex = pageIndex;
      searchContext.startIndex = startIndex;
    }
    this.free(keywordPtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SearchPrev`, "End", doc.id);
    return TaskBase.resolve(void 0);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.stopSearch}
   *
   * @public
   */
  stopSearch(doc, contextId) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "stopSearch", doc, contextId);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `StopSearch`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `StopSearch`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { searchContexts } = this.docs[doc.id];
    if (searchContexts) {
      searchContexts.delete(contextId);
    }
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `StopSearch`, "End", doc.id);
    return TaskBase.resolve(true);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.getAttachments}
   *
   * @public
   */
  getAttachments(doc) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "getAttachments", doc);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetAttachments`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetAttachments`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const attachments = [];
    const { docPtr } = this.docs[doc.id];
    const count = this.pdfiumModule.FPDFDoc_GetAttachmentCount(docPtr);
    for (let i = 0; i < count; i++) {
      const attachment = this.readPdfAttachment(docPtr, i);
      attachments.push(attachment);
    }
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `GetAttachments`, "End", doc.id);
    return TaskBase.resolve(attachments);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.readAttachmentContent}
   *
   * @public
   */
  readAttachmentContent(doc, attachment) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "readAttachmentContent", doc, attachment);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ReadAttachmentContent`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ReadAttachmentContent`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const attachmentPtr = this.pdfiumModule.FPDFDoc_GetAttachment(docPtr, attachment.index);
    const sizePtr = this.malloc(8);
    if (!this.pdfiumModule.FPDFAttachment_GetFile(attachmentPtr, 0, 0, sizePtr)) {
      this.free(sizePtr);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ReadAttachmentContent`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("can not read attachment size"));
    }
    const size = this.pdfiumModule.pdfium.getValue(sizePtr, "i64");
    const contentPtr = this.malloc(size);
    if (!this.pdfiumModule.FPDFAttachment_GetFile(attachmentPtr, contentPtr, size, sizePtr)) {
      this.free(sizePtr);
      this.free(contentPtr);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ReadAttachmentContent`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("can not read attachment content"));
    }
    const buffer = new ArrayBuffer(size);
    const view = new DataView(buffer);
    for (let i = 0; i < size; i++) {
      view.setInt8(i, this.pdfiumModule.pdfium.getValue(contentPtr + i, "i8"));
    }
    this.free(sizePtr);
    this.free(contentPtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ReadAttachmentContent`, "End", doc.id);
    return TaskBase.resolve(buffer);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.setFormFieldValue}
   *
   * @public
   */
  setFormFieldValue(doc, page, annotation, value) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "SetFormFieldValue", doc, annotation, value);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SetFormFieldValue`, "Begin", `${doc.id}-${annotation.id}`);
    if (!this.docs[doc.id]) {
      this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "SetFormFieldValue", "document is not opened");
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SetFormFieldValue`, "End", `${doc.id}-${annotation.id}`);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const formFillInfoPtr = this.pdfiumModule.PDFiumExt_OpenFormFillInfo();
    const formHandle = this.pdfiumModule.PDFiumExt_InitFormFillEnvironment(docPtr, formFillInfoPtr);
    const focusableSubtypes = [
      20
      /* WIDGET */
    ];
    const focusableSubtypesPtr = this.malloc(focusableSubtypes.length * 4);
    for (const index in focusableSubtypes) {
      const subtype = focusableSubtypes[index];
      this.pdfiumModule.pdfium.setValue(focusableSubtypesPtr + 4 * Number(index), subtype, "i32");
    }
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, page.index);
    const annotationPtr = this.pdfiumModule.FPDFPage_GetAnnot(pagePtr, annotation.id);
    if (!this.pdfiumModule.FORM_SetFocusedAnnot(formHandle, annotationPtr)) {
      this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "SetFormFieldValue", "failed to set focused annotation");
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SetFormFieldValue`, "End", `${doc.id}-${annotation.id}`);
      this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
      this.pdfiumModule.FPDF_ClosePage(pagePtr);
      this.free(focusableSubtypesPtr);
      this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
      this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
      return TaskBase.reject(new PdfEngineError("failed to set focused annotation"));
    }
    switch (value.kind) {
      case "text":
        {
          if (!this.pdfiumModule.FORM_SelectAllText(formHandle, pagePtr)) {
            this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "SetFormFieldValue", "failed to select all text");
            this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SetFormFieldValue`, "End", `${doc.id}-${annotation.id}`);
            this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
            this.pdfiumModule.FPDF_ClosePage(pagePtr);
            this.free(focusableSubtypesPtr);
            this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
            this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
            return TaskBase.reject(new PdfEngineError("failed to select all text"));
          }
          if (!this.pdfiumModule.FORM_ReplaceSelection(formHandle, pagePtr, value.text)) {
            this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "SetFormFieldValue", "failed to replace selection");
            this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SetFormFieldValue`, "End", `${doc.id}-${annotation.id}`);
            this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
            this.pdfiumModule.FPDF_ClosePage(pagePtr);
            this.free(focusableSubtypesPtr);
            this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
            this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
            return TaskBase.reject(new PdfEngineError("failed to replace selection"));
          }
        }
        break;
      case "selection":
        if (!this.pdfiumModule.FORM_SetIndexSelected(formHandle, pagePtr, value.index, value.isSelected)) {
          this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "SetFormFieldValue", "failed to set index selected");
          this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SetFormFieldValue`, "End", `${doc.id}-${annotation.id}`);
          this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
          this.pdfiumModule.FPDF_ClosePage(pagePtr);
          this.free(focusableSubtypesPtr);
          this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
          this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
          return TaskBase.reject(new PdfEngineError("failed to set index selected"));
        }
        break;
    }
    this.free(focusableSubtypesPtr);
    this.pdfiumModule.FORM_ForceToKillFocus(formHandle);
    this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
    this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
    return TaskBase.resolve(true);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.extractPages}
   *
   * @public
   */
  extractPages(doc, pageIndexes) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "extractPages", doc, pageIndexes);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractPages`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractPages`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const newDocPtr = this.pdfiumModule.FPDF_CreateNewDocument();
    if (!newDocPtr) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractPages`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("can not create new document"));
    }
    const pageIndexesPtr = this.malloc(pageIndexes.length * 4);
    for (let i = 0; i < pageIndexes.length; i++) {
      this.pdfiumModule.pdfium.setValue(pageIndexesPtr + i * 4, pageIndexes[i], "i32");
    }
    if (!this.pdfiumModule.FPDF_ImportPagesByIndex(newDocPtr, docPtr, pageIndexesPtr, pageIndexes.length, 0)) {
      this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractPages`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("can not import pages to new document"));
    }
    const buffer = this.saveDocument(newDocPtr);
    this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractPages`, "End", doc.id);
    return TaskBase.resolve(buffer);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.extractText}
   *
   * @public
   */
  extractText(doc, pageIndexes) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "extractText", doc, pageIndexes);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractText`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractText`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const strings = [];
    for (let i = 0; i < pageIndexes.length; i++) {
      const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, pageIndexes[i]);
      const textPagePtr = this.pdfiumModule.FPDFText_LoadPage(pagePtr);
      const charCount = this.pdfiumModule.FPDFText_CountChars(textPagePtr);
      const bufferPtr = this.malloc((charCount + 1) * 2);
      this.pdfiumModule.FPDFText_GetText(textPagePtr, 0, charCount, bufferPtr);
      const text2 = this.pdfiumModule.pdfium.UTF16ToString(bufferPtr);
      this.free(bufferPtr);
      strings.push(text2);
    }
    const text = strings.join("\n\n");
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `ExtractText`, "End", doc.id);
    return TaskBase.resolve(text);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.merge}
   *
   * @public
   */
  merge(files) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "merge", files);
    const fileIds = files.map((file2) => file2.id).join(".");
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Merge`, "Begin", fileIds);
    const newDocPtr = this.pdfiumModule.FPDF_CreateNewDocument();
    if (!newDocPtr) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Merge`, "End", fileIds);
      return TaskBase.reject(new PdfEngineError("can not create new document"));
    }
    const ptrs = [];
    for (const file2 of files.reverse()) {
      const array = new Uint8Array(file2.content);
      const length = array.length;
      const filePtr = this.malloc(length);
      this.pdfiumModule.pdfium.HEAPU8.set(array, filePtr);
      const docPtr = this.pdfiumModule.FPDF_LoadMemDocument(filePtr, length, 0);
      if (!docPtr) {
        const lastError = this.pdfiumModule.FPDF_GetLastError();
        this.logger.error(LOG_SOURCE2, LOG_CATEGORY2, `FPDF_LoadMemDocument failed with ${lastError}`);
        this.free(filePtr);
        for (const ptr of ptrs) {
          this.pdfiumModule.FPDF_CloseDocument(ptr.docPtr);
          this.free(ptr.filePtr);
        }
        this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Merge`, "End", fileIds);
        return TaskBase.reject(new PdfEngineError(`FPDF_LoadMemDocument failed`, lastError));
      }
      ptrs.push({ filePtr, docPtr });
      if (!this.pdfiumModule.FPDF_ImportPages(newDocPtr, docPtr, 0, 0)) {
        this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
        for (const ptr of ptrs) {
          this.pdfiumModule.FPDF_CloseDocument(ptr.docPtr);
          this.free(ptr.filePtr);
        }
        this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Merge`, "End", fileIds);
        return TaskBase.reject(new PdfEngineError("can not import pages to new document"));
      }
    }
    const buffer = this.saveDocument(newDocPtr);
    this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
    for (const ptr of ptrs) {
      this.pdfiumModule.FPDF_CloseDocument(ptr.docPtr);
      this.free(ptr.filePtr);
    }
    const file = {
      id: `${Math.random()}`,
      name: `merged.${Math.random()}.pdf`,
      content: buffer
    };
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `Merge`, "End", fileIds);
    return TaskBase.resolve(file);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.saveAsCopy}
   *
   * @public
   */
  saveAsCopy(doc) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "saveAsCopy", doc);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SaveAsCopy`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SaveAsCopy`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const { docPtr } = this.docs[doc.id];
    const buffer = this.saveDocument(docPtr);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `SaveAsCopy`, "End", doc.id);
    return TaskBase.resolve(buffer);
  }
  /**
   * {@inheritDoc @nguyenyou/pdf-models!PdfEngine.closeDocument}
   *
   * @public
   */
  closeDocument(doc) {
    this.logger.debug(LOG_SOURCE2, LOG_CATEGORY2, "closeDocument", doc);
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CloseDocument`, "Begin", doc.id);
    if (!this.docs[doc.id]) {
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CloseDocument`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError("document does not exist"));
    }
    const docData = this.docs[doc.id];
    if (!docData) {
      this.logger.error(LOG_SOURCE2, LOG_CATEGORY2, `can not close document ${doc.id}`);
      this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CloseDocument`, "End", doc.id);
      return TaskBase.reject(new PdfEngineError(`can not close document ${doc.id}`));
    }
    const { docPtr, filePtr } = this.docs[doc.id];
    this.pdfiumModule.FPDF_CloseDocument(docPtr);
    this.free(filePtr);
    delete this.docs[doc.id];
    this.logger.perf(LOG_SOURCE2, LOG_CATEGORY2, `CloseDocument`, "End", doc.id);
    return TaskBase.resolve(true);
  }
  /**
   * Memory allocation
   * @param size - size of memory space
   * @returns pointer to memory space
   *
   * @public
   */
  malloc(size) {
    const ptr = this.pdfiumModule.pdfium.wasmExports.malloc(size);
    for (let i = 0; i < size; i++) {
      this.pdfiumModule.pdfium.HEAP8[ptr + i] = 0;
    }
    return ptr;
  }
  /**
   * Free memory space
   * @param ptr pointer to memory space
   *
   * @public
   */
  free(ptr) {
    this.pdfiumModule.pdfium.wasmExports.free(ptr);
  }
  /**
   * Set the rect of specified annotation
   * @param page - page info that the annotation is belonged to
   * @param pagePtr - pointer of page object
   * @param annotationPtr - pointer to annotation object
   * @param inkList - ink lists that added to the annotation
   * @returns whether the ink lists is setted
   *
   * @private
   */
  addInkStroke(page, pagePtr, annotationPtr, inkList) {
    for (const inkStroke of inkList) {
      const inkPointsCount = inkStroke.points.length;
      const inkPointsPtr = this.malloc(inkPointsCount * 8);
      for (let i = 0; i < inkPointsCount; i++) {
        const point = inkStroke.points[i];
        const { x, y } = this.convertDevicePointToPagePoint(page, point);
        this.pdfiumModule.pdfium.setValue(inkPointsPtr + i * 8, x, "float");
        this.pdfiumModule.pdfium.setValue(inkPointsPtr + i * 8 + 4, y, "float");
      }
      if (this.pdfiumModule.FPDFAnnot_AddInkStroke(annotationPtr, inkPointsPtr, inkPointsCount) === -1) {
        this.free(inkPointsPtr);
        return false;
      }
      this.free(inkPointsPtr);
    }
    return true;
  }
  /**
   * Add contents to stamp annotation
   * @param docPtr - pointer to pdf document object
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to stamp annotation
   * @param rect - rect of stamp annotation
   * @param contents - contents of stamp annotation
   * @returns whether contents is added to annotation
   *
   * @private
   */
  addStampContent(docPtr, page, pagePtr, annotationPtr, rect, contents) {
    for (const content of contents) {
      switch (content.type) {
        case 3:
          return this.addImageObject(docPtr, page, pagePtr, annotationPtr, rect.origin, content.imageData);
      }
    }
    return false;
  }
  /**
   * Add image object to annotation
   * @param docPtr - pointer to pdf document object
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to stamp annotation
   * @param position - position of image
   * @param imageData - data of image
   * @returns whether image is added to annotation
   *
   * @private
   */
  addImageObject(docPtr, page, pagePtr, annotationPtr, position, imageData) {
    const bytesPerPixel = 4;
    const pixelCount = imageData.width * imageData.height;
    const bitmapBufferPtr = this.malloc(bytesPerPixel * pixelCount);
    if (!bitmapBufferPtr) {
      return false;
    }
    for (let i = 0; i < pixelCount; i++) {
      const red = imageData.data[i * bytesPerPixel];
      const green = imageData.data[i * bytesPerPixel + 1];
      const blue = imageData.data[i * bytesPerPixel + 2];
      const alpha = imageData.data[i * bytesPerPixel + 3];
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel, blue, "i8");
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel + 1, green, "i8");
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel + 2, red, "i8");
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel + 3, alpha, "i8");
    }
    const format = 4;
    const bitmapPtr = this.pdfiumModule.FPDFBitmap_CreateEx(
      imageData.width,
      imageData.height,
      format,
      bitmapBufferPtr,
      0
    );
    if (!bitmapPtr) {
      this.free(bitmapBufferPtr);
      return false;
    }
    const imageObjectPtr = this.pdfiumModule.FPDFPageObj_NewImageObj(docPtr);
    if (!imageObjectPtr) {
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.free(bitmapBufferPtr);
      return false;
    }
    if (!this.pdfiumModule.FPDFImageObj_SetBitmap(pagePtr, 0, imageObjectPtr, bitmapPtr)) {
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.pdfiumModule.FPDFPageObj_Destroy(imageObjectPtr);
      this.free(bitmapBufferPtr);
      return false;
    }
    const matrixPtr = this.malloc(6 * 4);
    this.pdfiumModule.pdfium.setValue(matrixPtr, imageData.width, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 4, 0, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 8, 0, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 12, imageData.height, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 16, 0, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 20, 0, "float");
    if (!this.pdfiumModule.FPDFPageObj_SetMatrix(imageObjectPtr, matrixPtr)) {
      this.free(matrixPtr);
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.pdfiumModule.FPDFPageObj_Destroy(imageObjectPtr);
      this.free(bitmapBufferPtr);
      return false;
    }
    this.free(matrixPtr);
    this.pdfiumModule.FPDFPageObj_Transform(imageObjectPtr, 1, 0, 0, 1, position.x, position.y);
    if (!this.pdfiumModule.FPDFAnnot_AppendObject(annotationPtr, imageObjectPtr)) {
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.pdfiumModule.FPDFPageObj_Destroy(imageObjectPtr);
      this.free(bitmapBufferPtr);
      return false;
    }
    this.pdfiumModule.FPDFPage_GenerateContent(pagePtr);
    this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
    this.free(bitmapBufferPtr);
    return true;
  }
  /**
   * Save document to array buffer
   * @param docPtr - pointer to pdf document
   * @returns array buffer contains the pdf content
   *
   * @private
   */
  saveDocument(docPtr) {
    const writerPtr = this.pdfiumModule.PDFiumExt_OpenFileWriter();
    this.pdfiumModule.PDFiumExt_SaveAsCopy(docPtr, writerPtr);
    const size = this.pdfiumModule.PDFiumExt_GetFileWriterSize(writerPtr);
    const dataPtr = this.malloc(size);
    this.pdfiumModule.PDFiumExt_GetFileWriterData(writerPtr, dataPtr, size);
    const buffer = new ArrayBuffer(size);
    const view = new DataView(buffer);
    for (let i = 0; i < size; i++) {
      view.setInt8(i, this.pdfiumModule.pdfium.getValue(dataPtr + i, "i8"));
    }
    this.free(dataPtr);
    this.pdfiumModule.PDFiumExt_CloseFileWriter(writerPtr);
    return buffer;
  }
  /**
   * Read metadata from pdf document
   * @param docPtr - pointer to pdf document
   * @param key - key of metadata field
   * @returns metadata value
   *
   * @private
   */
  readMetaText(docPtr, key) {
    return readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDF_GetMetaText(docPtr, key, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
  }
  /**
   * Setup search context
   * @param doc - pdf document info
   * @param contextId - id of context
   * @param keyword - keyword for searching
   * @param flags - flags for matching keywords
   * @returns new search context
   *
   * @private
   */
  setupSearchContext(doc, contextId, keyword, flags) {
    const { searchContexts } = this.docs[doc.id];
    let searchContext = searchContexts.get(contextId);
    if (searchContext && compareSearchTarget(searchContext.target, { keyword, flags })) {
      return searchContext;
    }
    const currPageIndex = 0;
    const startIndex = 0;
    searchContext = {
      currPageIndex,
      startIndex,
      target: {
        keyword,
        flags
      }
    };
    searchContexts.set(contextId, searchContext);
    return searchContext;
  }
  /**
   * Search text in pdf page
   * @param docPtr - pointer to pdf document
   * @param pageIndex - index of pdf page
   * @param startIndex - start index of text
   * @param keywordPtr - pointer to keyword
   * @param flag - matching flags
   * @returns search result
   *
   * @private
   */
  searchTextInPage(docPtr, pageIndex, startIndex, keywordPtr, flag) {
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, pageIndex);
    const textPagePtr = this.pdfiumModule.FPDFText_LoadPage(pagePtr);
    let result;
    const searchHandle = this.pdfiumModule.FPDFText_FindStart(textPagePtr, keywordPtr, flag, startIndex);
    const found = this.pdfiumModule.FPDFText_FindNext(searchHandle);
    if (found) {
      const charIndex = this.pdfiumModule.FPDFText_GetSchResultIndex(searchHandle);
      const charCount = this.pdfiumModule.FPDFText_GetSchCount(searchHandle);
      result = {
        pageIndex,
        charIndex,
        charCount
      };
    }
    this.pdfiumModule.FPDFText_FindClose(searchHandle);
    this.pdfiumModule.FPDFText_ClosePage(textPagePtr);
    this.pdfiumModule.FPDF_ClosePage(pagePtr);
    return result;
  }
  /**
   * Read bookmarks in the pdf document
   * @param docPtr - pointer to pdf document
   * @param rootBookmarkPtr - pointer to root bookmark
   * @returns bookmarks in the pdf document
   *
   * @private
   */
  readPdfBookmarks(docPtr, rootBookmarkPtr = 0) {
    let bookmarkPtr = this.pdfiumModule.FPDFBookmark_GetFirstChild(docPtr, rootBookmarkPtr);
    const bookmarks = [];
    while (bookmarkPtr) {
      const bookmark = this.readPdfBookmark(docPtr, bookmarkPtr);
      bookmarks.push(bookmark);
      const nextBookmarkPtr = this.pdfiumModule.FPDFBookmark_GetNextSibling(docPtr, bookmarkPtr);
      bookmarkPtr = nextBookmarkPtr;
    }
    return bookmarks;
  }
  /**
   * Read bookmark in the pdf document
   * @param docPtr - pointer to pdf document
   * @param bookmarkPtr - pointer to bookmark object
   * @returns pdf bookmark object
   *
   * @private
   */
  readPdfBookmark(docPtr, bookmarkPtr) {
    const title = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFBookmark_GetTitle(bookmarkPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const bookmarks = this.readPdfBookmarks(docPtr, bookmarkPtr);
    const target = this.readPdfBookmarkTarget(
      docPtr,
      () => {
        return this.pdfiumModule.FPDFBookmark_GetAction(bookmarkPtr);
      },
      () => {
        return this.pdfiumModule.FPDFBookmark_GetDest(docPtr, bookmarkPtr);
      }
    );
    return {
      title,
      target,
      children: bookmarks
    };
  }
  /**
   * Read text rects in pdf page
   * @param page - pdf page info
   * @param docPtr - pointer to pdf document
   * @param pagePtr - pointer to pdf page
   * @param textPagePtr - pointer to pdf text page
   * @returns text rects in the pdf page
   *
   * @public
   */
  readPageTextRects(page, docPtr, pagePtr, textPagePtr) {
    const rectsCount = this.pdfiumModule.FPDFText_CountRects(textPagePtr, 0, -1);
    const textRects = [];
    for (let i = 0; i < rectsCount; i++) {
      const topPtr = this.malloc(8);
      const leftPtr = this.malloc(8);
      const rightPtr = this.malloc(8);
      const bottomPtr = this.malloc(8);
      const isSucceed = this.pdfiumModule.FPDFText_GetRect(textPagePtr, i, leftPtr, topPtr, rightPtr, bottomPtr);
      if (!isSucceed) {
        this.free(leftPtr);
        this.free(topPtr);
        this.free(rightPtr);
        this.free(bottomPtr);
        continue;
      }
      const left = this.pdfiumModule.pdfium.getValue(leftPtr, "double");
      const top = this.pdfiumModule.pdfium.getValue(topPtr, "double");
      const right = this.pdfiumModule.pdfium.getValue(rightPtr, "double");
      const bottom = this.pdfiumModule.pdfium.getValue(bottomPtr, "double");
      this.free(leftPtr);
      this.free(topPtr);
      this.free(rightPtr);
      this.free(bottomPtr);
      const deviceXPtr = this.malloc(4);
      const deviceYPtr = this.malloc(4);
      this.pdfiumModule.FPDF_PageToDevice(
        pagePtr,
        0,
        0,
        page.size.width,
        page.size.height,
        0,
        left,
        top,
        deviceXPtr,
        deviceYPtr
      );
      const x = this.pdfiumModule.pdfium.getValue(deviceXPtr, "i32");
      const y = this.pdfiumModule.pdfium.getValue(deviceYPtr, "i32");
      this.free(deviceXPtr);
      this.free(deviceYPtr);
      const rect = {
        origin: {
          x,
          y
        },
        size: {
          width: Math.ceil(Math.abs(right - left)),
          height: Math.ceil(Math.abs(top - bottom))
        }
      };
      const utf16Length = this.pdfiumModule.FPDFText_GetBoundedText(textPagePtr, left, top, right, bottom, 0, 0);
      const bytesCount = (utf16Length + 1) * 2;
      const textBuffer = this.malloc(bytesCount);
      this.pdfiumModule.FPDFText_GetBoundedText(textPagePtr, left, top, right, bottom, textBuffer, utf16Length);
      const content = this.pdfiumModule.pdfium.UTF16ToString(textBuffer);
      this.free(textBuffer);
      const charIndex = this.pdfiumModule.FPDFText_GetCharIndexAtPos(textPagePtr, left, top, 2, 2);
      let fontFamily = "";
      let fontSize = rect.size.height;
      if (charIndex >= 0) {
        fontSize = this.pdfiumModule.FPDFText_GetFontSize(textPagePtr, charIndex);
        const fontNameLength = this.pdfiumModule.FPDFText_GetFontInfo(textPagePtr, charIndex, 0, 0, 0);
        const bytesCount2 = fontNameLength + 1;
        const textBufferPtr = this.malloc(bytesCount2);
        const flagsPtr = this.malloc(4);
        this.pdfiumModule.FPDFText_GetFontInfo(textPagePtr, charIndex, textBufferPtr, bytesCount2, flagsPtr);
        fontFamily = this.pdfiumModule.pdfium.UTF8ToString(textBufferPtr);
        this.free(textBufferPtr);
        this.free(flagsPtr);
      }
      const textRect = {
        content,
        rect,
        font: {
          family: fontFamily,
          size: fontSize
        }
      };
      textRects.push(textRect);
    }
    return textRects;
  }
  /**
   * Read page annotations
   * @param page - page info
   * @param docPtr - pointer to pdf document
   * @param pagePtr - pointer to pdf page
   * @param textPagePtr - pointe to pdf text page
   * @param scaleFactor - scale factor
   * @param rotation - rotation angle
   * @returns annotations on the pdf page
   *
   * @private
   */
  readPageAnnotations(page, docPtr, pagePtr, textPagePtr, scaleFactor, rotation) {
    const formFillInfoPtr = this.pdfiumModule.PDFiumExt_OpenFormFillInfo();
    const formHandle = this.pdfiumModule.PDFiumExt_InitFormFillEnvironment(docPtr, formFillInfoPtr);
    const annotationCount = this.pdfiumModule.FPDFPage_GetAnnotCount(pagePtr);
    const annotations = [];
    for (let i = 0; i < annotationCount; i++) {
      const annotation = this.readPageAnnotation(
        page,
        docPtr,
        pagePtr,
        textPagePtr,
        formHandle,
        i,
        scaleFactor,
        rotation
      );
      if (annotation) {
        annotations.push(annotation);
      }
    }
    this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
    this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
    return annotations;
  }
  /**
   * Read pdf annotation from pdf document
   * @param page  - pdf page infor
   * @param docPtr - pointer to pdf document object
   * @param pagePtr - pointer to pdf page object
   * @param  textPagePtr - pointer to pdf text page object
   * @param formHandle - form handle
   * @param index - index of annotation in the pdf page
   * @param scaleFactor  - factor of scalling
   * @param rotation  - rotation angle
   * @returns pdf annotation
   *
   * @private
   */
  readPageAnnotation(page, docPtr, pagePtr, textPagePtr, formHandle, index, scaleFactor, rotation) {
    const annotationPtr = this.pdfiumModule.FPDFPage_GetAnnot(pagePtr, index);
    const subType = this.pdfiumModule.FPDFAnnot_GetSubtype(annotationPtr);
    let annotation;
    switch (subType) {
      case 1:
        {
          annotation = this.readPdfTextAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 3:
        {
          annotation = this.readPdfFreeTextAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 2:
        {
          annotation = this.readPdfLinkAnno(page, docPtr, pagePtr, textPagePtr, annotationPtr, index);
        }
        break;
      case 20:
        {
          annotation = this.readPdfWidgetAnno(page, pagePtr, annotationPtr, formHandle, index);
        }
        break;
      case 17:
        {
          annotation = this.readPdfFileAttachmentAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 15:
        {
          annotation = this.readPdfInkAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 7:
        {
          annotation = this.readPdfPolygonAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 8:
        {
          annotation = this.readPdfPolylineAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 4:
        {
          annotation = this.readPdfLineAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 9:
        annotation = this.readPdfHighlightAnno(page, pagePtr, annotationPtr, index);
        break;
      case 13:
        {
          annotation = this.readPdfStampAnno(docPtr, page, pagePtr, annotationPtr, index);
        }
        break;
      case 5:
        {
          annotation = this.readPdfSquareAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 6:
        {
          annotation = this.readPdfCircleAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 10:
        {
          annotation = this.readPdfUnderlineAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 11:
        {
          annotation = this.readPdfSquigglyAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 12:
        {
          annotation = this.readPdfStrikeOutAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 14:
        {
          annotation = this.readPdfCaretAnno(page, pagePtr, annotationPtr, index);
        }
        break;
      case 16:
        break;
      default:
        {
          annotation = this.readPdfAnno(page, pagePtr, subType, annotationPtr, index);
        }
        break;
    }
    this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
    return annotation;
  }
  /**
   * Read pdf text annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf text annotation
   *
   * @private
   */
  readPdfTextAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const annoRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, annoRect);
    const utf16Length = this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, "Contents", 0, 0);
    const bytesCount = (utf16Length + 1) * 2;
    const contentBufferPtr = this.malloc(bytesCount);
    this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, "Contents", contentBufferPtr, bytesCount);
    const contents = this.pdfiumModule.pdfium.UTF16ToString(contentBufferPtr);
    this.free(contentBufferPtr);
    const redPtr = this.malloc(4);
    const greenPtr = this.malloc(4);
    const bluePtr = this.malloc(4);
    const alphaPtr = this.malloc(4);
    this.pdfiumModule.FPDFAnnot_GetColor(annotationPtr, 0, redPtr, greenPtr, bluePtr, alphaPtr);
    const red = this.pdfiumModule.pdfium.getValue(redPtr, "i32");
    const green = this.pdfiumModule.pdfium.getValue(redPtr, "i32");
    const blue = this.pdfiumModule.pdfium.getValue(redPtr, "i32");
    const alpha = this.pdfiumModule.pdfium.getValue(redPtr, "i32");
    this.free(redPtr);
    this.free(greenPtr);
    this.free(bluePtr);
    this.free(alphaPtr);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 1,
      contents,
      color: {
        red,
        green,
        blue,
        alpha
      },
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf freetext annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf freetext annotation
   *
   * @private
   */
  readPdfFreeTextAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const annoRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, annoRect);
    const utf16Length = this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, "Contents", 0, 0);
    const bytesCount = (utf16Length + 1) * 2;
    const contentBufferPtr = this.malloc(bytesCount);
    this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, "Contents", contentBufferPtr, bytesCount);
    const contents = this.pdfiumModule.pdfium.UTF16ToString(contentBufferPtr);
    this.free(contentBufferPtr);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 3,
      contents,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf link annotation from pdf document
   * @param page  - pdf page infor
   * @param docPtr - pointer to pdf document object
   * @param pagePtr - pointer to pdf page object
   * @param  textPagePtr - pointer to pdf text page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf link annotation
   *
   * @private
   */
  readPdfLinkAnno(page, docPtr, pagePtr, textPagePtr, annotationPtr, index) {
    const linkPtr = this.pdfiumModule.FPDFAnnot_GetLink(annotationPtr);
    if (!linkPtr) {
      return;
    }
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const annoRect = this.readPageAnnoRect(annotationPtr);
    const { left, top, right, bottom } = annoRect;
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, annoRect);
    const utf16Length = this.pdfiumModule.FPDFText_GetBoundedText(textPagePtr, left, top, right, bottom, 0, 0);
    const bytesCount = (utf16Length + 1) * 2;
    const textBufferPtr = this.malloc(bytesCount);
    this.pdfiumModule.FPDFText_GetBoundedText(textPagePtr, left, top, right, bottom, textBufferPtr, utf16Length);
    const text = this.pdfiumModule.pdfium.UTF16ToString(textBufferPtr);
    this.free(textBufferPtr);
    const target = this.readPdfLinkAnnoTarget(
      docPtr,
      () => {
        return this.pdfiumModule.FPDFLink_GetAction(linkPtr);
      },
      () => {
        return this.pdfiumModule.FPDFLink_GetDest(docPtr, linkPtr);
      }
    );
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 2,
      text,
      target,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf widget annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param formHandle - form handle
   * @param index  - index of annotation in the pdf page
   * @returns pdf widget annotation
   *
   * @private
   */
  readPdfWidgetAnno(page, pagePtr, annotationPtr, formHandle, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    const field = this.readPdfWidgetAnnoField(formHandle, annotationPtr);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 20,
      rect,
      field,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf file attachment annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf file attachment annotation
   *
   * @private
   */
  readPdfFileAttachmentAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 17,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf ink annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf ink annotation
   *
   * @private
   */
  readPdfInkAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    const inkList = [];
    const count = this.pdfiumModule.FPDFAnnot_GetInkListCount(annotationPtr);
    for (let i = 0; i < count; i++) {
      const points = [];
      const pointsCount = this.pdfiumModule.FPDFAnnot_GetInkListPath(annotationPtr, i, 0, 0);
      if (pointsCount > 0) {
        const pointMemorySize = 8;
        const pointsPtr = this.malloc(pointsCount * pointMemorySize);
        this.pdfiumModule.FPDFAnnot_GetInkListPath(annotationPtr, i, pointsPtr, pointsCount);
        for (let j = 0; j < pointsCount; j++) {
          const pointX = this.pdfiumModule.pdfium.getValue(pointsPtr + j * 8, "float");
          const pointY = this.pdfiumModule.pdfium.getValue(pointsPtr + j * 8 + 4, "float");
          const { x, y } = this.convertPagePointToDevicePoint(page, {
            x: pointX,
            y: pointY
          });
          points.push({ x, y });
        }
        this.free(pointsPtr);
      }
      inkList.push({ points });
    }
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 15,
      rect,
      popup,
      inkList,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf polygon annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf polygon annotation
   *
   * @private
   */
  readPdfPolygonAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    const vertices = this.readPdfAnnoVertices(page, pagePtr, annotationPtr);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 7,
      rect,
      popup,
      vertices,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf polyline annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf polyline annotation
   *
   * @private
   */
  readPdfPolylineAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    const vertices = this.readPdfAnnoVertices(page, pagePtr, annotationPtr);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 8,
      rect,
      popup,
      vertices,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf line annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf line annotation
   *
   * @private
   */
  readPdfLineAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    const startPointPtr = this.malloc(8);
    const endPointPtr = this.malloc(8);
    this.pdfiumModule.FPDFAnnot_GetLine(annotationPtr, startPointPtr, endPointPtr);
    const startPointX = this.pdfiumModule.pdfium.getValue(startPointPtr, "float");
    const startPointY = this.pdfiumModule.pdfium.getValue(startPointPtr + 4, "float");
    const startPoint = this.convertPagePointToDevicePoint(page, {
      x: startPointX,
      y: startPointY
    });
    const endPointX = this.pdfiumModule.pdfium.getValue(endPointPtr, "float");
    const endPointY = this.pdfiumModule.pdfium.getValue(endPointPtr + 4, "float");
    const endPoint = this.convertPagePointToDevicePoint(page, {
      x: endPointX,
      y: endPointY
    });
    this.free(startPointPtr);
    this.free(endPointPtr);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 4,
      rect,
      popup,
      startPoint,
      endPoint,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf highlight annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf highlight annotation
   *
   * @private
   */
  readPdfHighlightAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 9,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf underline annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf underline annotation
   *
   * @private
   */
  readPdfUnderlineAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 10,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read strikeout annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf strikeout annotation
   *
   * @private
   */
  readPdfStrikeOutAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 12,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf squiggly annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf squiggly annotation
   *
   * @private
   */
  readPdfSquigglyAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 11,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf caret annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf caret annotation
   *
   * @private
   */
  readPdfCaretAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 14,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf stamp annotation
   * @param docPtr - pointer to pdf document object
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf stamp annotation
   *
   * @private
   */
  readPdfStampAnno(docPtr, page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    const contents = [];
    const objectCount = this.pdfiumModule.FPDFAnnot_GetObjectCount(annotationPtr);
    for (let i = 0; i < objectCount; i++) {
      const annotationObjectPtr = this.pdfiumModule.FPDFAnnot_GetObject(annotationPtr, i);
      const pageObj = this.readPdfPageObject(annotationObjectPtr);
      if (pageObj) {
        contents.push(pageObj);
      }
    }
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 13,
      rect,
      popup,
      contents,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read pdf object in pdf page
   * @param pageObjectPtr  - pointer to pdf object in page
   * @returns pdf object in page
   *
   * @private
   */
  readPdfPageObject(pageObjectPtr) {
    const type = this.pdfiumModule.FPDFPageObj_GetType(pageObjectPtr);
    switch (type) {
      case 2:
        return this.readPathObject(pageObjectPtr);
      case 3:
        return this.readImageObject(pageObjectPtr);
      case 5:
        return this.readFormObject(pageObjectPtr);
    }
  }
  /**
   * Read pdf path object
   * @param pathObjectPtr  - pointer to pdf path object in page
   * @returns pdf path object
   *
   * @private
   */
  readPathObject(pathObjectPtr) {
    const segmentCount = this.pdfiumModule.FPDFPath_CountSegments(pathObjectPtr);
    const leftPtr = this.malloc(4);
    const bottomPtr = this.malloc(4);
    const rightPtr = this.malloc(4);
    const topPtr = this.malloc(4);
    this.pdfiumModule.FPDFPageObj_GetBounds(pathObjectPtr, leftPtr, bottomPtr, rightPtr, topPtr);
    const left = this.pdfiumModule.pdfium.getValue(leftPtr, "float");
    const bottom = this.pdfiumModule.pdfium.getValue(bottomPtr, "float");
    const right = this.pdfiumModule.pdfium.getValue(rightPtr, "float");
    const top = this.pdfiumModule.pdfium.getValue(topPtr, "float");
    const bounds = { left, bottom, right, top };
    this.free(leftPtr);
    this.free(bottomPtr);
    this.free(rightPtr);
    this.free(topPtr);
    const segments = [];
    for (let i = 0; i < segmentCount; i++) {
      const segment = this.readPdfSegment(pathObjectPtr, i);
      segments.push(segment);
    }
    const matrix = this.readPdfPageObjectTransformMatrix(pathObjectPtr);
    return {
      type: 2,
      bounds,
      segments,
      matrix
    };
  }
  /**
   * Read segment of pdf path object
   * @param annotationObjectPtr - pointer to pdf path object
   * @param segmentIndex - index of segment
   * @returns pdf segment in pdf path
   *
   * @private
   */
  readPdfSegment(annotationObjectPtr, segmentIndex) {
    const segmentPtr = this.pdfiumModule.FPDFPath_GetPathSegment(annotationObjectPtr, segmentIndex);
    const segmentType = this.pdfiumModule.FPDFPathSegment_GetType(segmentPtr);
    const isClosed = this.pdfiumModule.FPDFPathSegment_GetClose(segmentPtr);
    const pointXPtr = this.malloc(4);
    const pointYPtr = this.malloc(4);
    this.pdfiumModule.FPDFPathSegment_GetPoint(segmentPtr, pointXPtr, pointYPtr);
    const pointX = this.pdfiumModule.pdfium.getValue(pointXPtr, "float");
    const pointY = this.pdfiumModule.pdfium.getValue(pointYPtr, "float");
    this.free(pointXPtr);
    this.free(pointYPtr);
    return {
      type: segmentType,
      point: { x: pointX, y: pointY },
      isClosed
    };
  }
  /**
   * Read pdf image object from pdf document
   * @param pageObjectPtr  - pointer to pdf image object in page
   * @returns pdf image object
   *
   * @private
   */
  readImageObject(imageObjectPtr) {
    const bitmapPtr = this.pdfiumModule.FPDFImageObj_GetBitmap(imageObjectPtr);
    const bitmapBufferPtr = this.pdfiumModule.FPDFBitmap_GetBuffer(bitmapPtr);
    const bitmapWidth = this.pdfiumModule.FPDFBitmap_GetWidth(bitmapPtr);
    const bitmapHeight = this.pdfiumModule.FPDFBitmap_GetHeight(bitmapPtr);
    const format = this.pdfiumModule.FPDFBitmap_GetFormat(bitmapPtr);
    const pixelCount = bitmapWidth * bitmapHeight;
    const bytesPerPixel = 4;
    const array = new Uint8ClampedArray(pixelCount * bytesPerPixel);
    for (let i = 0; i < pixelCount; i++) {
      switch (format) {
        case 2:
          {
            const blue = this.pdfiumModule.pdfium.getValue(bitmapBufferPtr + i * 3, "i8");
            const green = this.pdfiumModule.pdfium.getValue(bitmapBufferPtr + i * 3 + 1, "i8");
            const red = this.pdfiumModule.pdfium.getValue(bitmapBufferPtr + i * 3 + 2, "i8");
            array[i * bytesPerPixel] = red;
            array[i * bytesPerPixel + 1] = green;
            array[i * bytesPerPixel + 2] = blue;
            array[i * bytesPerPixel + 3] = 100;
          }
          break;
      }
    }
    const imageData = new ImageData(array, bitmapWidth, bitmapHeight);
    const matrix = this.readPdfPageObjectTransformMatrix(imageObjectPtr);
    return {
      type: 3,
      imageData,
      matrix
    };
  }
  /**
   * Read form object from pdf document
   * @param formObjectPtr  - pointer to pdf form object in page
   * @returns pdf form object
   *
   * @private
   */
  readFormObject(formObjectPtr) {
    const objectCount = this.pdfiumModule.FPDFFormObj_CountObjects(formObjectPtr);
    const objects = [];
    for (let i = 0; i < objectCount; i++) {
      const pageObjectPtr = this.pdfiumModule.FPDFFormObj_GetObject(formObjectPtr, i);
      const pageObj = this.readPdfPageObject(pageObjectPtr);
      if (pageObj) {
        objects.push(pageObj);
      }
    }
    const matrix = this.readPdfPageObjectTransformMatrix(formObjectPtr);
    return {
      type: 5,
      objects,
      matrix
    };
  }
  /**
   * Read pdf object in pdf page
   * @param pageObjectPtr  - pointer to pdf object in page
   * @returns pdf object in page
   *
   * @private
   */
  readPdfPageObjectTransformMatrix(pageObjectPtr) {
    const matrixPtr = this.malloc(4 * 6);
    if (this.pdfiumModule.FPDFPageObj_GetMatrix(pageObjectPtr, matrixPtr)) {
      const a = this.pdfiumModule.pdfium.getValue(matrixPtr, "float");
      const b = this.pdfiumModule.pdfium.getValue(matrixPtr + 4, "float");
      const c = this.pdfiumModule.pdfium.getValue(matrixPtr + 8, "float");
      const d = this.pdfiumModule.pdfium.getValue(matrixPtr + 12, "float");
      const e = this.pdfiumModule.pdfium.getValue(matrixPtr + 16, "float");
      const f = this.pdfiumModule.pdfium.getValue(matrixPtr + 20, "float");
      this.free(matrixPtr);
      return { a, b, c, d, e, f };
    }
    this.free(matrixPtr);
    return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  }
  /**
   * Read circle annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf circle annotation
   *
   * @private
   */
  readPdfCircleAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 6,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read square annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf square annotation
   *
   * @private
   */
  readPdfSquareAnno(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 5,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read basic info of unsupported pdf annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param type - type of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf annotation
   *
   * @private
   */
  readPdfAnno(page, pagePtr, type, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const popup = this.readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type,
      rect,
      popup,
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read linked popup of pdf annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf popup linked to annotation
   *
   * @private
   */
  readPdfAnnoLinkedPopup(page, pagePtr, annotationPtr, index) {
    const appearence = this.readPageAnnoAppearanceStream(annotationPtr);
    const popupAnnotationPtr = this.pdfiumModule.FPDFAnnot_GetLinkedAnnot(annotationPtr, "Popup");
    if (!popupAnnotationPtr) {
      return;
    }
    const pageRect = this.readPageAnnoRect(popupAnnotationPtr);
    const rect = this.convertPageRectToDeviceRect(page, pagePtr, pageRect);
    const contentsLength = this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, "Contents", 0, 0);
    const contentsBytesCount = (contentsLength + 1) * 2;
    const contentsPtr = this.malloc(contentsBytesCount);
    this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, "Contents", contentsPtr, contentsBytesCount);
    const contents = this.pdfiumModule.pdfium.UTF16ToString(contentsPtr);
    this.free(contentsPtr);
    const openLength = this.pdfiumModule.FPDFAnnot_GetStringValue(popupAnnotationPtr, "Open", 0, 0);
    const openBytesCount = (openLength + 1) * 2;
    const openPtr = this.malloc(openBytesCount);
    this.pdfiumModule.FPDFAnnot_GetStringValue(popupAnnotationPtr, "Open", openPtr, openBytesCount);
    const open = this.pdfiumModule.pdfium.UTF16ToString(openPtr);
    this.free(openPtr);
    this.pdfiumModule.FPDFPage_CloseAnnot(popupAnnotationPtr);
    return {
      status: 1,
      pageIndex: page.index,
      id: index,
      type: 16,
      rect,
      contents,
      open: open === "true",
      appearances: {
        normal: appearence
      }
    };
  }
  /**
   * Read vertices of pdf annotation
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param annotationPtr - pointer to pdf annotation
   * @returns vertices of pdf annotation
   *
   * @private
   */
  readPdfAnnoVertices(page, pagePtr, annotationPtr) {
    const vertices = [];
    const count = this.pdfiumModule.FPDFAnnot_GetVertices(annotationPtr, 0, 0);
    const pointMemorySize = 8;
    const pointsPtr = this.malloc(count * pointMemorySize);
    this.pdfiumModule.FPDFAnnot_GetVertices(annotationPtr, pointsPtr, count);
    for (let i = 0; i < count; i++) {
      const pointX = this.pdfiumModule.pdfium.getValue(pointsPtr + i * pointMemorySize, "float");
      const pointY = this.pdfiumModule.pdfium.getValue(pointsPtr + i * pointMemorySize + 4, "float");
      const { x, y } = this.convertPagePointToDevicePoint(page, {
        x: pointX,
        y: pointY
      });
      vertices.push({
        x,
        y
      });
    }
    this.free(pointsPtr);
    return vertices;
  }
  /**
   * Read the target of pdf bookmark
   * @param docPtr - pointer to pdf document object
   * @param getActionPtr - callback function to retrive the pointer of action
   * @param getDestinationPtr - callback function to retrive the pointer of destination
   * @returns target of pdf bookmark
   *
   * @private
   */
  readPdfBookmarkTarget(docPtr, getActionPtr, getDestinationPtr) {
    const actionPtr = getActionPtr();
    if (actionPtr) {
      const action = this.readPdfAction(docPtr, actionPtr);
      return {
        type: "action",
        action
      };
    } else {
      const destinationPtr = getDestinationPtr();
      if (destinationPtr) {
        const destination = this.readPdfDestination(docPtr, destinationPtr);
        return {
          type: "destination",
          destination
        };
      }
    }
  }
  /**
   * Read field of pdf widget annotation
   * @param formHandle - form handle
   * @param annotationPtr - pointer to pdf annotation
   * @returns field of pdf widget annotation
   *
   * @private
   */
  readPdfWidgetAnnoField(formHandle, annotationPtr) {
    const flag = this.pdfiumModule.FPDFAnnot_GetFormFieldFlags(formHandle, annotationPtr);
    const type = this.pdfiumModule.FPDFAnnot_GetFormFieldType(formHandle, annotationPtr);
    const name = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAnnot_GetFormFieldName(formHandle, annotationPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const alternateName = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAnnot_GetFormFieldAlternateName(formHandle, annotationPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const value = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAnnot_GetFormFieldValue(formHandle, annotationPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const options = [];
    if (type === 4 || type === 5) {
      const count = this.pdfiumModule.FPDFAnnot_GetOptionCount(formHandle, annotationPtr);
      for (let i = 0; i < count; i++) {
        const label = readString(
          this.pdfiumModule.pdfium,
          (buffer, bufferLength) => {
            return this.pdfiumModule.FPDFAnnot_GetOptionLabel(formHandle, annotationPtr, i, buffer, bufferLength);
          },
          this.pdfiumModule.pdfium.UTF16ToString
        );
        const isSelected = this.pdfiumModule.FPDFAnnot_IsOptionSelected(formHandle, annotationPtr, i);
        options.push({
          label,
          isSelected
        });
      }
    }
    let isChecked = false;
    if (type === 2 || type === 3) {
      isChecked = this.pdfiumModule.FPDFAnnot_IsChecked(formHandle, annotationPtr);
    }
    return {
      flag,
      type,
      name,
      alternateName,
      value,
      isChecked,
      options
    };
  }
  /**
   * render rectangle of pdf page to image
   * @param docPtr - pointer to pdf document object
   * @param page  - pdf page infor
   * @param rect - rectangle info
   * @param scaleFactor  - factor of scalling
   * @param rotation  - rotation angle
   * @param options - render options
   * @returns image data
   *
   * @private
   */
  renderPageRectToImageData(docPtr, page, rect, scaleFactor, rotation, options) {
    const format = 4;
    const bytesPerPixel = 4;
    const bitmapSize = transformSize(rect.size, rotation, scaleFactor * DPR);
    const bitmapHeapLength = bitmapSize.width * bitmapSize.height * bytesPerPixel;
    const bitmapHeapPtr = this.malloc(bitmapHeapLength);
    const bitmapPtr = this.pdfiumModule.FPDFBitmap_CreateEx(
      bitmapSize.width,
      bitmapSize.height,
      format,
      bitmapHeapPtr,
      bitmapSize.width * bytesPerPixel
    );
    this.pdfiumModule.FPDFBitmap_FillRect(bitmapPtr, 0, 0, bitmapSize.width, bitmapSize.height, 4294967295);
    let flags = 16;
    if (options?.withAnnotations) {
      flags = flags | 1;
    }
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, page.index);
    this.pdfiumModule.FPDF_RenderPageBitmap(
      bitmapPtr,
      pagePtr,
      rect.origin.x,
      rect.origin.y,
      bitmapSize.width,
      bitmapSize.height,
      rotation,
      flags
    );
    this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
    this.pdfiumModule.FPDF_ClosePage(pagePtr);
    const array = new Uint8ClampedArray(bitmapHeapLength);
    const dataView = new DataView(array.buffer);
    for (let i = 0; i < bitmapHeapLength; i++) {
      dataView.setInt8(i, this.pdfiumModule.pdfium.getValue(bitmapHeapPtr + i, "i8"));
    }
    this.free(bitmapHeapPtr);
    const imageData = new ImageData(array, bitmapSize.width, bitmapSize.height);
    return imageData;
  }
  /**
   * Read the target of pdf link annotation
   * @param docPtr - pointer to pdf document object
   * @param getActionPtr - callback function to retrive the pointer of action
   * @param getDestinationPtr - callback function to retrive the pointer of destination
   * @returns target of link
   *
   * @private
   */
  readPdfLinkAnnoTarget(docPtr, getActionPtr, getDestinationPtr) {
    const destinationPtr = getDestinationPtr();
    if (destinationPtr) {
      const destination = this.readPdfDestination(docPtr, destinationPtr);
      return {
        type: "destination",
        destination
      };
    } else {
      const actionPtr = getActionPtr();
      if (actionPtr) {
        const action = this.readPdfAction(docPtr, actionPtr);
        return {
          type: "action",
          action
        };
      }
    }
  }
  /**
   * Read pdf action from pdf document
   * @param docPtr - pointer to pdf document object
   * @param actionPtr - pointer to pdf action object
   * @returns pdf action object
   *
   * @private
   */
  readPdfAction(docPtr, actionPtr) {
    const actionType = this.pdfiumModule.FPDFAction_GetType(actionPtr);
    let action;
    switch (actionType) {
      case 0:
        action = {
          type: 0
          /* Unsupported */
        };
        break;
      case 1:
        {
          const destinationPtr = this.pdfiumModule.FPDFAction_GetDest(docPtr, actionPtr);
          if (destinationPtr) {
            const destination = this.readPdfDestination(docPtr, destinationPtr);
            action = {
              type: 1,
              destination
            };
          } else {
            action = {
              type: 0
              /* Unsupported */
            };
          }
        }
        break;
      case 2:
        {
          action = {
            type: 0
            /* Unsupported */
          };
        }
        break;
      case 3:
        {
          const uri = readString(
            this.pdfiumModule.pdfium,
            (buffer, bufferLength) => {
              return this.pdfiumModule.FPDFAction_GetURIPath(docPtr, actionPtr, buffer, bufferLength);
            },
            this.pdfiumModule.pdfium.UTF8ToString
          );
          action = {
            type: 3,
            uri
          };
        }
        break;
      case 4:
        {
          const path = readString(
            this.pdfiumModule.pdfium,
            (buffer, bufferLength) => {
              return this.pdfiumModule.FPDFAction_GetFilePath(actionPtr, buffer, bufferLength);
            },
            this.pdfiumModule.pdfium.UTF8ToString
          );
          action = {
            type: 4,
            path
          };
        }
        break;
    }
    return action;
  }
  /**
   * Read pdf destination object
   * @param docPtr - pointer to pdf document object
   * @param destinationPtr - pointer to pdf destination
   * @returns pdf destination object
   *
   * @private
   */
  readPdfDestination(docPtr, destinationPtr) {
    const pageIndex = this.pdfiumModule.FPDFDest_GetDestPageIndex(docPtr, destinationPtr);
    const maxParmamsCount = 4;
    const paramsCountPtr = this.malloc(maxParmamsCount);
    const paramsPtr = this.malloc(maxParmamsCount * 4);
    const zoomMode = this.pdfiumModule.FPDFDest_GetView(destinationPtr, paramsCountPtr, paramsPtr);
    const paramsCount = this.pdfiumModule.pdfium.getValue(paramsCountPtr, "i32");
    const view = [];
    for (let i = 0; i < paramsCount; i++) {
      const paramPtr = paramsPtr + i * 4;
      view.push(this.pdfiumModule.pdfium.getValue(paramPtr, "float"));
    }
    this.free(paramsCountPtr);
    this.free(paramsPtr);
    if (zoomMode === 1) {
      const hasXPtr = this.malloc(1);
      const hasYPtr = this.malloc(1);
      const hasZPtr = this.malloc(1);
      const xPtr = this.malloc(4);
      const yPtr = this.malloc(4);
      const zPtr = this.malloc(4);
      const isSucceed = this.pdfiumModule.FPDFDest_GetLocationInPage(
        destinationPtr,
        hasXPtr,
        hasYPtr,
        hasZPtr,
        xPtr,
        yPtr,
        zPtr
      );
      if (isSucceed) {
        const hasX = this.pdfiumModule.pdfium.getValue(hasXPtr, "i8");
        const hasY = this.pdfiumModule.pdfium.getValue(hasYPtr, "i8");
        const hasZ = this.pdfiumModule.pdfium.getValue(hasZPtr, "i8");
        const x = hasX ? this.pdfiumModule.pdfium.getValue(xPtr, "float") : 0;
        const y = hasY ? this.pdfiumModule.pdfium.getValue(yPtr, "float") : 0;
        const zoom = hasZ ? this.pdfiumModule.pdfium.getValue(zPtr, "float") : 0;
        this.free(hasXPtr);
        this.free(hasYPtr);
        this.free(hasZPtr);
        this.free(xPtr);
        this.free(yPtr);
        this.free(zPtr);
        return {
          pageIndex,
          zoom: {
            mode: zoomMode,
            params: {
              x,
              y,
              zoom
            }
          },
          view
        };
      }
      this.free(hasXPtr);
      this.free(hasYPtr);
      this.free(hasZPtr);
      this.free(xPtr);
      this.free(yPtr);
      this.free(zPtr);
      return {
        pageIndex,
        zoom: {
          mode: zoomMode,
          params: {
            x: 0,
            y: 0,
            zoom: 0
          }
        },
        view
      };
    }
    return {
      pageIndex,
      zoom: {
        mode: zoomMode
      },
      view
    };
  }
  /**
   * Read attachmet from pdf document
   * @param docPtr - pointer to pdf document object
   * @param index - index of attachment
   * @returns attachment content
   *
   * @private
   */
  readPdfAttachment(docPtr, index) {
    const attachmentPtr = this.pdfiumModule.FPDFDoc_GetAttachment(docPtr, index);
    const name = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAttachment_GetName(attachmentPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const creationDate = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAttachment_GetStringValue(attachmentPtr, "CreationDate", buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const checksum = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAttachment_GetStringValue(attachmentPtr, "Checksum", buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    return {
      index,
      name,
      creationDate,
      checksum
    };
  }
  /**
   * Convert coordinate of point from device coordinate to page coordinate
   * @param page  - pdf page infor
   * @param position - position of point
   * @returns converted position
   *
   * @private
   */
  convertDevicePointToPagePoint(page, position) {
    const x = position.x;
    const y = page.size.height - position.y;
    return { x, y };
  }
  /**
   * Convert coordinate of point from page coordinate to device coordinate
   * @param page  - pdf page infor
   * @param position - position of point
   * @returns converted position
   *
   * @private
   */
  convertPagePointToDevicePoint(page, position) {
    const x = position.x;
    const y = page.size.height - position.y;
    return { x, y };
  }
  /**
   * Convert coordinate of rectangle from page coordinate to device coordinate
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param pageRect - rectangle that needs to be converted
   * @returns converted rectangle
   *
   * @private
   */
  convertPageRectToDeviceRect(page, pagePtr, pageRect) {
    const { x, y } = this.convertPagePointToDevicePoint(page, {
      x: pageRect.left,
      y: pageRect.top
    });
    const rect = {
      origin: {
        x,
        y
      },
      size: {
        width: Math.abs(pageRect.right - pageRect.left),
        height: Math.abs(pageRect.top - pageRect.bottom)
      }
    };
    return rect;
  }
  /**
   * Read the appearance stream of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @param mode - appearance mode
   * @returns appearance stream
   *
   * @private
   */
  readPageAnnoAppearanceStream(annotationPtr, mode = 0) {
    const utf16Length = this.pdfiumModule.FPDFAnnot_GetAP(annotationPtr, mode, 0, 0);
    const bytesCount = (utf16Length + 1) * 2;
    const bufferPtr = this.malloc(bytesCount);
    this.pdfiumModule.FPDFAnnot_GetAP(annotationPtr, mode, bufferPtr, bytesCount);
    const ap = this.pdfiumModule.pdfium.UTF16ToString(bufferPtr);
    this.free(bufferPtr);
    return ap;
  }
  /**
   * Set the rect of specified annotation
   * @param page - page info that the annotation is belonged to
   * @param pagePtr - pointer of page object
   * @param annotationPtr - pointer to annotation object
   * @param rect - target rectangle
   * @returns whether the rect is setted
   *
   * @private
   */
  setPageAnnoRect(page, pagePtr, annotationPtr, rect) {
    const pageXPtr = this.malloc(8);
    const pageYPtr = this.malloc(8);
    if (!this.pdfiumModule.FPDF_DeviceToPage(
      pagePtr,
      0,
      0,
      page.size.width,
      page.size.height,
      0,
      rect.origin.x,
      rect.origin.y,
      pageXPtr,
      pageYPtr
    )) {
      this.free(pageXPtr);
      this.free(pageYPtr);
      return false;
    }
    const pageX = this.pdfiumModule.pdfium.getValue(pageXPtr, "double");
    const pageY = this.pdfiumModule.pdfium.getValue(pageYPtr, "double");
    this.free(pageXPtr);
    this.free(pageYPtr);
    const pageRectPtr = this.malloc(4 * 4);
    this.pdfiumModule.pdfium.setValue(pageRectPtr, pageX, "float");
    this.pdfiumModule.pdfium.setValue(pageRectPtr + 4, pageY, "float");
    this.pdfiumModule.pdfium.setValue(pageRectPtr + 8, pageX + rect.size.width, "float");
    this.pdfiumModule.pdfium.setValue(pageRectPtr + 12, pageY - rect.size.height, "float");
    if (!this.pdfiumModule.FPDFAnnot_SetRect(annotationPtr, pageRectPtr)) {
      this.free(pageRectPtr);
      return false;
    }
    this.free(pageRectPtr);
    return true;
  }
  /**
   * Read the rectangle of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @returns rectangle of annotation
   *
   * @private
   */
  readPageAnnoRect(annotationPtr) {
    const pageRectPtr = this.malloc(4 * 4);
    const pageRect = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    if (this.pdfiumModule.FPDFAnnot_GetRect(annotationPtr, pageRectPtr)) {
      pageRect.left = this.pdfiumModule.pdfium.getValue(pageRectPtr, "float");
      pageRect.top = this.pdfiumModule.pdfium.getValue(pageRectPtr + 4, "float");
      pageRect.right = this.pdfiumModule.pdfium.getValue(pageRectPtr + 8, "float");
      pageRect.bottom = this.pdfiumModule.pdfium.getValue(pageRectPtr + 12, "float");
    }
    this.free(pageRectPtr);
    return pageRect;
  }
};
var PDFiumServer = class extends EngineRunner {
  constructor(props = {}) {
    super();
    this.props = props;
  }
  async run() {
    let wasmBinary;
    if (this.props.wasmBinary) {
      wasmBinary = this.props.wasmBinary;
    } else {
      let wasmUrl = "https://raw.githubusercontent.com/nguyenyou/pdf-sample-files/main/examples/pdfium.wasm";
      if (this.props.wasmUrl) wasmUrl = this.props.wasmUrl;
      const response = await fetch(wasmUrl);
      wasmBinary = await response.arrayBuffer();
    }
    const wasmModule = await init({ wasmBinary });
    this.engine = new PdfiumEngine(wasmModule);
    this.ready();
  }
};

// src/index.ts
async function init2() {
  const server = new PDFiumServer();
  await server.run();
}
init2().catch((err) => {
  console.log("Error init worker", err);
});
