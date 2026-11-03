#!/usr/bin/env python3
"""Local exercise server. Python standard library only; no external API calls."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, parse_qs
import argparse, json, html, webbrowser, math

ROOT = Path(__file__).resolve().parent
class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs): super().__init__(*args, directory=str(ROOT), **kwargs)
    def reply(self, status, content, content_type):
        data=content.encode('utf-8'); self.send_response(status)
        self.send_header('Content-Type',content_type+'; charset=utf-8')
        self.send_header('Content-Length',str(len(data))); self.end_headers(); self.wfile.write(data)
    def do_GET(self):
        parsed=urlsplit(self.path); query=parse_qs(parsed.query,keep_blank_values=True)
        if parsed.path=='/search':
            rows=''.join('<tr><td>'+html.escape(k)+'</td><td>'+html.escape(v)+'</td></tr>' for k,values in query.items() for v in values)
            body='<!doctype html><html lang="en"><meta charset="utf-8"><title>Form parameters</title><h1>Received form parameters</h1><p>This is the local practice service.</p><table border="1"><tr><th>Name</th><th>Value</th></tr>'+rows+'</table><p><a href="javascript:history.back()">Back to the form</a></p></html>'
            return self.reply(200,body,'text/html')
        if parsed.path=='/weather':
            try:
                lat=float(query['latitude'][0]);lon=float(query['longitude'][0])
                if not math.isfinite(lat) or not math.isfinite(lon) or not -90<=lat<=90 or not -180<=lon<=180 or query.get('current')!=['temperature_2m']: raise ValueError()
            except (KeyError,ValueError,IndexError):
                return self.reply(400,json.dumps({'error':'Invalid query'}),'application/json')
            cases=json.loads((ROOT/'data'/'weather-cases.json').read_text())
            result=next((x for x in cases if x['latitude']==lat and x['longitude']==lon),None)
            if result is None:
                result=dict(latitude=lat,longitude=lon,elevation=15,generationtime_ms=0.10,current=dict(time='2026-11-03T09:00',interval=900,temperature_2m=22.0))
            return self.reply(200,json.dumps(result),'application/json')
        return super().do_GET()

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=8765);parser.add_argument('--no-browser',action='store_true');args=parser.parse_args()
    server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler)
    url='http://127.0.0.1:'+str(args.port)+'/questions.html'
    print('Practice page: '+url+'\nKeep this window open. Press Control+C to stop.',flush=True)
    if not args.no_browser: webbrowser.open(url)
    try: server.serve_forever()
    except KeyboardInterrupt: pass
    finally: server.server_close()
