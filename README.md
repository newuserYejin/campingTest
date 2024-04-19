# 코알누 리액트 스터디 1기 7조의 팀 프로젝트 공간👩‍💻👩‍💻👩‍💻👩‍💻👨‍💻

캠핑 정보 안내 사이트를 함께 만들어 봅시다💪

- 참고 사이트: https://gocamping.or.kr
<p>&nbsp;</p>

## 사용된 라이브러리

- mui
- fontawesome

**📢 작업하면서 추가로 설치되는 라이브러리는 이 목록에 추가해주세요**

<p>&nbsp;</p>

## git 정책

git flow를 사용합니다.

<p>&nbsp;</p>

## branch 전략

```
🌿 main
🌿 develop
      └─ feature/날짜_이름
```

### 🌿 main branch

<span style="color:red">💡 scrum master만 관리합니다</span>  
main 브랜치는 **출시 가능한 프로덕션 코드**를 모아두는 브랜치.  
main 브랜치는 프로젝트 시작 시 생성되며, 개발 프로세스 전반에 걸쳐 유지됩니다.

### 🌿 develop branch

**다음 버전 개발을 위한 코드**를 모아두는 브랜치.  
개발이 완료되면, main 브랜치로 merge합니다.(by scrum master)

### 🌿 feature branch

하나의 기능을 개발하기 위한 브랜치  
<span style="color:red">develop 브랜치에서 생성</span>하며, 기능이 <span style="color:red">개발 완료되면 다시 develop 브랜치로 merge</span>합니다.  
네이밍은 **`feature/240415_yourName`** 과 같은 형태로 생성합니다.

<p>&nbsp;</p>

## notice

- pull 기준은 develop brach입니다.
- 매일 작업 전, <span style="color:red">develop branch에서 `feature/날짜_이름`으로 branch를 따서 작업</span>합니다.
- 하루 작업이 마무리되면 develop branch에 push합니다.
- <span style="color:red">충돌 방지를 위해 push 전 반드시 pull 한번 받아주세요!!!!</span>
- merge시 fast-forward로 merge하지 않고, <span style="color:red">merge commit을 생성하며 merge</span>를 해주어야 합니다.
- commit 메세지에는 어느 부분을 작업했는지 알아 볼 수 있게 작성해주세요.
