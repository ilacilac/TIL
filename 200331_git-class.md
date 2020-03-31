[최우영강사님](https://github.com/ulgoon/essential-git) : https:://ulgoon.github.io

me@ulgoon.com






ide

언어를 배울때 philosophy(철학)를 아는게 좋음

언어가 가진 특성에 맞게 프래임워크 배치

- 블로그같은 시스템 : 파이썬 잔고

- 앱서비스 ; 고언어로 api (endpoint)

- 줄리아/파이썬 : 데이터분석

  파이썬 : 퍼포먼스적으로 끌어내기 힘든영역을 줄리아

- 무언가 만들때 한계가 느낄때 다른언어와 같이

angular : 찰흙느낌

react : 요즘 시장 장악 / 레고느낌. 하나하나 조립하고

Vue : 가볍게 / 작은인형의집 느낌, 이미 다 만들어져있어서 골라쓰면됨



커널과 쉘 차이

Shell : 운영체제의 커널과 사용자를 이어주는 소프트웨어

Zsh가 현재까지 가장 완벽함 (친화적)

파인더/탐색기 : gui기반 쉘



Bash 설정



git은 cli기반으로 진행

Gui : 소스트리 ... 를 먼저 진행하면 cmd를 사용할 일이 없음 gui가안되는환경에서도 할 수 있게



- $ : 쉘에서 중요함 
  	쉘이 사용자의 입력을 받을 준비가 되었다
  	ex) $ node 하면 달러가 보이지 않음 (프로그램 열어주고 끝남)
  	.exit

- ~ : 사용자 폴더의 최상단

/ : 하드디스크 그 아래로 모든파일이 존재함

/users/사용자명에 사용자 부분이 <code>~</code>



```
pwd : 내위치를 절대경로로 보여줌
ls : 아래로 접글할 수 있는 폴더 보여줌 (list segmuent)
ls -l : 한줄씩 보여줌 상세정보까지 (- 로 옵션을걸어서 디테일하게)
ls -a : 숨긴파일까지 보여줌
cd : change directory
mkdir : 디렉토리 만들기
touch : 파일 만들기
mv : 파일옮기기 
(mv 파일이름 옮길폴더명)
cp : 복사하기
(cp 파일이름 복제할 폴더)
rm : 삭제하기
	rm index.* : 파일명을 이용하여 동시삭제

*mv와 cp를 통해 이름을 바꿀 수 있음*
mv hello.java hell.java

vi 파일명 : 
~
~
~ : 이파일의 끝, 실제 존재하지않는 영역
: 처음 들어갔을때 (normal mode)(마치 최상단 메뉴 드랍메뉴)
: insert / visual / block mode 존재 
: insert로 들어가서 저장
: esc -> 명령어 :
: w(저장) / q(나가기) :q! (저장안할거야)
open hello.py (html, chrome / js, vscode)
한영전환바꾸고 cmd / powershell 명령어 쳐야함

: cat hello.txt 
(catnate : 문장병합 / 터미널에 txt에 입력했던 텍스트가 뜸)
```

개발하는경우 지저분해질 수 있고 렌더링하는데 시간이 걸릴 수 있으므로
document에 저장하면 좋음 (드랍박스 백업도 가능)

ls 와 현재위치 파악이 중요

<code>.</code> : 현재폴더 / <code>..</code> : 상위폴더

```
mingui-MacBook-Pro:dev ming$ mkdir useless
mingui-MacBook-Pro:dev ming$ ls
useless
mingui-MacBook-Pro:dev ming$ touch index.html
mingui-MacBook-Pro:dev ming$ ls
index.html	useless
mingui-MacBook-Pro:dev ming$
mv index.html useless
rm -r : recursive / 경로안에있는파일 다 지우고 너 자신까지 지워라(폴더삭제)
	rm -rf useless/
	rm -rf / : 절대경로 삭제 / 주의할것..
	ctrl c z
```

화학적 : remove

물리적 : delete

```
-rw-r--r--  1 ming  staff   0  3 31 11:25 hell.java
-rw-r--r--  1 ming  staff   0  3 31 11:27 hello.js
drwxr-xr-x  2 ming  staff  64  3 31 11:16 useless
```

읽고쓰고실행하고

그룹 3개 / 3개의 권한(rwx) / 바이너리(2진법)으로 권한줄 수 있음 

8진수로 컨트롤

linux는 데스크탑이 아니라 서버os로 시작해서 guest의 권한이 필요함

-- 가 off고 글씨가있으면 활성화

777은 위험

555를 줌(작업은 내컴터만 올리는건 깃을 이용해서 하겠다)



### vim

- 텍스트 에디터

  Emacs / vi

- Emacs vim

vim은 기본적으로 





### **GIT**

version control system

소프트웨어 개발자

개발을 한다 했을때? 

- 장비 / 인력 / 돈, 시간 ... (형성관리)
- 소스 : SCM (source code management)



리누스토발즈 : 2주만에 / 화가나서 만듬

- 빠른속도 단순한구조
- 분산형 저장소 지원
- 비선형적 개발(여러명에 한번에 / 한사람이 여러가지일을해도 오류안남)



git

- 하나의 파일에 이력을 남긴다 / history를 남긴다
- 안정적
- merge(병합)
- 생산성증가 



commit 

- 이력 체크포인트
- Blob 
- tree 
- 변경사항에대한 설명
-  



branch

- 



merge

- 



인터넷이 안되도 이력관리가 가능 (local repo)

관리자 입장에선 좋다



git GUI Client

- Git GUI
- sourcetree (attlansian)
- kraken
- smartGit



remote repository

- github
- bitbucket (attransian)
- gitlab (보안)



workspace - index - local repo - remote repo

1. set : global이기때문에 한번만 진행

```
git config --list

user.name / user.mail / core.editor / core.pager.cat 

git config --global core.pager "cat" : 경로 / 바로볼 수 있음
```

gitHub.com/wayhome25



2. workspace에서 시작하는 방법

   - cd로 경로설정
   - Git inti 
   - git status : nothing to commit과같은 메세지가 뜨면 성공

   github에(받는곳) 레포만들기 >
   instruction만 뜨면 주소만 생성되는거임 >
   주소 복사 >
   터미널 > git remote > 아무것도 안뜸
   git remote add origin(별명/관습적:origin) 주소
   git remote > origin이보이면 맞게 셋팅
   git remote get-url origin
   git remote -v 

   프로젝트 생성될때만 한번만 함

3. source code만들기

   git status : gui와 같은 시스템이 아니기 때문에 계속 확인해줘야함

   README.md : 차를살때 설명서가 있는것처럼 / 어던 library를 사용하든지 읽고 시작해야함 / + licence

   Untracked files: 깃이 처음본다고 알려줌 > 올려줘야함(새파일 만들것도 변경사항)

   Changes to be committed : 커밋할 준비가 됨

   vim : 

   docs : 말머리 달아줌

   ​	docs: 구

   ​	절

   Conf(confuguration)

   ```
   docs: documentation // 문서화
   conf: configuration // 
   feat: feature
   bugfix: bug-fix
   resolve: resolved commit reltated git.
   ```

   커밋 제목을보고 유추가능

   opensource 프로젝트를 제공 / 영어로 사용하는게 좋음

   

4. 보내기

   git push -u origin master

   저거랑 이거랑 같은 브랜치야 : -u 로 알려줌(맨 처음)



readme 작업 / 새파일 작업 / 커밋 나눠서하는 실습

​	touch index.html

​	vi README.md 
​	: vim으로 해당파일 작업
​	git staturs
​	: README.md - 텍스트 작업 / index.html - 기능개발을위해 만듬
​	위의 두 파일이 한 커밋으로 들어가면 안됨
​	시간의순서가 중요하다 : 작업의 순서대로 index.html 먼저 commit
​	연관성을 묶어서 해야하는게 중요 : README.md 먼저 commit

`![]()`





**Clone**

repo명 : html-with-git

파일이 들어있는 상태에서 클론할 수 있음

clone or download > 주소복사

git clone 주소

`:set nu` : 넘버링

gitignore : 깃이 무시할 파일들 (모든걸 추적하는게 기본, 비밀번호를 등록한 파일이있다면 깃헙에올라가면 안되니 ) 선택한 파일은 거를수있음 (사용자 인증파일)

licenses : none 

apache license 2.0 (무료이나 참고했다는걸 알려줘야함)

gnu general public license v3.0 (피하는게좋음)'

mit : open source정의하는 오픈소스라이센스를 만듬(가장자유로움)

모든레포는 병렬적으로 관리되어야 한다

`vi .gitignore`

```
#custom

*.java
useless.*
credential/**
```



 



git checkout -- . 

​	최근커밋 (커스텀 하기 전 상태) (체크포인트 한 시점) > 커스터마이징 > 쓰다가 수정하	기 어려워 최신상태로 돌아가라는 뜻 > 위에 vi gitignore에 썼던게 지워져있음	 



Til : 매일

블로그 / til바탕으로 1주일 1번 권장

```
# happy coding with git(1)

## How to start project with git

1. `$ git init` : initialize git
2. `$ touch index.html` : create index.html to work.
3. `$ git add { filename }`



## TODO

1. ~~~Sleep~~~
2. Have some pizza.
3. Learn Rust

```

~~ff~~



Star 

트렐로 
: task별로 doing / done 체크할 수 있는 보드

github의 projects가 해당기능



복제 / pull



#### 블로그

jekyll : 루비기반

hugo : 빠름

hexo : node.js

*아스키네마 / 유툽같은데 코드 복사가능

`https://hexo.io/`

**브류를 이용하여 node.js 설치**

```
https://brew.sh/
brew install node.js
(껐다 켰을 때) node -v
brew install node.js
```



**hexo 설치**

```
sudo npm install -g hexo-cli
hexo 명령어 
hexo init myblog // myblog는 폴더명


```

package.json

: 모듈듈을 리스트 업하고 정보들 모여있는 공간 : 



Config.yml만 건드리면 됨



genterate 작업을 안하면 새글작업이 안된다(md바탕으로 html 작업)

`hexo clean && hexo generate`

`hexo server`





**배포작업**

컴퓨터를 안끌거면 이렇게하면되지만

깃헙에 올릴거임

angdoong.github.io : 유저네임당 하나의 GitHub.io

`npm install --save-dev hexo-deployer-git`

`+ hexo-deployer-git`

vi _config.yml

```
# Site
title: Hexo
subtitle: ''
description: ''
keywords:
author: John Doe
language: en
timezone: ''
```

메타정보 입력

yml(야믈) 

``` 
# Site
title: Minji's blog
subtitle: ''
description: ''
keywords:
author: Minji Park
language: en
timezone: 'ko'
// 게시글이 안보이면 
// timezone: ''

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://angdoong.github.io
root: /
permalink: :year/:month/:day/:title/
```

```
deploy:
  type: git
  repo: https://github.com/angdoong/angdoong.github.io.git
```

tip : hack font : i , l구분



바꾼 설정을 가지고 generate 해달라

`hexo clean && hexo generate`

배포 : `hexo deploy`





2분정도 후 들어가서 보면 나옴 (바로 안뜸)

https://angdoong.github.io/



테마

https://github.com/theme-next/hexo-theme-next

```
mingui-MacBook-Pro:myblog ming$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```



깃 클론 패쓰 디렉토리명

디렉토리명 생성된곳에 클론



_config.yml 은 package-lock.json가 보이는곳에서 해야함

vi _config.yml 

96번째줄 아래와같이 수정

```
theme: next
```



```
mingui-MacBook-Pro:myblog ming$ cd themes/
mingui-MacBook-Pro:themes ming$ ls
landscape	next
mingui-MacBook-Pro:themes ming$ cd ne
-bash: cd: ne: No such file or directory
mingui-MacBook-Pro:themes ming$ cd next/
mingui-MacBook-Pro:next ming$ vi _config.yml
mingui-MacBook-Pro:next ming$ hexo clean && hexo generate
```



107번줄 : false -> true



angdoong

ming

layla

lilac

라 일락

layla

coding 

ilac





