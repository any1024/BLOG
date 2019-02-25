---
title: git入门教程
date: '2018-11-08'
tag: 
  - git
meta:
  -
    name: git
    content: git easy study
  -
    name: git
    content: git初级教程
---

本篇介绍了从零开始使用git,以及git的一些常用命令.
<!-- more -->

## git初级教程

### 1.1 初始化配置

- 初始化输入自己的GitHub用户名和邮箱

  ```
  $ git config --global user.name "Your Name"
  $ git config --global user.email "email@example.com" 
  ```

- 注意`git config`命令的`--global`参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。 

- 所以，创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：

  ```
  $ mkdir learngit
  $ cd learngit
  ```

### 1.2新建到保存 

- 第二步，通过`git init`命令把这个目录变成Git可以管理的仓库：

  ```
  $ git init
  ```

- 和把大象放到冰箱需要3步相比，把一个文件放到Git仓库只需要两步。

  第一步，用命令`git add`告诉Git，把文件添加到仓库：

  文件名区分大小写

  ```
  $ git add README.txt
  ```

- 执行上面的命令，没有任何显示，这就对了,说明添加成功。

  第二步，用命令`git commit`告诉Git，把文件提交到仓库：

  ```
  $ git commit -m "wrote a readme file"
  ```

- 简单解释一下`git commit`命令，`-m`后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。

- 嫌麻烦不想输入`-m "xxx"`行不行？确实有办法可以这么干，但是强烈不建议你这么干，因为输入说明对自己对别人阅读都很重要。实在不想输入说明的童鞋请自行Google，我不告诉你这个参数。

- `git commit`命令执行成功后会告诉你，`1 file changed`：1个文件被改动（我们新添加的README.txt文件）；`1 insertions`：插入了两行内容（README.txt有`一`行内容）。

- `git commit --amend`命令可以对上一次未提交的commit做修改

### 1.3保存多个

- 为什么Git添加文件需要`add`，`commit`一共两步呢？因为`commit`可以一次提交很多文件，所以你可以多次`add`不同的文件，比如：  	

  ```javascript
  $ git add file1.txt
  $ git add file2.txt file3.txt
  $ git commit -m "add 3 files."
  ```

### 1.4提交到远程仓库

- 提交远程仓库

  `git remote add origin https://github.com/Overcase/test3.git`

- push到GitHub上

  `git push -u origin master`

- clone github 上的仓库

  `git clone https://github.com/Overcase/test3.git`

  
### 1.5修改远程仓库

- 修改远程仓库

  `git remote set-url origin [url]`

- 先删后加

  `git remote rm origin`
  `git remote add origin [url]`

- clone github 上的仓库

  `git clone https://github.com/Overcase/test3.git`

- clone github branch

    `git clone -b [分支名] https://github.com/Overcase/test3.git`

    
### 1.6 fetch远程仓库
  `git fetch origin wxh:xl_wxh` fetch远程仓库到本地xl_whx分支


### 1.7版本回退

- 当然了，在实际工作中，我们脑子里怎么可能记得一个几千行的文件每次都改了什么内容，不然要版本控制系统干什么。版本控制系统肯定有某个命令可以告诉我们历史记录，在Git中，我们用`git log`命令查看：

  `git log`

- `git log`命令显示从最近到最远的提交日志.

  如果嫌输出信息太多，看得眼花缭乱的，可以试试加上`--pretty=oneline`参数：

  `$ git log --pretty=oneline`

- 现在，我们要把当前版本`append GPL`回退到上一个版本`add distributed`，就可以使用`git reset`命令：

  `$ git reset --hard HEAD^`

- 首先，Git必须知道当前版本是哪个版本，在Git中，用`HEAD`表示当前版本，也就是最新的提交`1094adb...`（注意我的提交ID和你的肯定不一样），上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。 

- 比如要返回下面这个版本

- commit 后面是这个版本的id

  ```
  $ git log
  commit e475afc93c209a690c39c13a46716e8fa000c366 (HEAD -> master)
  ```

- 想返回这个版本则（id可以简写，就写前几位，比如e475afc  `git会根据前几位自动查找`）

- hard当前环境的版本指针

  ```
  $ git reset --hard e475afc93c209a690c39c13a46716e8fa000c366
  ```

### 1.8申请密钥

- 使用git bash打开命令行工具

  ```
    # 切换到ssh文件夹
    cd ~./ssh
    
    # 可以一直回车
    ssh-keygen
  ```
- 然后复制到git账户的密钥中