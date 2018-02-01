"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pdf_viewer_component_1 = require("../pdf-viewer/pdf-viewer.component");
var AppComponent = (function () {
    function AppComponent() {
        this.pdfSrc = './pdf-test.pdf';
        this.page = 1;
        this.rotation = 0;
        this.zoom = 1.0;
        this.originalSize = false;
        this.renderText = true;
        this.isLoaded = false;
        this.stickToPage = false;
        this.showAll = true;
        this.autoresize = true;
        this.fitToPage = false;
        this.isOutlineShown = true;
    }
    AppComponent.prototype.setCustomWorkerPath = function () {
        window.PDFJS.workerSrc = '/lib/pdfjs-dist/build/pdf.worker.js';
    };
    AppComponent.prototype.incrementPage = function (amount) {
        this.page += amount;
    };
    AppComponent.prototype.incrementZoom = function (amount) {
        this.zoom += amount;
    };
    AppComponent.prototype.rotate = function (angle) {
        this.rotation += angle;
    };
    AppComponent.prototype.onFileSelected = function () {
        var _this = this;
        var $img = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.pdfSrc = e.target.result;
            };
            reader.readAsArrayBuffer($img.files[0]);
        }
    };
    AppComponent.prototype.afterLoadComplete = function (pdf) {
        this.pdf = pdf;
        this.isLoaded = true;
        this.loadOutline();
    };
    AppComponent.prototype.loadOutline = function () {
        var _this = this;
        this.pdf.getOutline().then(function (outline) {
            _this.outline = outline;
        });
    };
    AppComponent.prototype.onError = function (error) {
        this.error = error;
    };
    AppComponent.prototype.onProgress = function (progressData) {
        console.log(progressData);
        this.progressData = progressData;
        this.isLoaded = false;
        this.error = null;
    };
    AppComponent.prototype.getInt = function (value) {
        return Math.round(value);
    };
    AppComponent.prototype.navigateTo = function (destination) {
        this.pdfComponent.pdfLinkService.navigateTo(destination);
    };
    AppComponent.prototype.scrollToPage = function () {
        this.pdfComponent.pdfViewer.scrollPageIntoView({
            pageNumber: 3
        });
    };
    __decorate([
        core_1.ViewChild(pdf_viewer_component_1.PdfViewerComponent),
        __metadata("design:type", pdf_viewer_component_1.PdfViewerComponent)
    ], AppComponent.prototype, "pdfComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pdf-viewer-app',
            template: "\n    <mat-toolbar color=\"primary\">\n        <mat-toolbar-row>\n            <span>ng2-pdf-viewer</span>\n\n            <span class=\"spacer\"></span>\n\n            <iframe src=\"https://ghbtns.com/github-btn.html?user=vadimdez&repo=ng2-pdf-viewer&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <main>\n        <header>\n            <div class=\"page-content\">\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n                    <path d=\"M21 13v-3l-6-7h-10.997c-1.106 0-2.003 0.898-2.003 2.007v22.985c0 1.109 0.891 2.007 1.997 2.007h15.005c1.103 0 1.997-0.898 1.997-1.991v-2.009h7.993c1.661 0 3.007-1.342 3.007-2.999v-7.002c0-1.656-1.336-2.999-3.007-2.999h-7.993zM20 26v2.007c0 0.548-0.448 0.993-1 0.993h-15c-0.545 0-1-0.446-1-0.995v-23.009c0-0.54 0.446-0.995 0.996-0.995h10.004v4.994c0 1.119 0.895 2.006 1.998 2.006h4.002v2h-7.993c-1.661 0-3.007 1.342-3.007 2.999v7.002c0 1.656 1.336 2.999 3.007 2.999h7.993zM15 4.5l4.7 5.5h-3.703c-0.546 0-0.997-0.452-0.997-1.009v-4.491zM11.995 14h17.011c1.092 0 1.995 0.892 1.995 1.992v7.016c0 1.092-0.893 1.992-1.995 1.992h-17.011c-1.092 0-1.995-0.892-1.995-1.992v-7.016c0-1.092 0.893-1.992 1.995-1.992zM25 19v-2h4v-1h-5v7h1v-3h3v-1h-3zM12 18v-2h2.995c1.111 0 2.005 0.895 2.005 2 0 1.112-0.898 2-2.005 2h-1.995v3h-1v-5zM13 17v2h2.001c0.552 0 0.999-0.444 0.999-1 0-0.552-0.443-1-0.999-1h-2.001zM18 16h2.995c1.111 0 2.005 0.898 2.005 2.006v2.988c0 1.119-0.898 2.006-2.005 2.006h-2.995v-7zM19 17v5h2.001c0.552 0 0.999-0.444 0.999-1v-3c0-0.552-0.443-1-0.999-1h-2.001z\"></path>\n                </svg>\n                <h2>Angular 2+ PDF Viewer</h2>\n                <p>Angular 2+ Component to render PDF</p>\n            </div>\n        </header>\n        <div class=\"page-content\">\n            <mat-form-field class=\"mb\">\n                <input matInput\n                       type=\"text\"\n                       placeholder=\"Set URL of the PDF file\"\n                       [(ngModel)]=\"pdfSrc\"\n                >\n            </mat-form-field>\n\n            <div class=\"select-file__container\">\n                <p>\n                    Or render preview by just selecting PDF file (no upload required)\n                </p>\n                <input (change)=\"onFileSelected()\" type=\"file\" id=\"file\">\n            </div>\n\n            <div *ngIf=\"error\" class=\"error mb\">\n                {{ error.message | json }}\n            </div>\n\n            <div class=\"mb\">\n                <mat-slide-toggle [(ngModel)]=\"originalSize\">\n                    Original size\n                </mat-slide-toggle>\n            </div>\n\n            <div class=\"mb\" [hidden]=\"!originalSize\">\n                <mat-slide-toggle [(ngModel)]=\"fitToPage\">\n                    Fit to page\n                </mat-slide-toggle>\n            </div>\n\n            <div class=\"mb\">\n                <mat-slide-toggle [(ngModel)]=\"renderText\">\n                    Render text layer\n                </mat-slide-toggle>\n            </div>\n\n            <div class=\"mb\">\n                <mat-slide-toggle [(ngModel)]=\"autoresize\">\n                    Auto resize\n                </mat-slide-toggle>\n            </div>\n\n            <div class=\"mb\">\n                <mat-slide-toggle [(ngModel)]=\"showAll\">\n                    Show all pages\n                </mat-slide-toggle>\n            </div>\n\n            <div class=\"mb\">\n                <button (click)=\"incrementZoom(-0.1)\" mat-button type=\"button\">\n                    -\n                </button>\n\n                <mat-form-field class=\"page-number\">\n                    <input matInput\n                           type=\"number\"\n                           placeholder=\"Zoom\"\n                           [(ngModel)]=\"zoom\"\n                           pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n                    >\n                    <mat-error>Input is not a number!</mat-error>\n                </mat-form-field>\n\n                <button (click)=\"incrementZoom(0.1)\" mat-button type=\"button\">\n                    +\n                </button>\n            </div>\n\n\n            <div *ngIf=\"showAll\" class=\"mb\">\n                <mat-slide-toggle [(ngModel)]=\"stickToPage\">\n                    Stick to page\n                </mat-slide-toggle>\n            </div>\n\n            <div *ngIf=\"stickToPage && showAll || !showAll\" class=\"mb\">\n                <button (click)=\"incrementPage(-1)\" mat-button type=\"button\">\n                    Previous\n                </button>\n\n                <mat-form-field class=\"page-number\">\n                    <input matInput\n                           type=\"number\"\n                           placeholder=\"Page\"\n                           [(ngModel)]=\"page\"\n                           pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n                    >\n                    <mat-error>Input is not a number!</mat-error>\n                </mat-form-field>\n\n                <span *ngIf=\"pdf\">of {{ pdf.numPages }}</span>\n                <button (click)=\"incrementPage(1)\"  mat-button type=\"button\">\n                    Next\n                </button>\n            </div>\n\n            <div class=\"mb\">\n                <button (click)=\"rotate(-90)\" mat-button type=\"button\">Rotate left</button>\n\n                <mat-form-field class=\"page-number\">\n                    <input matInput\n                           type=\"number\"\n                           placeholder=\"Angle\"\n                           [ngModel]=\"rotation\"\n                           disabled\n                    >\n                    <mat-error>Input is not a number!</mat-error>\n                </mat-form-field>\n\n                <button (click)=\"rotate(90)\" mat-button type=\"button\">Rotate right</button>\n            </div>\n\n            <div *ngIf=\"showAll\" class=\"mb\">\n                <mat-slide-toggle [(ngModel)]=\"isOutlineShown\">\n                    Show outline\n                </mat-slide-toggle>\n            </div>\n\n            <div *ngIf=\"showAll && isOutlineShown\">\n                <ul *ngFor=\"let item of outline\" class=\"outline-list\">\n                    <li>\n                        <a (click)=\"navigateTo(item.dest)\">\n                            {{ item.title }}\n                        </a>\n\n                        <ul *ngFor=\"let child of item.items\">\n                            <li>\n                                <a (click)=\"navigateTo(child.dest)\">\n                                    {{ child.title }}\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n\n            <div *ngIf=\"!isLoaded && !error && progressData\" id=\"progress\">\n                <div class=\"bg\">\n                    <div class=\"bar\" [style.width]=\"progressData.loaded / progressData.total * 100 + '%'\"></div>\n                </div>\n                <span>{{ getInt(progressData.loaded / progressData.total * 100) }}%</span>\n            </div>\n\n\n            <pdf-viewer [src]=\"pdfSrc\"\n                        [(page)]=\"page\"\n                        [rotation]=\"rotation\"\n                        [original-size]=\"originalSize\"\n                        [fit-to-page]=\"fitToPage\"\n                        (after-load-complete)=\"afterLoadComplete($event)\"\n                        [zoom]=\"zoom\"\n                        [show-all]=\"showAll\"\n                        [stick-to-page]=\"stickToPage\"\n                        [render-text]=\"renderText\"\n                        [external-link-target]=\"'blank'\"\n                        [autoresize]=\"autoresize\"\n                        (error)=\"onError($event)\"\n                        (on-progress)=\"onProgress($event)\"\n            ></pdf-viewer>\n\n        </div>\n    </main>\n    <footer>\n        <div class=\"name\">ng2-pdf-viewer</div>\n        <ul class=\"link-list\">\n            <li>\n                <iframe src=\"https://ghbtns.com/github-btn.html?user=vadimdez&type=follow&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe>\n            </li>\n            <li>\n                <iframe src=\"https://ghbtns.com/github-btn.html?user=vadimdez&repo=ng2-pdf-viewer&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"100px\" height=\"20px\"></iframe>\n            </li>\n            <li>\n                <iframe src=\"https://ghbtns.com/github-btn.html?user=vadimdez&repo=ng2-pdf-viewer&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe>\n            </li>\n        </ul>\n    </footer>\n  ",
            styles: ["\n    mat-toolbar {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 100;\n    }\n\n    main {\n        margin-top: 64px;\n    }\n\n    .page-content {\n        padding-top: 10px;\n        width: 50%;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    header {\n        color: #fff;\n        background-color: #3f51b5;\n        padding-top: 25px;\n        padding-bottom: 25px;\n        margin-bottom: 25px;\n        text-align: center;\n    }\n\n    header svg {\n        fill: #fff;\n        width: 56px;\n        height: 56px;\n    }\n\n    @media all and (max-width: 480px) {\n        .page-content {\n            width: 100%;\n            margin-left: 10px;\n            margin-right: 10px;\n        }\n    }\n\n    @media all and (max-width: 600px) {\n        main {\n            margin-top: 56px;\n        }\n    }\n\n    .select-file__container {\n        margin-top: 10px;\n        margin-bottom: 20px;\n    }\n    .select-file__container p {\n        margin-bottom: 0;\n    }\n\n    .page-number {\n        width: 50px;\n    }\n\n    .mb {\n        margin-bottom: 15px;\n    }\n\n    pdf-viewer {\n        display: block;\n    }\n\n    .error {\n        color: #ff4146;\n    }\n\n    #progress {\n        margin-top: 50px;\n        width: 100px;\n        text-align: center;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    #progress .bar,\n    #progress .bg {\n        height: 20px;\n    }\n    #progress .bg {\n        background-color: #e3e3e3;\n    }\n    #progress .bar {\n        width: 0;\n        max-width: 100%;\n        background-color: #3f51b5;\n        transition: .5s width;\n    }\n\n    .outline-list li a {\n        cursor: pointer;\n    }\n\n    .spacer {\n        flex: 1 1 auto;\n    }\n\n    footer {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n        padding: 32px 16px;\n        color: #c4c4c4;\n        background-color: #424242;\n    }\n\n    footer .name {\n        font-size: 14px;\n        margin-right: 18px;\n        line-height: 30px;\n    }\n\n    footer ul {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-flex-flow: row nowrap;\n        -ms-flex-flow: row nowrap;\n        flex-flow: row nowrap;\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        align-items: center;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
