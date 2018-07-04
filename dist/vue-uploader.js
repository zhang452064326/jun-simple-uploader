! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["vue-uploader"] = t() : e["vue-uploader"] = t() }(this, function() {
    return function(e) {
        function t(n) { if (i[n]) return i[n].exports; var r = i[n] = { i: n, l: !1, exports: {} }; return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports }
        var i = {};
        return t.m = e, t.c = i, t.i = function(e) { return e }, t.d = function(e, i, n) { t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: n }) }, t.n = function(e) { var i = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(i, "a", i), i }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "./", t(t.s = 24)
    }([function(e, t) {
        function i(e, t) {
            var i = e[1] || "",
                r = e[3];
            if (!r) return i;
            if (t && "function" == typeof btoa) { var o = n(r); return [i].concat(r.sources.map(function(e) { return "/*# sourceURL=" + r.sourceRoot + e + " */" })).concat([o]).join("\n") }
            return [i].join("\n")
        }

        function n(e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */" }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() { return this.map(function(t) { var n = i(t, e); return t[2] ? "@media " + t[2] + "{" + n + "}" : n }).join("") }, t.i = function(e, i) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var n = {}, r = 0; r < this.length; r++) { var o = this[r][0]; "number" == typeof o && (n[o] = !0) }
                for (r = 0; r < e.length; r++) { var s = e[r]; "number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), t.push(s)) }
            }, t
        }
    }, function(e, t) {
        e.exports = function(e, t, i, n, r) {
            var o, s = e = e || {},
                a = typeof e.default;
            "object" !== a && "function" !== a || (o = e, s = e.default);
            var u = "function" == typeof s ? s.options : s;
            t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns), n && (u._scopeId = n);
            var l;
            if (r ? (l = function(e) { e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r) }, u._ssrRegister = l) : i && (l = i), l) {
                var p = u.functional,
                    f = p ? u.render : u.beforeCreate;
                p ? u.render = function(e, t) { return l.call(t), f(e, t) } : u.beforeCreate = f ? [].concat(f, l) : [l]
            }
            return { esModule: o, exports: s, options: u }
        }
    }, function(e, t, i) {
        function n(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t],
                    n = p[i.id];
                if (n) {
                    n.refs++;
                    for (var r = 0; r < n.parts.length; r++) n.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) n.parts.push(o(i.parts[r]));
                    n.parts.length > i.parts.length && (n.parts.length = i.parts.length)
                } else {
                    for (var s = [], r = 0; r < i.parts.length; r++) s.push(o(i.parts[r]));
                    p[i.id] = { id: i.id, refs: 1, parts: s }
                }
            }
        }

        function r() { var e = document.createElement("style"); return e.type = "text/css", f.appendChild(e), e }

        function o(e) {
            var t, i, n = document.querySelector("style[" + g + '~="' + e.id + '"]');
            if (n) {
                if (h) return A;
                n.parentNode.removeChild(n)
            }
            if (C) {
                var o = c++;
                n = d || (d = r()), t = s.bind(null, n, o, !1), i = s.bind(null, n, o, !0)
            } else n = r(), t = a.bind(null, n), i = function() { n.parentNode.removeChild(n) };
            return t(e),
                function(n) {
                    if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                        t(e = n)
                    } else i()
                }
        }

        function s(e, t, i, n) {
            var r = i ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = m(t, r);
            else {
                var o = document.createTextNode(r),
                    s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
            }
        }

        function a(e, t) {
            var i = t.css,
                n = t.media,
                r = t.sourceMap;
            if (n && e.setAttribute("media", n), v.ssrId && e.setAttribute(g, t.id), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = i;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i))
            }
        }
        var u = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !u) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var l = i(82),
            p = {},
            f = u && (document.head || document.getElementsByTagName("head")[0]),
            d = null,
            c = 0,
            h = !1,
            A = function() {},
            v = null,
            g = "data-vue-ssr-id",
            C = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function(e, t, i, r) {
            h = i, v = r || {};
            var o = l(e, t);
            return n(o),
                function(t) {
                    for (var i = [], r = 0; r < o.length; r++) {
                        var s = o[r],
                            a = p[s.id];
                        a.refs--, i.push(a)
                    }
                    t ? (o = l(e, t), n(o)) : o = [];
                    for (var r = 0; r < i.length; r++) {
                        var a = i[r];
                        if (0 === a.refs) {
                            for (var u = 0; u < a.parts.length; u++) a.parts[u]();
                            delete p[a.id]
                        }
                    }
                }
        };
        var m = function() { var e = []; return function(t, i) { return e[t] = i, e.filter(Boolean).join("\n") } }()
    }, function(e, t, i) {
        function n(e) { i(77) }
        var r = i(1)(i(27), i(70), n, null, null);
        e.exports = r.exports
    }, function(e, t) {
        var i = Object.prototype,
            n = Array.prototype,
            r = i.toString,
            o = function(e) { return "[object Function]" === r.call(e) },
            s = Array.isArray || function(e) { return "[object Array]" === r.call(e) },
            a = function(e) { return "[object Object]" === r.call(e) && Object.getPrototypeOf(e) === i },
            u = 0,
            l = {
                uid: function() { return ++u },
                noop: function() {},
                bind: function(e, t) { return function() { return e.apply(t, arguments) } },
                preventEvent: function(e) { e.preventDefault() },
                stop: function(e) { e.preventDefault(), e.stopPropagation() },
                nextTick: function(e, t) { setTimeout(l.bind(e, t), 0) },
                toArray: function(e, t, i) { return void 0 === t && (t = 0), void 0 === i && (i = e.length), n.slice.call(e, t, i) },
                isPlainObject: a,
                isFunction: o,
                isArray: s,
                isObject: function(e) { return Object(e) === e },
                isString: function(e) { return "string" == typeof e },
                isUndefined: function(e) { return void 0 === e },
                isDefined: function(e) { return void 0 !== e },
                each: function(e, t, i) {
                    if (l.isDefined(e.length))
                        for (var n = 0, r = e.length; n < r && !1 !== t.call(i, e[n], n, e); n++);
                    else
                        for (var o in e)
                            if (!1 === t.call(i, e[o], o, e)) break
                },
                evalOpts: function(e, t) { return l.isFunction(e) && (t = l.toArray(arguments), e = e.apply(null, t.slice(1))), e },
                extend: function() {
                    var e, t, i, n, r, u, p = arguments[0] || {},
                        f = 1,
                        d = arguments.length,
                        c = !1;
                    for ("boolean" == typeof p && (c = p, p = arguments[1] || {}, f++), "object" == typeof p || o(p) || (p = {}), f === d && (p = this, f--); f < d; f++)
                        if (null != (e = arguments[f]))
                            for (t in e) i = p[t], n = e[t], p !== n && (c && n && (a(n) || (r = s(n))) ? (r ? (r = !1, u = i && s(i) ? i : []) : u = i && a(i) ? i : {}, p[t] = l.extend(c, u, n)) : void 0 !== n && (p[t] = n));
                    return p
                },
                formatSize: function(e) { return e < 1024 ? e.toFixed(0) + " bytes" : e < 1048576 ? (e / 1024).toFixed(0) + " KB" : e < 1073741824 ? (e / 1024 / 1024).toFixed(1) + " MB" : (e / 1024 / 1024 / 1024).toFixed(1) + " GB" },
                defineNonEnumerable: function(e, t, i) { Object.defineProperty(e, t, { enumerable: !1, configurable: !0, writable: !0, value: i }) }
            };
        e.exports = l
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [t, i(6)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.supportMixin = e.uploaderMixin = void 0;
            e.uploaderMixin = { mounted: function() { this.uploader = (0, t.getUploader)(this) } }, e.supportMixin = { data: function() { return { support: !0 } }, mounted: function() { this.support = this.uploader.support } }
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(i, s) { r = [t], n = s, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e) {
            "use strict";

            function t(e) {
                for (var t = e.$parent; t;) {
                    if (t.uploader) return t.uploader;
                    t = t.$parent
                }
                return null
            }

            function i(e) {
                function t(e) { return e > 1 ? "s" : "" }
                var i = Math.floor(e / 31536e3);
                if (i) return i + " year" + t(i);
                var n = Math.floor((e %= 31536e3) / 86400);
                if (n) return n + " day" + t(n);
                var r = Math.floor((e %= 86400) / 3600);
                if (r) return r + " hour" + t(r);
                var o = Math.floor((e %= 3600) / 60);
                if (o) return o + " minute" + t(o);
                var s = e % 60;
                return s + " second" + t(s)
            }

            function n(e) { return e.replace(/[A-Z]/g, function(e) { return "-" + e.toLowerCase() }) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e.getUploader = t, e.secondsToStr = i, e.kebabCase = n
        })
    }, function(e, t) { var i = e.exports = { version: "2.5.3" }; "number" == typeof __e && (__e = i) }, function(e, t, i) { e.exports = !i(9)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t) { var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = i) }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, i) {
        function n(e) { i(81) }
        var r = i(1)(i(25), i(74), n, null, null);
        e.exports = r.exports
    }, function(e, t, i) {
        function n(e) { i(79) }
        var r = i(1)(i(26), i(72), n, null, null);
        e.exports = r.exports
    }, function(e, t, i) {
        function n(e) { i(80) }
        var r = i(1)(i(28), i(73), n, null, null);
        e.exports = r.exports
    }, function(e, t, i) {
        function n(e) { i(76) }
        var r = i(1)(i(29), i(69), n, null, null);
        e.exports = r.exports
    }, function(e, t, i) {
        function n(e) { i(75) }
        var r = i(1)(i(30), i(68), n, null, null);
        e.exports = r.exports
    }, function(e, t) { e.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } }, function(e, t) {
        var i = Math.ceil,
            n = Math.floor;
        e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? n : i)(e) }
    }, function(e, t, i) {
        var n = i(45),
            r = i(17);
        e.exports = function(e) { return n(r(e)) }
    }, function(e, t, i) {
        function n(e, t, i) { r.defineNonEnumerable(this, "uploader", e), r.defineNonEnumerable(this, "file", t), r.defineNonEnumerable(this, "bytes", null), this.offset = i, this.tested = !1, this.retries = 0, this.pendingRetry = !1, this.preprocessState = 0, this.readState = 0, this.loaded = 0, this.total = 0, this.chunkSize = this.uploader.opts.chunkSize, this.startByte = this.offset * this.chunkSize, this.endByte = this.computeEndByte(), this.xhr = null }
        var r = i(4),
            o = n.STATUS = { PENDING: "pending", UPLOADING: "uploading", READING: "reading", SUCCESS: "success", ERROR: "error", COMPLETE: "complete", PROGRESS: "progress", RETRY: "retry" };
        r.extend(n.prototype, {
            _event: function(e, t) { t = r.toArray(arguments), t.unshift(this), this.file._chunkEvent.apply(this.file, t) },
            computeEndByte: function() { var e = Math.min(this.file.size, (this.offset + 1) * this.chunkSize); return this.file.size - e < this.chunkSize && !this.uploader.opts.forceChunkSize && (e = this.file.size), e },
            getParams: function() {
                var relative_path = "";
                relative_path = this.file.relativePath.substring(0, this.file.relativePath.lastIndexOf(this.file.name));
                return { chunkNumber: this.offset + 1, chunkSize: this.uploader.opts.chunkSize, currentChunkSize: this.endByte - this.startByte, totalSize: this.file.size, identifier: this.file.uniqueIdentifier, filename: this.file.name, relativePath: this.file.relativePath, relative_path: relative_path, totalChunks: this.file.chunks.length }
            },
            getTarget: function(e, t) { return e.indexOf("?") < 0 ? e += "?" : e += "&", e + t.join("&") },
            test: function() {
                function e(e) {
                    var t = n.status(!0);
                    t === o.ERROR ? (n._event(t, n.message()), n.uploader.uploadNextChunk()) : t === o.SUCCESS ? (n._event(t, n.message()), n.tested = !0) : n.file.paused || (n.tested = !0, n.send())
                }
                this.xhr = new XMLHttpRequest, this.xhr.addEventListener("load", e, !1), this.xhr.addEventListener("error", e, !1);
                var t = r.evalOpts(this.uploader.opts.testMethod, this.file, this),
                    i = this.prepareXhrRequest(t, !0);
                this.xhr.send(i);
                var n = this
            },
            preprocessFinished: function() { this.endByte = this.computeEndByte(), this.preprocessState = 2, this.send() },
            readFinished: function(e) { this.readState = 2, this.bytes = e, this.send() },
            send: function() {
                function e(e) { e.lengthComputable && (u.loaded = e.loaded, u.total = e.total), u._event(o.PROGRESS, e) }

                function t(e) {
                    var t = u.status();
                    if (t === o.SUCCESS || t === o.ERROR) delete this.data, u._event(t, u.message()), t === o.ERROR && u.uploader.uploadNextChunk();
                    else {
                        u._event(o.RETRY, u.message()), u.pendingRetry = !0, u.abort(), u.retries++;
                        var i = u.uploader.opts.chunkRetryInterval;
                        null !== i ? setTimeout(function() { u.send() }, i) : u.send()
                    }
                }
                var i = this.uploader.opts.preprocess,
                    n = this.uploader.opts.readFileFn;
                if (r.isFunction(i)) switch (this.preprocessState) {
                    case 0:
                        return this.preprocessState = 1, void i(this);
                    case 1:
                        return
                }
                switch (this.readState) {
                    case 0:
                        return this.readState = 1, void n(this.file, this.file.fileType, this.startByte, this.endByte, this);
                    case 1:
                        return
                }
                if (this.uploader.opts.testChunks && !this.tested) return void this.test();
                this.loaded = 0, this.total = 0, this.pendingRetry = !1, this.xhr = new XMLHttpRequest, this.xhr.upload.addEventListener("progress", e, !1), this.xhr.addEventListener("load", t, !1), this.xhr.addEventListener("error", t, !1);
                var s = r.evalOpts(this.uploader.opts.uploadMethod, this.file, this),
                    a = this.prepareXhrRequest(s, !1, this.uploader.opts.method, this.bytes);
                this.xhr.send(a);
                var u = this
            },
            abort: function() {
                var e = this.xhr;
                this.xhr = null, e && e.abort()
            },
            status: function(e) { return 1 === this.readState ? o.READING : this.pendingRetry || 1 === this.preprocessState ? o.UPLOADING : this.xhr ? this.xhr.readyState < 4 ? o.UPLOADING : this.uploader.opts.successStatuses.indexOf(this.xhr.status) > -1 ? o.SUCCESS : this.uploader.opts.permanentErrors.indexOf(this.xhr.status) > -1 || !e && this.retries >= this.uploader.opts.maxChunkRetries ? o.ERROR : (this.abort(), o.PENDING) : o.PENDING },
            message: function() { return this.xhr ? this.xhr.responseText : "" },
            progress: function() { if (this.pendingRetry) return 0; var e = this.status(); return e === o.SUCCESS || e === o.ERROR ? 1 : e === o.PENDING ? 0 : this.total > 0 ? this.loaded / this.total : 0 },
            sizeUploaded: function() { var e = this.endByte - this.startByte; return this.status() !== o.SUCCESS && (e = this.progress() * e), e },
            prepareXhrRequest: function(e, t, i, n) {
                var o = r.evalOpts(this.uploader.opts.query, this.file, this, t);
                o = r.extend(this.getParams(), o);
                var s = r.evalOpts(this.uploader.opts.target, this.file, this, t),
                    a = null;
                if ("GET" === e || "octet" === i) {
                    var u = [];
                    r.each(o, function(e, t) { u.push([encodeURIComponent(t), encodeURIComponent(e)].join("=")) }), s = this.getTarget(s, u), a = n || null
                } else a = new FormData, r.each(o, function(e, t) { a.append(t, e) }), a.append(this.uploader.opts.fileParameterName, n, this.file.name);
                return this.xhr.open(e, s, !0), this.xhr.withCredentials = this.uploader.opts.withCredentials, r.each(r.evalOpts(this.uploader.opts.headers, this.file, this, t), function(e, t) { this.xhr.setRequestHeader(t, e) }, this), a
            }
        }), e.exports = n
    }, function(e, t, i) {
        function n(e) { this.support = l, this.support && (this.supportDirectory = p, r.defineNonEnumerable(this, "filePaths", {}), this.opts = r.extend({}, n.defaults, e || {}), s.call(this, this)) }
        var r = i(4),
            o = i(66),
            s = i(67),
            a = i(20),
            u = window.navigator.msPointerEnabled,
            l = function() {
                var e = "slice",
                    t = r.isDefined(window.File) && r.isDefined(window.Blob) && r.isDefined(window.FileList),
                    i = null;
                return t && (i = window.Blob.prototype, r.each(["slice", "webkitSlice", "mozSlice"], function(t) { if (i[t]) return e = t, !1 }), t = !!i[e]), t && (n.sliceName = e), i = null, t
            }(),
            p = function() {
                var e = window.document.createElement("input");
                e.type = "file";
                var t = "webkitdirectory" in e || "directory" in e;
                return e = null, t
            }(),
            f = function(e, t, i, r, o) { o.readFinished(e.file[n.sliceName](i, r, t)) };
        n.version = "__VERSION__", n.defaults = { chunkSize: 1048576, forceChunkSize: !1, simultaneousUploads: 3, singleFile: !1, fileParameterName: "file", progressCallbacksInterval: 500, speedSmoothingFactor: .1, query: {}, headers: {}, withCredentials: !1, preprocess: null, method: "multipart", testMethod: "GET", uploadMethod: "POST", prioritizeFirstAndLastChunk: !1, allowDuplicateUploads: !1, target: "/", testChunks: !0, generateUniqueIdentifier: null, maxChunkRetries: 0, chunkRetryInterval: null, permanentErrors: [404, 415, 500, 501], successStatuses: [200, 201, 202], onDropStopPropagation: !1, initFileFn: null, readFileFn: f, checkChunkUploadedByResponse: null }, n.utils = r, n.event = o, n.File = s, n.Chunk = a, n.prototype = r.extend({}, s.prototype), r.extend(n.prototype, o), r.extend(n.prototype, {
            constructor: n,
            _trigger: function(e) {
                var t = r.toArray(arguments),
                    i = !this.trigger.apply(this, arguments);
                return "catchAll" !== e && (t.unshift("catchAll"), i = !this.trigger.apply(this, t) || i), !i
            },
            _triggerAsync: function() {
                var e = arguments;
                r.nextTick(function() { this._trigger.apply(this, e) }, this)
            },
            addFiles: function(e, t) {
                var i = [],
                    n = this.fileList.length;
                r.each(e, function(e) {
                    if ((!u || u && e.size > 0) && (e.size % 4096 != 0 || "." !== e.name && "." !== e.fileName)) {
                        var n = this.generateUniqueIdentifier(e);
                        if (this.opts.allowDuplicateUploads || !this.getFromUniqueIdentifier(n)) {
                            var r = new s(this, e, this);
                            r.uniqueIdentifier = n, this._trigger("fileAdded", r, t) ? i.push(r) : s.prototype.removeFile.call(this, r)
                        }
                    }
                }, this);
                var o = this.fileList.slice(n);
                this._trigger("filesAdded", i, o, t) ? (r.each(i, function(e) { this.opts.singleFile && this.files.length > 0 && this.removeFile(this.files[0]), this.files.push(e) }, this), this._trigger("filesSubmitted", i, o, t)) : r.each(o, function(e) { s.prototype.removeFile.call(this, e) }, this)
            },
            addFile: function(e, t) { this.addFiles([e], t) },
            cancel: function() { for (var e = this.fileList.length - 1; e >= 0; e--) this.fileList[e].cancel() },
            removeFile: function(e) { s.prototype.removeFile.call(this, e), this._trigger("fileRemoved", e) },
            generateUniqueIdentifier: function(e) { var t = this.opts.generateUniqueIdentifier; if (r.isFunction(t)) return t(e); var i = e.relativePath || e.webkitRelativePath || e.fileName || e.name; return e.size + "-" + i.replace(/[^0-9a-zA-Z_-]/gim, "") },
            getFromUniqueIdentifier: function(e) { var t = !1; return r.each(this.files, function(i) { if (i.uniqueIdentifier === e) return t = i, !1 }), t },
            uploadNextChunk: function(e) {
                var t = !1,
                    i = a.STATUS.PENDING,
                    n = this.uploader.opts.checkChunkUploadedByResponse;
                if (this.opts.prioritizeFirstAndLastChunk && (r.each(this.files, function(e) { if (!e.paused && (!n || e._firstResponse || !e.isUploading())) return e.chunks.length && e.chunks[0].status() === i ? (e.chunks[0].send(), t = !0, !1) : e.chunks.length > 1 && e.chunks[e.chunks.length - 1].status() === i ? (e.chunks[e.chunks.length - 1].send(), t = !0, !1) : void 0 }), t)) return t;
                if (r.each(this.files, function(e) {
                        if (!e.paused) {
                            if (n && !e._firstResponse && e.isUploading()) return;
                            r.each(e.chunks, function(e) { if (e.status() === i) return e.send(), t = !0, !1 })
                        }
                        if (t) return !1
                    }), t) return !0;
                var o = !1;
                return r.each(this.files, function(e) { if (!e.isComplete()) return o = !0, !1 }), o || e || this._triggerAsync("complete"), o
            },
            upload: function(e) {
                var t = this._shouldUploadNext();
                if (!1 !== t) {
                    !e && this._trigger("uploadStart");
                    for (var i = !1, n = 1; n <= this.opts.simultaneousUploads - t && ((i = this.uploadNextChunk(!e) || i) || !e); n++);
                    i || e || this._triggerAsync("complete")
                }
            },
            _shouldUploadNext: function() {
                var e = 0,
                    t = !0,
                    i = this.opts.simultaneousUploads,
                    n = a.STATUS.UPLOADING;
                return r.each(this.files, function(o) { return r.each(o.chunks, function(r) { if (r.status() === n && ++e >= i) return t = !1, !1 }), t }), t && e
            },
            assignBrowse: function(e, t, i, n) {
                void 0 === e.length && (e = [e]), r.each(e, function(e) {
                    var o;
                    "INPUT" === e.tagName && "file" === e.type ? o = e : (o = document.createElement("input"), o.setAttribute("type", "file"), r.extend(o.style, { visibility: "hidden", position: "absolute", width: "1px", height: "1px" }), e.appendChild(o), e.addEventListener("click", function() { o.click() }, !1)), this.opts.singleFile || i || o.setAttribute("multiple", "multiple"), t && o.setAttribute("webkitdirectory", "webkitdirectory"), n && r.each(n, function(e, t) { o.setAttribute(t, e) });
                    var s = this;
                    o.addEventListener("change", function(e) { e.target.value && (s.addFiles(e.target.files, e), e.target.value = "") }, !1)
                }, this)
            },
            onDrop: function(e) { this.opts.onDropStopPropagation && e.stopPropagation(), e.preventDefault(), this._parseDataTransfer(e.dataTransfer, e) },
            _parseDataTransfer: function(e, t) { e.items && e.items[0] && e.items[0].webkitGetAsEntry ? this.webkitReadDataTransfer(e, t) : this.addFiles(e.files, t) },
            webkitReadDataTransfer: function(e, t) {
                function i(e) {
                    e.readEntries(function(t) {
                        t.length ? (u += t.length, r.each(t, function(e) {
                            if (e.isFile) {
                                var t = e.fullPath;
                                e.file(function(e) { n(e, t) }, o)
                            } else e.isDirectory && i(e.createReader())
                        }), i(e)) : s()
                    }, o)
                }

                function n(e, t) { e.relativePath = t.substring(1), l.push(e), s() }

                function o(e) { throw e }

                function s() { 0 == --u && a.addFiles(l, t) }
                var a = this,
                    u = e.items.length,
                    l = [];
                r.each(e.items, function(e) {
                    var t = e.webkitGetAsEntry();
                    if (!t) return void s();
                    t.isFile ? n(e.getAsFile(), t.fullPath) : i(t.createReader())
                })
            },
            _assignHelper: function(e, t, i) {
                void 0 === e.length && (e = [e]);
                var n = i ? "removeEventListener" : "addEventListener";
                r.each(e, function(e) { r.each(t, function(t, i) { e[n](i, t, !1) }, this) }, this)
            },
            assignDrop: function(e) { this._onDrop = r.bind(this.onDrop, this), this._assignHelper(e, { dragover: r.preventEvent, dragenter: r.preventEvent, drop: this._onDrop }) },
            unAssignDrop: function(e) { this._assignHelper(e, { dragover: r.preventEvent, dragenter: r.preventEvent, drop: this._onDrop }, !0), this._onDrop = null }
        }), e.exports = n
    }, function(e, t, i) {
        function n(e) { i(78) }
        var r = i(1)(i(31), i(71), n, null, null);
        e.exports = r.exports
    }, function(e, t, i) {
        var n, r, o;
        ! function(i, s) { r = [e, t], n = s, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = ["fileProgress", "fileSuccess", "fileComplete", "fileError"];
            t.default = i, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(22), i(12), i(13), i(16), i(15), i(14), i(3)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i, n, r, o, s, a, u) {
            "use strict";

            function l(e) { return e && e.__esModule ? e : { default: e } }

            function p(e) { p.installed || (e.component(f.default.name, f.default), e.component(d.default.name, d.default), e.component(c.default.name, c.default), e.component(h.default.name, h.default), e.component(A.default.name, A.default), e.component(v.default.name, v.default), e.component(g.default.name, g.default)) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var f = l(i),
                d = l(n),
                c = l(r),
                h = l(o),
                A = l(s),
                v = l(a),
                g = l(u),
                C = { version: "0.4.6", install: p, Uploader: f.default, UploaderBtn: d.default, UploaderDrop: c.default, UploaderUnsupport: h.default, UploaderList: A.default, UploaderFiles: v.default, UploaderFile: g.default };
            "undefined" != typeof window && window.Vue && window.Vue.use(p), t.default = C, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(5)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = {
                name: "uploader-btn",
                mixins: [i.uploaderMixin, i.supportMixin],
                props: { directory: { type: Boolean, default: !1 }, single: { type: Boolean, default: !1 }, attrs: { type: Object, default: function() { return {} } } },
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() { e.uploader.assignBrowse(e.$refs.btn, e.directory, e.single, e.attrs) })
                }
            }, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(5)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = {
                name: "uploader-drop",
                mixins: [i.uploaderMixin, i.supportMixin],
                data: function() { return { dropClass: "" } },
                methods: { onDragEnter: function() { this.dropClass = "uploader-dragover" }, onDragLeave: function() { this.dropClass = "" }, onDrop: function() { this.dropClass = "uploader-droped" } },
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var t = e.$refs.drop;
                        e.uploader.assignDrop(t), t.addEventListener("dragenter", e.onDragEnter, !1), t.addEventListener("dragleave", e.onDragLeave, !1), t.addEventListener("drop", e.onDrop, !1)
                    })
                },
                beforeDestroy: function() {
                    var e = this.$refs.drop;
                    e.removeEventListener("dragenter", this.onDragEnter, !1), e.removeEventListener("dragleave", this.onDragLeave, !1), e.removeEventListener("drop", this.onDrop, !1), this.uploader.unAssignDrop(e)
                }
            }, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(32), i(21), i(23), i(6)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i, n, r, o) {
            "use strict";

            function s(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = s(i),
                u = s(n),
                l = s(r);
            t.default = {
                name: "uploader-file",
                props: { file: { type: Object, default: function() { return {} } }, list: { type: Boolean, default: !1 } },
                data: function() { return { paused: !1, error: !1, averageSpeed: 0, currentSpeed: 0, isComplete: !1, isUploading: !1, size: 0, formatedSize: "", uploadedSize: 0, progress: 0, timeRemaining: 0, type: "", extension: "", progressingClass: "" } },
                computed: {
                    fileCategory: function() {
                        var e = this.extension,
                            t = this.file.isFolder,
                            i = t ? "folder" : "unknown",
                            n = this.file.uploader.opts.categoryMap,
                            r = n || { image: ["gif", "jpg", "jpeg", "png", "bmp", "webp"], video: ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"], audio: ["mp3", "wav", "wma", "ogg", "aac", "flac"], document: ["doc", "txt", "docx", "pages", "epub", "pdf", "numbers", "csv", "xls", "xlsx", "keynote", "ppt", "pptx"] };
                        return (0, a.default)(r).forEach(function(t) { r[t].indexOf(e) > -1 && (i = t) }), i
                    },
                    progressStyle: function() {
                        var e = Math.floor(100 * this.progress),
                            t = "translateX(" + Math.floor(e - 100) + "%)";
                        return { progress: e + "%", webkitTransform: t, mozTransform: t, msTransform: t, transform: t }
                    },
                    formatedAverageSpeed: function() { return u.default.utils.formatSize(this.averageSpeed) + " / s" },
                    status: function() {
                        var e = this.isUploading,
                            t = this.isComplete,
                            i = this.error,
                            n = this.paused;
                        return t ? "success" : i ? "error" : e ? "uploading" : n ? "paused" : "waiting"
                    },
                    statusText: function() { var e = this.status; return this.file.uploader.fileStatusText[e] || e },
                    formatedTimeRemaining: function() {
                        var e = this.timeRemaining,
                            t = this.file;
                        if (e === Number.POSITIVE_INFINITY || 0 === e) return "";
                        var i = (0, o.secondsToStr)(e),
                            n = t.uploader.opts.parseTimeRemaining;
                        return n && (i = n(e, i)), i
                    }
                },
                watch: {
                    status: function(e, t) {
                        var i = this;
                        t && "uploading" === e && "uploading" !== t ? this.tid = setTimeout(function() { i.progressingClass = "uploader-file-progressing" }, 200) : (clearTimeout(this.tid), this.progressingClass = "")
                    }
                },
                methods: {
                    _actionCheck: function() { this.paused = this.file.paused, this.error = this.file.error, this.isUploading = this.file.isUploading() },
                    pause: function() { this.file.pause(), this._actionCheck(), this._fileProgress() },
                    resume: function() { this.file.resume(), this._actionCheck() },
                    remove: function() { this.file.cancel() },
                    retry: function() { this.file.retry(), this._actionCheck() },
                    fileEventsHandler: function(e, t) {
                        var i = t[0],
                            n = t[1],
                            r = this.list ? i : n;
                        if (this.file === r) {
                            if (this.list && "fileSuccess" === e) return;
                            this["_" + e].apply(this, t)
                        }
                    },
                    _fileProgress: function() { this.progress = this.file.progress(), this.averageSpeed = this.file.averageSpeed, this.currentSpeed = this.file.currentSpeed, this.timeRemaining = this.file.timeRemaining(), this.uploadedSize = this.file.sizeUploaded(), this._actionCheck() },
                    _fileSuccess: function() { this._fileProgress(), this.error = !1, this.isComplete = !0, this.isUploading = !1 },
                    _fileComplete: function() { this._fileSuccess() },
                    _fileError: function() { this._fileProgress(), this.error = !0, this.isComplete = !1, this.isUploading = !1 }
                },
                mounted: function() {
                    var e = this,
                        t = ["paused", "error", "averageSpeed", "currentSpeed"],
                        i = ["isComplete", "isUploading", { key: "size", fn: "getSize" }, { key: "formatedSize", fn: "getFormatSize" }, { key: "uploadedSize", fn: "sizeUploaded" }, "progress", "timeRemaining", { key: "type", fn: "getType" }, { key: "extension", fn: "getExtension" }];
                    t.forEach(function(t) { e[t] = e.file[t] }), i.forEach(function(t) { "string" == typeof t ? e[t] = e.file[t]() : e[t.key] = e.file[t.fn]() });
                    var n = this._handlers = {},
                        r = function(t) {
                            return n[t] = function() {
                                for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                                e.fileEventsHandler(t, n)
                            }, n[t]
                        };
                    l.default.forEach(function(t) { e.file.uploader.on(t, r(t)) })
                },
                destroyed: function() {
                    var e = this;
                    l.default.forEach(function(t) { e.file.uploader.off(t, e._handlers[t]) }), this._handlers = null
                }
            }, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(3)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function(e) { return e && e.__esModule ? e : { default: e } }(i);
            t.default = { name: "uploader-files", computed: { files: function() { return this.$parent.files } }, components: { UploaderFile: n.default } }, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(3)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function(e) { return e && e.__esModule ? e : { default: e } }(i);
            t.default = { name: "uploader-list", computed: { fileList: function() { return this.$parent.fileList } }, components: { UploaderFile: n.default } }, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(5)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = { name: "uploader-unsupport", mixins: [i.uploaderMixin, i.supportMixin] }, e.exports = t.default
        })
    }, function(e, t, i) {
        var n, r, o;
        ! function(s, a) { r = [e, t, i(21), i(6), i(12), i(13), i(16), i(15), i(14), i(3)], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = o) }(0, function(e, t, i, n, r, o, s, a, u, l) {
            "use strict";

            function p(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var f = p(i),
                d = p(r),
                c = p(o),
                h = p(s),
                A = p(a),
                v = p(u),
                g = p(l);
            t.default = {
                name: "uploader",
                props: { options: { type: Object, default: function() { return {} } }, autoStart: { type: Boolean, default: !0 }, fileStatusText: { type: Object, default: function() { return { success: "success", error: "error", uploading: "uploading", paused: "paused", waiting: "waiting" } } } },
                data: function() { return { started: !1, files: [], fileList: [] } },
                methods: {
                    uploadStart: function() { this.started = !0 },
                    fileAdded: function(e) {
                        if (this.$emit((0, n.kebabCase)("fileAdded"), e), e.ignored) return !1
                    },
                    filesAdded: function(e, t) { if (this.$emit((0, n.kebabCase)("filesAdded"), e, t), e.ignored || t.ignored) return !1 },
                    fileRemoved: function(e) { this.files = this.uploader.files, this.fileList = this.uploader.fileList },
                    filesSubmitted: function(e, t) { this.files = this.uploader.files, this.fileList = this.uploader.fileList, this.autoStart && this.uploader.upload() },
                    allEvent: function() { for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i]; var r = t[0]; "fileAdded" !== r && "filesAdded" !== r && (t[0] = (0, n.kebabCase)(r), this.$emit.apply(this, t)) }
                },
                created: function() {
                    var e = new f.default(this.options);
                    this.uploader = e, this.uploader.fileStatusText = this.fileStatusText, e.on("catchAll", this.allEvent), e.on("uploadStart", this.uploadStart), e.on("fileAdded", this.fileAdded), e.on("filesAdded", this.filesAdded), e.on("fileRemoved", this.fileRemoved), e.on("filesSubmitted", this.filesSubmitted)
                },
                destroyed: function() {
                    var e = this.uploader;
                    e.off("catchAll", this.allEvent), e.off("uploadStart", this.uploadStart), e.off("fileAdded", this.fileAdded), e.off("filesAdded", this.filesAdded), e.off("fileRemoved", this.fileRemoved), e.off("filesSubmitted", this.filesSubmitted), this.uploader = null
                },
                components: { UploaderBtn: d.default, UploaderDrop: c.default, UploaderUnsupport: h.default, UploaderList: A.default, UploaderFiles: v.default, UploaderFile: g.default }
            }, e.exports = t.default
        })
    }, function(e, t, i) { e.exports = { default: i(33), __esModule: !0 } }, function(e, t, i) { i(58), e.exports = i(7).Object.keys }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t, i) {
        var n = i(11);
        e.exports = function(e) { if (!n(e)) throw TypeError(e + " is not an object!"); return e }
    }, function(e, t, i) {
        var n = i(19),
            r = i(54),
            o = i(53);
        e.exports = function(e) {
            return function(t, i, s) {
                var a, u = n(t),
                    l = r(u.length),
                    p = o(s, l);
                if (e && i != i) {
                    for (; l > p;)
                        if ((a = u[p++]) != a) return !0
                } else
                    for (; l > p; p++)
                        if ((e || p in u) && u[p] === i) return e || p || 0; return !e && -1
            }
        }
    }, function(e, t) {
        var i = {}.toString;
        e.exports = function(e) { return i.call(e).slice(8, -1) }
    }, function(e, t, i) {
        var n = i(34);
        e.exports = function(e, t, i) {
            if (n(e), void 0 === t) return e;
            switch (i) {
                case 1:
                    return function(i) { return e.call(t, i) };
                case 2:
                    return function(i, n) { return e.call(t, i, n) };
                case 3:
                    return function(i, n, r) { return e.call(t, i, n, r) }
            }
            return function() { return e.apply(t, arguments) }
        }
    }, function(e, t, i) {
        var n = i(11),
            r = i(10).document,
            o = n(r) && n(r.createElement);
        e.exports = function(e) { return o ? r.createElement(e) : {} }
    }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t, i) {
        var n = i(10),
            r = i(7),
            o = i(38),
            s = i(43),
            a = function(e, t, i) {
                var u, l, p, f = e & a.F,
                    d = e & a.G,
                    c = e & a.S,
                    h = e & a.P,
                    A = e & a.B,
                    v = e & a.W,
                    g = d ? r : r[t] || (r[t] = {}),
                    C = g.prototype,
                    m = d ? n : c ? n[t] : (n[t] || {}).prototype;
                d && (i = t);
                for (u in i)(l = !f && m && void 0 !== m[u]) && u in g || (p = l ? m[u] : i[u], g[u] = d && "function" != typeof m[u] ? i[u] : A && l ? o(p, n) : v && m[u] == p ? function(e) {
                    var t = function(t, i, n) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, i)
                            }
                            return new e(t, i, n)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(p) : h && "function" == typeof p ? o(Function.call, p) : p, h && ((g.virtual || (g.virtual = {}))[u] = p, e & a.R && C && !C[u] && s(C, u, p)))
            };
        a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, e.exports = a
    }, function(e, t) {
        var i = {}.hasOwnProperty;
        e.exports = function(e, t) { return i.call(e, t) }
    }, function(e, t, i) {
        var n = i(46),
            r = i(50);
        e.exports = i(8) ? function(e, t, i) { return n.f(e, t, r(1, i)) } : function(e, t, i) { return e[t] = i, e }
    }, function(e, t, i) { e.exports = !i(8) && !i(9)(function() { return 7 != Object.defineProperty(i(39)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, i) {
        var n = i(37);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == n(e) ? e.split("") : Object(e) }
    }, function(e, t, i) {
        var n = i(35),
            r = i(44),
            o = i(56),
            s = Object.defineProperty;
        t.f = i(8) ? Object.defineProperty : function(e, t, i) {
            if (n(e), t = o(t, !0), n(i), r) try { return s(e, t, i) } catch (e) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (e[t] = i.value), e
        }
    }, function(e, t, i) {
        var n = i(42),
            r = i(19),
            o = i(36)(!1),
            s = i(51)("IE_PROTO");
        e.exports = function(e, t) {
            var i, a = r(e),
                u = 0,
                l = [];
            for (i in a) i != s && n(a, i) && l.push(i);
            for (; t.length > u;) n(a, i = t[u++]) && (~o(l, i) || l.push(i));
            return l
        }
    }, function(e, t, i) {
        var n = i(47),
            r = i(40);
        e.exports = Object.keys || function(e) { return n(e, r) }
    }, function(e, t, i) {
        var n = i(41),
            r = i(7),
            o = i(9);
        e.exports = function(e, t) {
            var i = (r.Object || {})[e] || Object[e],
                s = {};
            s[e] = t(i), n(n.S + n.F * o(function() { i(1) }), "Object", s)
        }
    }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t, i) {
        var n = i(52)("keys"),
            r = i(57);
        e.exports = function(e) { return n[e] || (n[e] = r(e)) }
    }, function(e, t, i) {
        var n = i(10),
            r = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
        e.exports = function(e) { return r[e] || (r[e] = {}) }
    }, function(e, t, i) {
        var n = i(18),
            r = Math.max,
            o = Math.min;
        e.exports = function(e, t) { return e = n(e), e < 0 ? r(e + t, 0) : o(e, t) }
    }, function(e, t, i) {
        var n = i(18),
            r = Math.min;
        e.exports = function(e) { return e > 0 ? r(n(e), 9007199254740991) : 0 }
    }, function(e, t, i) {
        var n = i(17);
        e.exports = function(e) { return Object(n(e)) }
    }, function(e, t, i) {
        var n = i(11);
        e.exports = function(e, t) { if (!n(e)) return e; var i, r; if (t && "function" == typeof(i = e.toString) && !n(r = i.call(e))) return r; if ("function" == typeof(i = e.valueOf) && !n(r = i.call(e))) return r; if (!t && "function" == typeof(i = e.toString) && !n(r = i.call(e))) return r; throw TypeError("Can't convert object to primitive value") }
    }, function(e, t) {
        var i = 0,
            n = Math.random();
        e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + n).toString(36)) }
    }, function(e, t, i) {
        var n = i(55),
            r = i(48);
        i(49)("keys", function() { return function(e) { return r(n(e)) } })
    }, function(e, t, i) { t = e.exports = i(0)(!0), t.push([e.i, ".uploader-unsupport{position:relative;z-index:10;overflow:hidden}", "", { version: 3, sources: ["/Users/didi/Documents/git/private/vue-uploader/src/components/unsupport.vue"], names: [], mappings: "AACA,oBACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB", file: "unsupport.vue", sourcesContent: ["\n.uploader-unsupport {\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n}\n"], sourceRoot: "" }]) }, function(e, t, i) { t = e.exports = i(0)(!0), t.push([e.i, ".uploader-list{position:relative}.uploader-list>ul{list-style:none;margin:0;padding:0}", "", { version: 3, sources: ["/Users/didi/Documents/git/private/vue-uploader/src/components/list.vue"], names: [], mappings: "AACA,eACE,iBAAmB,CACpB,AACD,kBACE,gBAAiB,AACjB,SAAU,AACV,SAAU,CACX", file: "list.vue", sourcesContent: ["\n.uploader-list {\n  position: relative;\n}\n.uploader-list > ul {\n  list-style: none;\n  margin: 0;\n  padding: 0\n}\n"], sourceRoot: "" }]) }, function(e, t, i) { t = e.exports = i(0)(!0), t.push([e.i, '.uploader-file{position:relative;height:49px;line-height:49px;overflow:hidden;border-bottom:1px solid #cdcdcd}.uploader-file[status=error] .uploader-file-retry,.uploader-file[status=paused] .uploader-file-resume,.uploader-file[status=uploading] .uploader-file-pause,.uploader-file[status=waiting] .uploader-file-pause{display:block}.uploader-file[status=success] .uploader-file-remove{display:none}.uploader-file[status=error] .uploader-file-progress{background:#ffe0e0}.uploader-file-progress{position:absolute;width:100%;height:100%;background:#e2eeff;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.uploader-file-progressing{-webkit-transition:all .4s linear;transition:all .4s linear}.uploader-file-info{position:relative;z-index:1;height:100%;overflow:hidden}.uploader-file-info:hover{background-color:hsla(0,0%,94%,.2)}.uploader-file-info em,.uploader-file-info i{font-style:normal}.uploader-file-actions,.uploader-file-meta,.uploader-file-name,.uploader-file-size,.uploader-file-status{float:left;position:relative;height:100%}.uploader-file-name{width:45%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-indent:14px}.uploader-file-icon{width:24px;height:24px;display:inline-block;vertical-align:top;margin-top:13px;margin-right:8px}.uploader-file-icon:before{content:"\\1F4C3";display:block;height:100%;font-size:24px;line-height:1;text-indent:0}.uploader-file-icon[icon=folder]:before{content:"\\1F4C2"}.uploader-file-icon[icon=image]:before{content:"\\1F4CA"}.uploader-file-icon[icon=video]:before{content:"\\1F4F9"}.uploader-file-icon[icon=audio]:before{content:"\\1F3B5"}.uploader-file-icon[icon=document]:before{content:"\\1F4CB"}.uploader-file-size{width:13%;text-indent:10px}.uploader-file-meta{width:8%}.uploader-file-status{width:24%;text-indent:20px}.uploader-file-actions{width:10%}.uploader-file-actions>span{display:none;float:left;width:16px;height:16px;margin-top:16px;margin-right:10px;cursor:pointer;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkCAYAAAD0ZHJ6AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAACxMAAAsTAQCanBgAAARkSURBVGje7ZnfS1NRHMAH4ptPkvQSuAdBkCxD8FUQJMEULUgzy1KyyPVQ4JMiiP4Bvg6EwUQQfMmwhwRDshwaKUjDVCgoSdDNHkzTJZ6+Z37Purve8+PeTb2TM/ggu+ew89l33x8H9BBCPG7GowXTJej3+wnDvEm0JuLC04+EYWftVAUv+fiCvDUdQR1BHUEdQR3BTIygvixoQS14XgTtthLVdpNWwXRLqvQ724LplFRtyrYF0yVpFLQrKRVMh6RZ0I6kkmCqklaCqpKZH0FX56Crq9jVfdDVk0RfFrSgFsxkQVmLcdKCVrKySCrryhPEyYShhzOcrFtG0EoilfHHk1CRU5rF6ZjNZhlVOW6RnMSVyyilKies4pO41diVy8wIujoHXV3FGdMHXTtJKLFYTLhZtq4vC1rwXApCZTIqgR6g1PBMCO9DL3bMMSqBHqDU8EyISDAHiGKvWwcCQG2KgjlAFCDAOhAAap0K5gKLphk8mqJgLrCIgoxRJ4J5wKpJ7gAoMkn5EBXBPGDVJHcAFJmkfIhQcAql1oBpTvTol9gG9pm4RHAKpdaAaU706JfYBvaZuJVgPQrt4sFlnOh5MC/p3lmJYD0K7eLBZZzoeTAv6d5ZnuAYHjpgEOnk5F0ufhG6v1ggOIaHDhhEOjl5l4tfhO4vthLcwAMrFNvLJO5vEwhu4IEViu1lEve3WQmyoihQFBzG/V0CQVYUBYqCw7i/SxTBcpsRbFeIYLnNCLZbCY5b5KAnxRwct8hBj9McZFVMW0ihRNBuFdMWUigRlFaxuQ9WWYjRMTiIe5z0wSoLMToGB3GPsA9aTZIJoB+nRgBnM1tzOkkmgH6cGgGczWzNpzqLx3n/aULJJgezeNw07oxQySbVywKjBOgFRnDs+VEsx8FlgVEC9AIjOPb8KJYjvSzoG7UW1IJaUAtqQS14toLNM5fN5APdwBJA8G83Pk/aK/rgzVvXzeQD3cASQPBvNz5P2ssTzAaGUIrHEO6zI5gNDKEUjyHcxxWkh4Ylcowwk1QQpIeGJXKMMJO0EgwqyjGCioJBJvDrxRMSuVOTJEXfbz1/bHwWtBL0yoQehK6RucgE+bGzanzulQh6E3IgQV+xpc8kcrfuSO7eTfJ3ZYmQw0Oy9azVKOk1C/bJ5D5F38YPeLfx0rjWJxHsS0SqsSYuxySjj5qO5Oj7xQWy2VBtFOwzCy6ryH3YfE3uh64Y1xckgstJPydEjkkeHv07Iy4Xaao15+KCWTBx6M/db+T9xivSErqaJDdzXI6yLRE8Vgg0coex/SPJvT0SbWu0KpZtbgSpCH3NRt7I5OxHkObc6heU+/M/J5vrpBFM5GBLqCQux14COXs5CNXK5OjPGm1tSMrJSOMNYQ4mVTGV/L6zTL7+DovkbFUxbSW0Wo05l8hJWsU+cRWfSh+Mt5Lb1ck/J1TvVsdDaR/MiEni+llsdZuZp62EViu+96bpNjNPWwmtVnzvFd5m9IVVC54x/wA7gNvqFG9vXQAAAABJRU5ErkJggg==") no-repeat 0 0}.uploader-file-actions>span:hover{background-position-x:-21px}.uploader-file-actions .uploader-file-pause{background-position-y:0}.uploader-file-actions .uploader-file-resume{background-position-y:-17px}.uploader-file-actions .uploader-file-retry{background-position-y:-53px}.uploader-file-actions .uploader-file-remove{display:block;background-position-y:-34px}', "", { version: 3, sources: ["/Users/didi/Documents/git/private/vue-uploader/src/components/file.vue"], names: [], mappings: "AACA,eACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,+BAAiC,CAClC,AAQD,gNACE,aAAe,CAChB,AACD,qDACE,YAAc,CACf,AACD,qDACE,kBAAoB,CACrB,AACD,wBACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,oCAAqC,AAC7B,2BAA6B,CACtC,AACD,2BACE,kCAAmC,AACnC,yBAA2B,CAC5B,AACD,oBACE,kBAAmB,AACnB,UAAW,AACX,YAAa,AACb,eAAiB,CAClB,AACD,0BACE,kCAA2C,CAC5C,AACD,6CAEE,iBAAmB,CACpB,AACD,yGAKE,WAAY,AACZ,kBAAmB,AACnB,WAAa,CACd,AACD,oBACE,UAAW,AACX,gBAAiB,AACjB,mBAAoB,AACpB,uBAAwB,AACxB,gBAAkB,CACnB,AACD,oBACE,WAAY,AACZ,YAAa,AACb,qBAAsB,AACtB,mBAAoB,AACpB,gBAAiB,AACjB,gBAAkB,CACnB,AACD,2BACE,iBAAc,AACd,cAAe,AACf,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,aAAe,CAChB,AACD,wCACE,gBAAc,CACf,AACD,uCACE,gBAAc,CACf,AACD,uCACE,gBAAc,CACf,AACD,uCACE,gBAAc,CACf,AACD,0CACE,gBAAc,CACf,AACD,oBACE,UAAW,AACX,gBAAkB,CACnB,AACD,oBACE,QAAU,CACX,AACD,sBACE,UAAW,AACX,gBAAkB,CACnB,AACD,uBACE,SAAW,CACZ,AACD,4BACE,aAAc,AACd,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,srDAAwrD,CACzrD,AACD,kCACE,2BAA6B,CAC9B,AACD,4CACE,uBAAyB,CAC1B,AACD,6CACE,2BAA6B,CAC9B,AACD,4CACE,2BAA6B,CAC9B,AACD,6CACE,cAAe,AACf,2BAA6B,CAC9B", file: "file.vue", sourcesContent: ['\n.uploader-file {\n  position: relative;\n  height: 49px;\n  line-height: 49px;\n  overflow: hidden;\n  border-bottom: 1px solid #cdcdcd;\n}\n.uploader-file[status="waiting"] .uploader-file-pause,\n.uploader-file[status="uploading"] .uploader-file-pause {\n  display: block;\n}\n.uploader-file[status="paused"] .uploader-file-resume {\n  display: block;\n}\n.uploader-file[status="error"] .uploader-file-retry {\n  display: block;\n}\n.uploader-file[status="success"] .uploader-file-remove {\n  display: none;\n}\n.uploader-file[status="error"] .uploader-file-progress {\n  background: #ffe0e0;\n}\n.uploader-file-progress {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #e2eeff;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.uploader-file-progressing {\n  -webkit-transition: all .4s linear;\n  transition: all .4s linear;\n}\n.uploader-file-info {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  overflow: hidden;\n}\n.uploader-file-info:hover {\n  background-color: rgba(240, 240, 240, 0.2);\n}\n.uploader-file-info i,\n.uploader-file-info em {\n  font-style: normal;\n}\n.uploader-file-name,\n.uploader-file-size,\n.uploader-file-meta,\n.uploader-file-status,\n.uploader-file-actions {\n  float: left;\n  position: relative;\n  height: 100%;\n}\n.uploader-file-name {\n  width: 45%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-indent: 14px;\n}\n.uploader-file-icon {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 13px;\n  margin-right: 8px;\n}\n.uploader-file-icon::before {\n  content: "📃";\n  display: block;\n  height: 100%;\n  font-size: 24px;\n  line-height: 1;\n  text-indent: 0;\n}\n.uploader-file-icon[icon="folder"]::before {\n  content: "📂";\n}\n.uploader-file-icon[icon="image"]::before {\n  content: "📊";\n}\n.uploader-file-icon[icon="video"]::before {\n  content: "📹";\n}\n.uploader-file-icon[icon="audio"]::before {\n  content: "🎵";\n}\n.uploader-file-icon[icon="document"]::before {\n  content: "📋";\n}\n.uploader-file-size {\n  width: 13%;\n  text-indent: 10px;\n}\n.uploader-file-meta {\n  width: 8%;\n}\n.uploader-file-status {\n  width: 24%;\n  text-indent: 20px;\n}\n.uploader-file-actions {\n  width: 10%;\n}\n.uploader-file-actions > span {\n  display: none;\n  float: left;\n  width: 16px;\n  height: 16px;\n  margin-top: 16px;\n  margin-right: 10px;\n  cursor: pointer;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkCAYAAAD0ZHJ6AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAACxMAAAsTAQCanBgAAARkSURBVGje7ZnfS1NRHMAH4ptPkvQSuAdBkCxD8FUQJMEULUgzy1KyyPVQ4JMiiP4Bvg6EwUQQfMmwhwRDshwaKUjDVCgoSdDNHkzTJZ6+Z37Purve8+PeTb2TM/ggu+ew89l33x8H9BBCPG7GowXTJej3+wnDvEm0JuLC04+EYWftVAUv+fiCvDUdQR1BHUEdQR3BTIygvixoQS14XgTtthLVdpNWwXRLqvQ724LplFRtyrYF0yVpFLQrKRVMh6RZ0I6kkmCqklaCqpKZH0FX56Crq9jVfdDVk0RfFrSgFsxkQVmLcdKCVrKySCrryhPEyYShhzOcrFtG0EoilfHHk1CRU5rF6ZjNZhlVOW6RnMSVyyilKies4pO41diVy8wIujoHXV3FGdMHXTtJKLFYTLhZtq4vC1rwXApCZTIqgR6g1PBMCO9DL3bMMSqBHqDU8EyISDAHiGKvWwcCQG2KgjlAFCDAOhAAap0K5gKLphk8mqJgLrCIgoxRJ4J5wKpJ7gAoMkn5EBXBPGDVJHcAFJmkfIhQcAql1oBpTvTol9gG9pm4RHAKpdaAaU706JfYBvaZuJVgPQrt4sFlnOh5MC/p3lmJYD0K7eLBZZzoeTAv6d5ZnuAYHjpgEOnk5F0ufhG6v1ggOIaHDhhEOjl5l4tfhO4vthLcwAMrFNvLJO5vEwhu4IEViu1lEve3WQmyoihQFBzG/V0CQVYUBYqCw7i/SxTBcpsRbFeIYLnNCLZbCY5b5KAnxRwct8hBj9McZFVMW0ihRNBuFdMWUigRlFaxuQ9WWYjRMTiIe5z0wSoLMToGB3GPsA9aTZIJoB+nRgBnM1tzOkkmgH6cGgGczWzNpzqLx3n/aULJJgezeNw07oxQySbVywKjBOgFRnDs+VEsx8FlgVEC9AIjOPb8KJYjvSzoG7UW1IJaUAtqQS14toLNM5fN5APdwBJA8G83Pk/aK/rgzVvXzeQD3cASQPBvNz5P2ssTzAaGUIrHEO6zI5gNDKEUjyHcxxWkh4Ylcowwk1QQpIeGJXKMMJO0EgwqyjGCioJBJvDrxRMSuVOTJEXfbz1/bHwWtBL0yoQehK6RucgE+bGzanzulQh6E3IgQV+xpc8kcrfuSO7eTfJ3ZYmQw0Oy9azVKOk1C/bJ5D5F38YPeLfx0rjWJxHsS0SqsSYuxySjj5qO5Oj7xQWy2VBtFOwzCy6ryH3YfE3uh64Y1xckgstJPydEjkkeHv07Iy4Xaao15+KCWTBx6M/db+T9xivSErqaJDdzXI6yLRE8Vgg0coex/SPJvT0SbWu0KpZtbgSpCH3NRt7I5OxHkObc6heU+/M/J5vrpBFM5GBLqCQux14COXs5CNXK5OjPGm1tSMrJSOMNYQ4mVTGV/L6zTL7+DovkbFUxbSW0Wo05l8hJWsU+cRWfSh+Mt5Lb1ck/J1TvVsdDaR/MiEni+llsdZuZp62EViu+96bpNjNPWwmtVnzvFd5m9IVVC54x/wA7gNvqFG9vXQAAAABJRU5ErkJggg==") no-repeat 0 0;\n}\n.uploader-file-actions > span:hover {\n  background-position-x: -21px;\n}\n.uploader-file-actions .uploader-file-pause {\n  background-position-y: 0;\n}\n.uploader-file-actions .uploader-file-resume {\n  background-position-y: -17px;\n}\n.uploader-file-actions .uploader-file-retry {\n  background-position-y: -53px;\n}\n.uploader-file-actions .uploader-file-remove {\n  display: block;\n  background-position-y: -34px;\n}\n'], sourceRoot: "" }]) }, function(e, t, i) { t = e.exports = i(0)(!0), t.push([e.i, ".uploader{position:relative}", "", { version: 3, sources: ["/Users/didi/Documents/git/private/vue-uploader/src/components/uploader.vue"], names: [], mappings: "AACA,UACE,iBAAmB,CACpB", file: "uploader.vue", sourcesContent: ["\n.uploader {\n  position: relative;\n}\n"], sourceRoot: "" }]) }, function(e, t, i) { t = e.exports = i(0)(!0), t.push([e.i, ".uploader-drop{position:relative;padding:10px;overflow:hidden;border:1px dashed #ccc;background-color:#f5f5f5}.uploader-dragover{border-color:#999;background-color:#f7f7f7}", "", { version: 3, sources: ["/Users/didi/Documents/git/private/vue-uploader/src/components/drop.vue"], names: [], mappings: "AACA,eACE,kBAAmB,AACnB,aAAc,AACd,gBAAiB,AACjB,uBAAwB,AACxB,wBAA0B,CAC3B,AACD,mBACE,kBAAmB,AACnB,wBAA0B,CAC3B", file: "drop.vue", sourcesContent: ["\n.uploader-drop {\n  position: relative;\n  padding: 10px;\n  overflow: hidden;\n  border: 1px dashed #ccc;\n  background-color: #f5f5f5;\n}\n.uploader-dragover {\n  border-color: #999;\n  background-color: #f7f7f7;\n}\n"], sourceRoot: "" }]) }, function(e, t, i) { t = e.exports = i(0)(!0), t.push([e.i, ".uploader-files{position:relative}.uploader-files>ul{list-style:none;margin:0;padding:0}", "", { version: 3, sources: ["/Users/didi/Documents/git/private/vue-uploader/src/components/files.vue"], names: [], mappings: "AACA,gBACE,iBAAmB,CACpB,AACD,mBACE,gBAAiB,AACjB,SAAU,AACV,SAAU,CACX", file: "files.vue", sourcesContent: ["\n.uploader-files {\n  position: relative;\n}\n.uploader-files > ul {\n  list-style: none;\n  margin: 0;\n  padding: 0\n}\n"], sourceRoot: "" }]) }, function(e, t, i) { t = e.exports = i(0)(!0), t.push([e.i, ".uploader-btn{display:inline-block;position:relative;padding:4px 8px;font-size:100%;line-height:1.4;color:#666;border:1px solid #666;cursor:pointer;border-radius:2px;background:none;outline:none}.uploader-btn:hover{background-color:rgba(0,0,0,.08)}", "", { version: 3, sources: ["/Users/didi/Documents/git/private/vue-uploader/src/components/btn.vue"], names: [], mappings: "AACA,cACE,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,sBAAuB,AACvB,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,YAAc,CACf,AACD,oBACE,gCAAqC,CACtC", file: "btn.vue", sourcesContent: ["\n.uploader-btn {\n  display: inline-block;\n  position: relative;\n  padding: 4px 8px;\n  font-size: 100%;\n  line-height: 1.4;\n  color: #666;\n  border: 1px solid #666;\n  cursor: pointer;\n  border-radius: 2px;\n  background: none;\n  outline: none;\n}\n.uploader-btn:hover {\n  background-color: rgba(0, 0, 0, .08);\n}\n"], sourceRoot: "" }]) }, function(e, t, i) {
        var n = i(4).each,
            r = {
                _eventData: null,
                on: function(e, t) {
                    this._eventData || (this._eventData = {}), this._eventData[e] || (this._eventData[e] = []);
                    var i = !1;
                    n(this._eventData[e], function(e) { if (e === t) return i = !0, !1 }), i || this._eventData[e].push(t)
                },
                off: function(e, t) { this._eventData || (this._eventData = {}), this._eventData[e] && this._eventData[e].length && (t ? n(this._eventData[e], function(i, n) { if (i === t) return this._eventData[e].splice(n, 1), !1 }, this) : this._eventData[e] = []) },
                trigger: function(e) {
                    if (this._eventData || (this._eventData = {}), !this._eventData[e]) return !0;
                    var t = this._eventData[e].slice.call(arguments, 1),
                        i = !1;
                    return n(this._eventData[e], function(e) { i = !1 === e.apply(this, t) || i }, this), !i
                }
            };
        e.exports = r
    }, function(e, t, i) {
        function n(e, t, i) { o.defineNonEnumerable(this, "uploader", e), this.isRoot = this.isFolder = e === this, o.defineNonEnumerable(this, "parent", i || null), o.defineNonEnumerable(this, "files", []), o.defineNonEnumerable(this, "fileList", []), o.defineNonEnumerable(this, "chunks", []), o.defineNonEnumerable(this, "_errorFiles", []), o.defineNonEnumerable(this, "file", null), this.id = o.uid(), this.isRoot || !t ? this.file = null : o.isString(t) ? (this.isFolder = !0, this.file = null, this.path = t, this.parent.path && (t = t.substr(this.parent.path.length)), this.name = "/" === t.charAt(t.length - 1) ? t.substr(0, t.length - 1) : t) : (this.file = t, this.fileType = this.file.type, this.name = t.fileName || t.name, this.size = t.size, this.relativePath = t.relativePath || t.webkitRelativePath || this.name, this._parseFile()), this.paused = !1, this.error = !1, this.allError = !1, this.aborted = !1, this.averageSpeed = 0, this.currentSpeed = 0, this._lastProgressCallback = Date.now(), this._prevUploadedSize = 0, this._prevProgress = 0, this.bootstrap() }

        function r(e) {
            var t = [],
                i = e.split("/"),
                n = i.length,
                r = 1;
            if (i.splice(n - 1, 1), n--, i.length)
                for (; r <= n;) t.push(i.slice(0, r++).join("/") + "/");
            return t
        }
        var o = i(4),
            s = i(20);
        o.extend(n.prototype, {
            _parseFile: function() {
                var e = r(this.relativePath);
                if (e.length) {
                    var t = this.uploader.filePaths;
                    o.each(e, function(i, r) {
                        var o = t[i];
                        o || (o = new n(this.uploader, i, this.parent), t[i] = o, this._updateParentFileList(o)), this.parent = o, o.files.push(this), e[r + 1] || o.fileList.push(this)
                    }, this)
                } else this._updateParentFileList()
            },
            _updateParentFileList: function(e) {
                e || (e = this);
                var t = this.parent;
                t && t.fileList.push(e)
            },
            _eachAccess: function(e, t) {
                if (this.isFolder) return void o.each(this.files, function(t, i) { return e.call(this, t, i) }, this);
                t.call(this, this)
            },
            bootstrap: function() {
                if (!this.isFolder) {
                    var e = this.uploader.opts;
                    o.isFunction(e.initFileFn) && e.initFileFn.call(this, this), this.abort(!0), this._resetError(), this._prevProgress = 0;
                    for (var t = e.forceChunkSize ? Math.ceil : Math.floor, i = Math.max(t(this.size / e.chunkSize), 1), n = 0; n < i; n++) this.chunks.push(new s(this.uploader, this, n))
                }
            },
            _measureSpeed: function(e) {
                var t = 0,
                    i = 0,
                    n = 0;
                this._eachAccess(function(e) { e.paused || e.error || (n += 1, t += e.averageSpeed || 0, i += e.currentSpeed || 0) }, function() {
                    var e = Date.now() - this._lastProgressCallback;
                    if (e) {
                        var t = this.uploader.opts.speedSmoothingFactor,
                            i = this.sizeUploaded();
                        this.currentSpeed = Math.max((i - this._prevUploadedSize) / e * 1e3, 0), this.averageSpeed = t * this.currentSpeed + (1 - t) * this.averageSpeed, this._prevUploadedSize = i
                    }
                }), this.isFolder && (n ? (this.currentSpeed = i / n, this.averageSpeed = t / n) : (this.currentSpeed = 0, this.averageSpeed = 0)), this.parent && (e || this.parent._checkProgress()) && this.parent._measureSpeed()
            },
            _checkProgress: function(e) { return Date.now() - this._lastProgressCallback >= this.uploader.opts.progressCallbacksInterval },
            _chunkEvent: function(e, t, i) {
                var n = this.uploader,
                    r = s.STATUS,
                    o = this,
                    a = this.getRoot(),
                    u = function(t) { o._measureSpeed(t), n._trigger("fileProgress", a, o, e), o._lastProgressCallback = Date.now() };
                switch (t) {
                    case r.PROGRESS:
                        this._checkProgress() && u();
                        break;
                    case r.ERROR:
                        this._error(), this.abort(!0), n._trigger("fileError", a, this, i, e);
                        break;
                    case r.SUCCESS:
                        if (this._updateUploadedChunks(i, e), this.error) return;
                        clearTimeout(this._progeressId), this._progeressId = 0;
                        var l = Date.now() - this._lastProgressCallback;
                        l < n.opts.progressCallbacksInterval && (this._progeressId = setTimeout(u, n.opts.progressCallbacksInterval - l)), this.isComplete() ? (clearTimeout(this._progeressId), u(!0), this.currentSpeed = 0, this.averageSpeed = 0, n._trigger("fileSuccess", a, this, i, e), a.isComplete() && n._trigger("fileComplete", a, this)) : this._progeressId || u();
                        break;
                    case r.RETRY:
                        n._trigger("fileRetry", a, this, e)
                }
            },
            _updateUploadedChunks: function(e, t) {
                var i = this.uploader.opts.checkChunkUploadedByResponse;
                i ? (o.each(this.chunks, function(n) {!n.tested && i.call(this, n, e) && (n.xhr = t.xhr), n.tested = !0 }, this), this._firstResponse ? this.uploader.uploadNextChunk() : (this._firstResponse = !0, this.uploader.upload(!0))) : this.uploader.uploadNextChunk()
            },
            _error: function() { this.error = this.allError = !0; for (var e = this.parent; e && e !== this.uploader;) e._errorFiles.push(this), e.error = !0, e._errorFiles.length === e.files.length && (e.allError = !0), e = e.parent },
            _resetError: function() { this.error = this.allError = !1; for (var e = this.parent, t = -1; e && e !== this.uploader;) t = e._errorFiles.indexOf(this), e._errorFiles.splice(t, 1), e.allError = !1, e._errorFiles.length || (e.error = !1), e = e.parent },
            isComplete: function() {
                var e = !1;
                return this._eachAccess(function(t) { if (!t.isComplete()) return e = !0, !1 }, function() {
                    var t = s.STATUS;
                    o.each(this.chunks, function(i) { var n = i.status(); if (n === t.PENDING || n === t.UPLOADING || n === t.READING || 1 === i.preprocessState || 1 === i.readState) return e = !0, !1 })
                }), !e
            },
            isUploading: function() {
                var e = !1;
                return this._eachAccess(function(t) { if (t.isUploading()) return e = !0, !1 }, function() {
                    var t = s.STATUS.UPLOADING;
                    o.each(this.chunks, function(i) { if (i.status() === t) return e = !0, !1 })
                }), e
            },
            resume: function() { this._eachAccess(function(e) { e.resume() }, function() { this.paused = !1, this.aborted = !1, this.uploader.upload() }), this.paused = !1, this.aborted = !1 },
            pause: function() { this._eachAccess(function(e) { e.pause() }, function() { this.paused = !0, this.abort() }), this.paused = !0 },
            cancel: function() { this.uploader.removeFile(this) },
            retry: function(e) {
                var t = function(e) { e.error && e.bootstrap() };
                e ? e.bootstrap() : this._eachAccess(t, function() { this.bootstrap() }), this.uploader.upload()
            },
            abort: function(e) {
                if (!this.aborted) {
                    this.currentSpeed = 0, this.averageSpeed = 0, this.aborted = !e;
                    var t = this.chunks;
                    e && (this.chunks = []);
                    var i = s.STATUS.UPLOADING;
                    o.each(t, function(e) { e.status() === i && (e.abort(), this.uploader.uploadNextChunk()) }, this)
                }
            },
            progress: function() {
                var e = 0,
                    t = 0,
                    i = 0;
                return this._eachAccess(function(n, r) { e += n.progress() * n.size, t += n.size, r === this.files.length - 1 && (i = t > 0 ? e / t : this.isComplete() ? 1 : 0) }, function() {
                    if (this.error) return void(i = 1);
                    if (1 === this.chunks.length) return this._prevProgress = Math.max(this._prevProgress, this.chunks[0].progress()), void(i = this._prevProgress);
                    var e = 0;
                    o.each(this.chunks, function(t) { e += t.progress() * (t.endByte - t.startByte) });
                    var t = e / this.size;
                    this._prevProgress = Math.max(this._prevProgress, t > .9999 ? 1 : t), i = this._prevProgress
                }), i
            },
            getSize: function() { var e = 0; return this._eachAccess(function(t) { e += t.size }, function() { e += this.size }), e },
            getFormatSize: function() { var e = this.getSize(); return o.formatSize(e) },
            getRoot: function() {
                if (this.isRoot) return this;
                for (var e = this.parent; e;) {
                    if (e.parent === this.uploader) return e;
                    e = e.parent
                }
                return this
            },
            sizeUploaded: function() { var e = 0; return this._eachAccess(function(t) { e += t.sizeUploaded() }, function() { o.each(this.chunks, function(t) { e += t.sizeUploaded() }) }), e },
            timeRemaining: function() {
                function e(e, t) { return e && !t ? Number.POSITIVE_INFINITY : e || t ? Math.floor(e / t) : 0 }
                var t = 0,
                    i = 0,
                    n = 0;
                return this._eachAccess(function(r, o) { r.paused || r.error || (i += r.size - r.sizeUploaded(), n += r.averageSpeed), o === this.files.length - 1 && (t = e(i, n)) }, function() {
                    if (this.paused || this.error) return void(t = 0);
                    var i = this.size - this.sizeUploaded();
                    t = e(i, this.averageSpeed)
                }), t
            },
            removeFile: function(e) {
                if (e.isFolder)
                    for (; e.files.length;) {
                        var t = e.files[e.files.length - 1];
                        this._removeFile(t)
                    }
                this._removeFile(e)
            },
            _delFilePath: function(e) { e.path && this.filePaths && delete this.filePaths[e.path], o.each(e.fileList, function(e) { this._delFilePath(e) }, this) },
            _removeFile: function(e) {
                if (!e.isFolder) { o.each(this.files, function(t, i) { if (t === e) return this.files.splice(i, 1), !1 }, this), e.abort(); for (var t, i = e.parent; i && i !== this;) t = i.parent, i._removeFile(e), i = t }
                e.parent === this && o.each(this.fileList, function(t, i) { if (t === e) return this.fileList.splice(i, 1), !1 }, this), this.isRoot || !this.isFolder || this.files.length || (this.parent._removeFile(this), this.uploader._delFilePath(this)), e.parent = null
            },
            getType: function() { return this.isFolder ? "folder" : this.file.type && this.file.type.split("/")[1] },
            getExtension: function() { return this.isFolder ? "" : this.name.substr(2 + (~-this.name.lastIndexOf(".") >>> 0)).toLowerCase() }
        }), e.exports = n
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("div", { directives: [{ name: "show", rawName: "v-show", value: !e.support, expression: "!support" }], staticClass: "uploader-unsupport" }, [e._t("default", [e._m(0)])], 2)
            },
            staticRenderFns: [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("p", [e._v("\n      Your browser, unfortunately, is not supported by Uploader.js. The library requires support for "), i("a", { attrs: { href: "http://www.w3.org/TR/FileAPI/" } }, [e._v("the HTML5 File API")]), e._v(" along with "), i("a", { attrs: { href: "http://www.w3.org/TR/FileAPI/#normalization-of-params" } }, [e._v("file slicing")]), e._v(".\n    ")])
            }]
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", { staticClass: "uploader-list" }, [e._t("default", [i("ul", e._l(e.fileList, function(e) { return i("li", { key: e.id }, [i("uploader-file", { attrs: { file: e, list: !0 } })], 1) }))], { fileList: e.fileList })], 2)
            },
            staticRenderFns: []
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", { staticClass: "uploader-file", attrs: { status: e.status } }, [e._t("default", [i("div", { staticClass: "uploader-file-progress", class: e.progressingClass, style: e.progressStyle }), e._v(" "), i("div", { staticClass: "uploader-file-info" }, [i("div", { staticClass: "uploader-file-name" }, [i("i", { staticClass: "uploader-file-icon", attrs: { icon: e.fileCategory } }), e._v(e._s(e.file.name))]), e._v(" "), i("div", { staticClass: "uploader-file-size" }, [e._v(e._s(e.formatedSize))]), e._v(" "), i("div", { staticClass: "uploader-file-meta" }), e._v(" "), i("div", { staticClass: "uploader-file-status" }, [i("span", { directives: [{ name: "show", rawName: "v-show", value: "uploading" !== e.status, expression: "status !== 'uploading'" }] }, [e._v(e._s(e.statusText))]), e._v(" "), i("span", { directives: [{ name: "show", rawName: "v-show", value: "uploading" === e.status, expression: "status === 'uploading'" }] }, [i("span", [e._v(e._s(e.progressStyle.progress))]), e._v(" "), i("em", [e._v(e._s(e.formatedAverageSpeed))]), e._v(" "), i("i", [e._v(e._s(e.formatedTimeRemaining))])])]), e._v(" "), i("div", { staticClass: "uploader-file-actions" }, [i("span", { staticClass: "uploader-file-pause", on: { click: e.pause } }), e._v(" "), i("span", { staticClass: "uploader-file-resume", on: { click: e.resume } }, [e._v("️")]), e._v(" "), i("span", { staticClass: "uploader-file-retry", on: { click: e.retry } }), e._v(" "), i("span", { staticClass: "uploader-file-remove", on: { click: e.remove } })])])], { file: e.file, list: e.list, status: e.status, paused: e.paused, error: e.error, averageSpeed: e.averageSpeed, formatedAverageSpeed: e.formatedAverageSpeed, currentSpeed: e.currentSpeed, isComplete: e.isComplete, isUploading: e.isUploading, size: e.size, formatedSize: e.formatedSize, uploadedSize: e.uploadedSize, progress: e.progress, progressStyle: e.progressStyle, progressingClass: e.progressingClass, timeRemaining: e.timeRemaining, formatedTimeRemaining: e.formatedTimeRemaining, type: e.type, extension: e.extension, fileCategory: e.fileCategory })], 2)
            },
            staticRenderFns: []
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", { staticClass: "uploader" }, [e._t("default", [i("uploader-unsupport"), e._v(" "), i("uploader-drop", [i("p", [e._v("Drop files here to upload or")]), e._v(" "), i("uploader-btn", [e._v("select files")]), e._v(" "), i("uploader-btn", { attrs: { directory: !0 } }, [e._v("select folder")])], 1), e._v(" "), i("uploader-list")], { files: e.files, fileList: e.fileList, started: e.started })], 2)
            },
            staticRenderFns: []
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("div", { directives: [{ name: "show", rawName: "v-show", value: e.support, expression: "support" }], ref: "drop", staticClass: "uploader-drop", class: e.dropClass }, [e._t("default")], 2)
            },
            staticRenderFns: []
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", { staticClass: "uploader-files" }, [e._t("default", [i("ul", e._l(e.files, function(e) { return i("li", { key: e.id }, [i("uploader-file", { attrs: { file: e } })], 1) }))], { files: e.files })], 2)
            },
            staticRenderFns: []
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("span", { directives: [{ name: "show", rawName: "v-show", value: e.support, expression: "support" }], ref: "btn", staticClass: "uploader-btn" }, [e._t("default")], 2)
            },
            staticRenderFns: []
        }
    }, function(e, t, i) {
        var n = i(59);
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(2)("2e4f4074", n, !0, {})
    }, function(e, t, i) {
        var n = i(60);
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(2)("30297bf6", n, !0, {})
    }, function(e, t, i) {
        var n = i(61);
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(2)("9c4391de", n, !0, {})
    }, function(e, t, i) {
        var n = i(62);
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(2)("6f0f0164", n, !0, {})
    }, function(e, t, i) {
        var n = i(63);
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(2)("f60d437e", n, !0, {})
    }, function(e, t, i) {
        var n = i(64);
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(2)("36e02209", n, !0, {})
    }, function(e, t, i) {
        var n = i(65);
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(2)("fb1ffb7e", n, !0, {})
    }, function(e, t) {
        e.exports = function(e, t) {
            for (var i = [], n = {}, r = 0; r < t.length; r++) {
                var o = t[r],
                    s = o[0],
                    a = o[1],
                    u = o[2],
                    l = o[3],
                    p = { id: e + ":" + r, css: a, media: u, sourceMap: l };
                n[s] ? n[s].parts.push(p) : i.push(n[s] = { id: s, parts: [p] })
            }
            return i
        }
    }])
});
//# sourceMappingURL=vue-uploader.js.map