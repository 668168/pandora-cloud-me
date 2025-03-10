self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pandora-cloud-cache').then(function (cache) {
            return cache.addAll([
                '/apple-touch-icon.png',
                '/favicon-16x16.png',
                '/favicon-32x32.png',
                '/ulp/react-components/1.66.5/css/main.cdn.min.css',
                '/sweetalert2/bulma.min.css',
                '/sweetalert2/sweetalert2.all.min-bc15590d.js',
                '/fonts/colfax/ColfaxAIBold.woff',
                '/fonts/colfax/ColfaxAIBold.woff2',
                '/fonts/colfax/ColfaxAIBoldItalic.woff',
                '/fonts/colfax/ColfaxAIBoldItalic.woff2',
                '/fonts/colfax/ColfaxAIRegular.woff',
                '/fonts/colfax/ColfaxAIRegular.woff2',
                '/fonts/colfax/ColfaxAIRegularItalic.woff',
                '/fonts/colfax/ColfaxAIRegularItalic.woff2',
                '/fonts/katex/KaTeX_AMS-Regular.woff2',
                '/fonts/katex/KaTeX_Caligraphic-Bold.woff2',
                '/fonts/katex/KaTeX_Caligraphic-Regular.woff2',
                '/fonts/katex/KaTeX_Fraktur-Bold.woff2',
                '/fonts/katex/KaTeX_Fraktur-Regular.woff2',
                '/fonts/katex/KaTeX_Main-Bold.woff2',
                '/fonts/katex/KaTeX_Main-BoldItalic.woff2',
                '/fonts/katex/KaTeX_Main-Italic.woff2',
                '/fonts/katex/KaTeX_Main-Regular.woff2',
                '/fonts/katex/KaTeX_Math-BoldItalic.woff2',
                '/fonts/katex/KaTeX_Math-Italic.woff2',
                '/fonts/katex/KaTeX_SansSerif-Bold.woff2',
                '/fonts/katex/KaTeX_SansSerif-Italic.woff2',
                '/fonts/katex/KaTeX_SansSerif-Regular.woff2',
                '/fonts/katex/KaTeX_Script-Regular.woff2',
                '/fonts/katex/KaTeX_Size1-Regular.woff2',
                '/fonts/katex/KaTeX_Size2-Regular.woff2',
                '/fonts/katex/KaTeX_Size3-Regular.woff2',
                '/fonts/katex/KaTeX_Size4-Regular.woff2',
                '/fonts/katex/KaTeX_Typewriter-Regular.woff2',
                '/fonts/signifier/signifier-bold-italic.woff2',
                '/fonts/signifier/signifier-bold.woff2',
                '/fonts/signifier/signifier-light-italic.woff2',
                '/fonts/signifier/signifier-light.woff2',
                '/fonts/soehne/soehne-buch-kursiv.woff2',
                '/fonts/soehne/soehne-buch.woff2',
                '/fonts/soehne/soehne-halbfett-kursiv.woff2',
                '/fonts/soehne/soehne-halbfett.woff2',
                '/fonts/soehne/soehne-kraftig-kursiv.woff2',
                '/fonts/soehne/soehne-kraftig.woff2',
                '/fonts/soehne/soehne-mono-buch-kursiv.woff2',
                '/fonts/soehne/soehne-mono-buch.woff2',
                '/fonts/soehne/soehne-mono-halbfett.woff2',
                '/_next/static/chunks/012ff928-bcfa62e3ac82441c.js',
                '/_next/static/chunks/1f110208-cda4026aba1898fb.js',
                '/_next/static/chunks/238-882950710bdd3e1e.js',
                '/_next/static/chunks/271.f8fe486a0f5b221c.js',
                '/_next/static/chunks/2802bd5f-15923fb46be55b45.js',
                '/_next/static/chunks/297-e180277ece10e844.js',
                '/_next/static/chunks/412-c00b85b4ef66af2f.js',
                '/_next/static/chunks/435-2b015d294e66ccbc.js',
                '/_next/static/chunks/564-f0043ba04d4fcd3d.js',
                '/_next/static/chunks/68a27ff6-b1db347c50639918.js',
                '/_next/static/chunks/800-a82eb647282afb06.js',
                '/_next/static/chunks/937-36e251f389e9e752.js',
                '/_next/static/chunks/984-1278472924e49180.js',
                '/_next/static/chunks/bd26816a-7ae54dd3357d90b4.js',
                '/_next/static/chunks/framework-e23f030857e925d4.js',
                '/_next/static/chunks/main-0438431c68fbeb27.js',
                '/_next/static/chunks/pages/account/cancel-164e4ecc13479ecd.js',
                '/_next/static/chunks/pages/account/manage-c7a1640505b9cfd2.js',
                '/_next/static/chunks/pages/account/upgrade-1457e593ce508c31.js',
                '/_next/static/chunks/pages/admin-810915a9e0227b64.js',
                '/_next/static/chunks/pages/aip/pluginId/oauth/callback-b7d4a081f7ad5b5b.js',
                '/_next/static/chunks/pages/app-573ad0910def0e5d.js',
                '/_next/static/chunks/pages/auth/error-9faed2db943661ab.js',
                '/_next/static/chunks/pages/auth/ext_callback-7b50f284300a7ff6.js',
                '/_next/static/chunks/pages/auth/ext_callback_refresh-47f3cd5abd2d99b6.js',
                '/_next/static/chunks/pages/auth/login-267fffdf86e9e08a.js',
                '/_next/static/chunks/pages/auth/logout-5817b04f45f270e2.js',
                '/_next/static/chunks/pages/auth/mocked_login-060c0092bc682b49.js',
                '/_next/static/chunks/pages/bypass-979cf95f72688cf4.js',
                '/_next/static/chunks/pages/c/chatId-5d264bebf7157821.js',
                '/_next/static/chunks/pages/error-fdab57c4b88e5b1c.js',
                '/_next/static/chunks/pages/index-b00721778b6b9fff.js',
                '/_next/static/chunks/pages/payments/success-c423ec16521d5906.js',
                '/_next/static/chunks/pages/share/shareParams-1c5c5056584e8afb.js',
                '/_next/static/chunks/pages/status-9047ec54adb32ef3.js',
                '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
                '/_next/static/chunks/webpack-305aad91bdd6a592.js',
                '/_next/static/css/59d85ffe80f6c774.css',
                '/_next/static/m__df_2bcLUqGXlko-rBN/buildManifest.js',
                '/_next/static/m__df_2bcLUqGXlko-rBN/ssgManifest.js',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
