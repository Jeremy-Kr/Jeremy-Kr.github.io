---
date: '2023-04-04'
title: 'HTTP'
categories: ['cs', 'HTTP', '면접질문']
summary: 'HTTP가 뭔가요'
thumbnail: './http.png'
---

## HTTP

HTTP(HyperText Transfer Protocol)는 클라이언트와 서버 사이에 이루어지는 요청/응답 프로토콜이다. 주로 TCP를 사용하고 HTTP/0.9, HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3 등의 버전이 있다.

### HTTP/0.9

HTTP/0.9는 GET 메서드만 지원하고, 응답으로 HTML만 받을 수 있다. HTTP/0.9는 요청과 응답이 간단하고, 빠르지만, 확장성이 부족하다.

### HTTP/1.0

HTTP/1.0은 GET, POST, HEAD 메서드를 지원하고, 응답으로 HTML, 이미지, 동영상 등을 받을 수 있다. 헤더가 추가되어, 요청과 응답에 대한 정보를 담을 수 있다.

같은 요청을 여러 번 보내더라도 매번 새로운 연결을 생성한다. 이러한 문제를 해결하기 위해 HTTP/1.1에서는 Persistent Connection 기능을 추가하였다.

### HTTP/1.1

HTTP/1.1은 GET, POST, HEAD, PUT, DELETE, OPTIONS, TRACE, CONNECT 등의 메서드를 지원하고, 응답으로 HTML, 이미지, 동영상 등을 받을 수 있다.

Persistent Connection기능을 추가하여, 같은 요청을 여러 번 보내더라도 매번 새로운 연결을 생성하지 않는다.

Pipeline 기능을 추가하여, 요청을 순차적으로 보내지 않고, 동시에 보낼 수 있다.

### HTTP/2

HTTP/2는 기존 HTTP/1.x의 성능을 개선하기 위해 개발되었다. 가장 큰 특징은 Binary Framing이다. 이전에는 텍스트로 이루어진 HTTP 메시지를 사용했지만, HTTP/2에서는 바이너리 형태로 이루어진 프레임을 사용한다. 이렇게 바이너리 형태로 이루어진 프레임을 사용하면, 헤더 압축, 스트림 우선순위, 서버 푸시 등의 기능을 추가할 수 있다.

특히 Server Push 기능은 클라이언트가 요청하지 않은 리소스를 미리 서버에서 클라이언트에게 보내는 기능이다. 이 기능을 사용하면, 클라이언트가 요청하지 않은 리소스를 요청할 때까지 기다리지 않아도 되기 때문에, 성능이 향상된다.

### HTTP/3

HTTP/3는 UDP를 사용하고, QUIC 프로토콜을 사용한다. QUIC은 TCP와 UDP의 장점을 모두 가지고 있다. TCP는 신뢰성이 높지만, UDP는 빠르지만, 신뢰성이 낮다. QUIC은 TCP와 UDP의 장점을 모두 가지고 있다.

## HTTPS

HTTPS(HyperText Transfer Protocol Secure)는 HTTP에 SSL(Secure Socket Layer)이나 TLS(Transport Layer Security)를 추가한 프로토콜이다. SSL이나 TLS를 사용하면, 클라이언트와 서버 사이에 암호화된 연결을 만들 수 있다. 이렇게 암호화된 연결을 만들면, 중간에 누군가가 통신 내용을 볼 수 없다.

## 참고

- [wikipedia - HTTP](https://ko.wikipedia.org/wiki/HTTP)
- [wikipedia - HTTPS](https://ko.wikipedia.org/wiki/HTTPS)
- [HTTP/2: The Basics](https://developers.google.com/web/fundamentals/performance/http2)
- [HTTP/3: The Basics](https://developers.google.com/web/fundamentals/performance/http3)
- [MDN - HTTP](https://developer.mozilla.org/ko/docs/Web/HTTP)
