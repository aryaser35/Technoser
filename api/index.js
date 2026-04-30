export const config = { runtime: "edge" };

const _0x5a2e = ["host", "connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "te", "trailer", "transfer-encoding", "upgrade", "forwarded", "x-forwarded-host", "x-forwarded-proto", "x-forwarded-port", "x-vercel-", "x-real-ip", "x-forwarded-for", "GET", "HEAD", "manual", "half"];
const _0x1f3c = (i) => _0x5a2e[i];

const _0x4d9b2a1 = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");

export default async function _0x2b8e9f(req) {
    const _0x7c12a8 = _0x4d9b2a1;
    if (!_0x7c12a8) {
        return new Response(atob("TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0"), { status: 500 });
    }

    try {
        const _0x3e9a = req.url;
        const _0x112d = _0x3e9a.indexOf("/", 8);
        const _0x550c12 = _0x112d === -1 ? _0x7c12a8 + "/" : _0x7c12a8 + _0x3e9a.slice(_0x112d);

        const _0x88ff21 = new Headers();
        let _0x22ab9 = null;

        for (const [_0x441a, _0x552b] of req.headers) {
            let _0x992c = false;
            for (let i = 0; i < 13; i++) {
                if (_0x441a === _0x1f3c(i)) { _0x992c = true; break; }
            }
            if (_0x992c || _0x441a.startsWith(_0x1f3c(13))) continue;

            if (_0x441a === _0x1f3c(14)) {
                _0x22ab9 = _0x552b;
                continue;
            }
            if (_0x441a === _0x1f3c(15)) {
                if (!_0x22ab9) _0x22ab9 = _0x552b;
                continue;
            }
            _0x88ff21.set(_0x441a, _0x552b);
        }

        if (_0x22ab9) _0x88ff21.set(_0x1f3c(15), _0x22ab9);

        const _0xfe33 = req.method;
        const _0x44d1 = _0xfe33 !== _0x1f3c(16) && _0xfe33 !== _0x1f3c(17);

        const _0xbc22 = {
            method: _0xfe33,
            headers: _0x88ff21,
            body: _0x44d1 ? req.body : undefined,
            duplex: _0x1f3c(19),
            redirect: _0x1f3c(18)
        };

        return await fetch(_0x550c12, _0xbc22);
    } catch (_0xee11) {
        console.error("err:", _0xee11);
        return new Response(atob("QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ="), { status: 502 });
    }
}
