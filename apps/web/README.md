# 웹 서비스

## What's inside?

NextJS 기반의 웹 서비스를 구현합니다.

NextJS 14+ 버전 이상이며, app router로 프로젝트를 구성합니다.

## Directory Structure

### Presentation Layer

Presentation Layer는 아래에 정의된 항목으로 구성되며, UI를 구성하는 단위마다(FSD의 Slice 단위와 유사) 프랙탈처럼 반복하여 구성할 수 있다.

```
⎿ presenter
  ⎿ {domain-name}
    ⎿ view.tsx - ui render
    ⎿ view-model.tsx - view에 필요한 상태관리, usecase 호출 등 로직
    ⎿ model.ts - ui model 정의
    ⎿ scheme.ts - (optional) 유효성 체크가 필요한 경우 zod scheme 정의
    ⎿ actions.ts - (optional) server action 정의
    ⎿ store.ts - (optional) global state 정의
```

### Develop

```
turbo dev --filter=web
```

### Build

```
turbo build --filter=web
```
