"use strict";(self.webpackChunkah_kevin_xy=self.webpackChunkah_kevin_xy||[]).push([[15003],{24348:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var s=i(85893),l=i(11151);const r={},a="\u547d\u4ee4\u884c\u5de5\u5177",t={id:"backend/server/tools/shell",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"\u6279\u91cf\u5220\u9664\u50f5\u5c38\u8fdb\u7a0bID",source:"@site/docs/backend/server/tools/shell.md",sourceDirName:"backend/server/tools",slug:"/backend/server/tools/shell",permalink:"/docs/backend/server/tools/shell",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supervisor \u8be6\u89e3",permalink:"/docs/backend/server/supervisor"},next:{title:"vim",permalink:"/docs/backend/server/vim"}},o={},c=[{value:"\u6279\u91cf\u5220\u9664\u50f5\u5c38\u8fdb\u7a0bID",id:"\u6279\u91cf\u5220\u9664\u50f5\u5c38\u8fdb\u7a0bid",level:2},{value:"\u663e\u793a linux \u5185\u6838\u7248\u672c\u4fe1\u606f",id:"\u663e\u793a-linux-\u5185\u6838\u7248\u672c\u4fe1\u606f",level:2},{value:"\u6279\u91cf\u5728\u591a\u53f0Linux\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6216\u5378\u8f7d\u5305",id:"\u6279\u91cf\u5728\u591a\u53f0linux\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6216\u5378\u8f7d\u5305",level:2},{value:"\u663e\u793a\u50f5\u5c38\u8fdb\u7a0b",id:"\u663e\u793a\u50f5\u5c38\u8fdb\u7a0b",level:2},{value:"\u6279\u91cf\u5728\u591a\u53f0Linux\u5b9e\u4f8b\u4e0a\u6e05\u7406\u78c1\u76d8",id:"\u6279\u91cf\u5728\u591a\u53f0linux\u5b9e\u4f8b\u4e0a\u6e05\u7406\u78c1\u76d8",level:2},{value:"\u67e5\u770b\u76ee\u5f55\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u5927\u5c0f",id:"\u67e5\u770b\u76ee\u5f55\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u5927\u5c0f",level:2},{value:"\u67e5\u770bCPU\u5360\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b",id:"\u67e5\u770bcpu\u5360\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b",level:2},{value:"\u68c0\u6d4b\u6307\u5b9a\u7aef\u53e3\u548c\u534f\u8bae\u662f\u5426\u88abiptables\u5c01\u7981",id:"\u68c0\u6d4b\u6307\u5b9a\u7aef\u53e3\u548c\u534f\u8bae\u662f\u5426\u88abiptables\u5c01\u7981",level:2},{value:"\u5728iptables\u653e\u5f00\u6307\u5b9a\u534f\u8bae\u548c\u7aef\u53e3",id:"\u5728iptables\u653e\u5f00\u6307\u5b9a\u534f\u8bae\u548c\u7aef\u53e3",level:2},{value:"\u6dfb\u52a0 ssh",id:"\u6dfb\u52a0-ssh",level:2},{value:"\u6279\u91cf\u4e0a\u4f20\u6587\u4ef6",id:"\u6279\u91cf\u4e0a\u4f20\u6587\u4ef6",level:2},{value:"\u4fee\u6539\u5bc6\u7801",id:"\u4fee\u6539\u5bc6\u7801",level:2},{value:"\u6279\u91cfkill \u8fdb\u7a0b",id:"\u6279\u91cfkill-\u8fdb\u7a0b",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u547d\u4ee4\u884c\u5de5\u5177",children:"\u547d\u4ee4\u884c\u5de5\u5177"}),"\n",(0,s.jsx)(n.h2,{id:"\u6279\u91cf\u5220\u9664\u50f5\u5c38\u8fdb\u7a0bid",children:"\u6279\u91cf\u5220\u9664\u50f5\u5c38\u8fdb\u7a0bID"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" ps -A -ostat,ppid,pid,cmd |grep -e '^[Zz]' | grep -v grep |cut -c 5-13 |xargs kill  -9\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u663e\u793a-linux-\u5185\u6838\u7248\u672c\u4fe1\u606f",children:"\u663e\u793a linux \u5185\u6838\u7248\u672c\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\nuname -a\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6279\u91cf\u5728\u591a\u53f0linux\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6216\u5378\u8f7d\u5305",children:"\u6279\u91cf\u5728\u591a\u53f0Linux\u5b9e\u4f8b\u4e0a\u5b89\u88c5\u6216\u5378\u8f7d\u5305"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nfunction configurePackages() {\n    installer=$1\n    action=$2\n    packageName=$3\n    if [ "$installer" = "yum" ]; then\n        if [ "$action" = "install" ]; then\n            yum install -y $packageName\n            if [ $? -ne 0 ]; then\n                echo "Package install failed. Please check your command"\n                exit 1\n            fi\n        elif [ "$action" = "uninstall" ]; then\n            yum remove -y $packageName\n            if [ $? -ne 0 ]; then\n                echo "Package uninstall failed. Please check your command"\n                exit 1\n            fi\n        else\n            echo "Package command must be install or uninstall"\n            exit 1\n        fi\n    elif [ "$installer" = "apt-get" ]; then\n        if [ "$action" = "install" ]; then\n            apt-get -y install $packageName\n            if [ $? -ne 0 ]; then\n                echo "Package install failed. Please check your command"\n                exit 1\n            fi\n        elif [ "$action" = "uninstall" ]; then\n            apt-get -y remove $packageName\n            if [ $? -ne 0 ]; then\n                echo "Package uninstall failed. Please check your command"\n                exit 1\n            fi\n        else\n            echo "Package command must be install or uninstall"\n            exit 1\n        fi\n    else\n        echo "Unknown package installer. Only support yum/apt-get"\n        exit 1\n    fi\n}\n  \nconfigurePackages {{installer}} {{action}} {{packageName}}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u663e\u793a\u50f5\u5c38\u8fdb\u7a0b",children:"\u663e\u793a\u50f5\u5c38\u8fdb\u7a0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nprocesses=$(ps ax -o user,pid,ppid,pgid,args,stat,start,time)\nzombies=$(echo -e "${processes}" | grep -E "\\s(Z|z|Z.*)\\s")\nif [ $? == 1 ]; then\n  echo "no zombie processes exists on machine"\nelse\n  echo -e "${processes}" | head -1\n  echo "$zombies"\nfi\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6279\u91cf\u5728\u591a\u53f0linux\u5b9e\u4f8b\u4e0a\u6e05\u7406\u78c1\u76d8",children:"\u6279\u91cf\u5728\u591a\u53f0Linux\u5b9e\u4f8b\u4e0a\u6e05\u7406\u78c1\u76d8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n  \nfunction deletefiles() {\n  if [ ! -d $2 ]; then\n    echo "The specified directory("$2") is not exist."\n    return\n  fi\n  \n  expiredTimeUnit=${1: -1}\n  expiredTimeValue=${1:0:-1}\n  \n  if [ "$expiredTimeUnit" = "d" ]; then\n    expiredTime=$(($expiredTimeValue * 24 * 60 * 60))\n  elif [ "$expiredTimeUnit" = "h" ]; then\n    expiredTime=$(($expiredTimeValue * 60 * 60))\n  elif [ "$expiredTimeUnit" = "m" ]; then\n    expiredTime=$(($expiredTimeValue * 60))\n  else\n    echo "The unit("$expiredTimeUnit") of file age is not supported."\n    return\n  fi\n  \n  for file in $(find $2 -type f -name "$3"); do\n    local currentDate=$(date +%s)\n    local modifyDate=$(stat -c %Y $file)\n    local existTime=$(($currentDate - $modifyDate))\n  \n    if [ $existTime -gt $expiredTime ]; then\n      echo "File cleaning succeeded,path:"$file"."\n      rm -f $file\n    fi\n  done\n}\n  \ndeletefiles {{delayTime}} {{filePath}} "{{matchPattern}}"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u67e5\u770b\u76ee\u5f55\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u5927\u5c0f",children:"\u67e5\u770b\u76ee\u5f55\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u5927\u5c0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\ndu -sh {{directory}}\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u67e5\u770bcpu\u5360\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b",children:"\u67e5\u770bCPU\u5360\u7528\u7387\u9ad8\u7684\u8fdb\u7a0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nTOPK={{topk}}\nSECS={{samplingTime}}\nINTERVAL={{interval}}\nSTEPS=$(( $SECS / $INTERVAL ))\nTEMP_FILE_PREFIX="/tmp/tat_public_cpu_usage"\n\necho Watching CPU usage...\nfor((i=0;i<$STEPS;i++))\ndo\n  ps -eocomm,pcpu | tail -n +2 >> $TEMP_FILE_PREFIX.$$\n  sleep $INTERVAL\ndone\n\necho\necho CPU eaters :\ncat $TEMP_FILE_PREFIX.$$ | \\\nawk \'\n{ process[$1]+=$2;}\n\nEND{\n  for(i in process) {\n    printf("%-20s %s\\n",i, process[i]) ;\n  }\n}\' | sort -nrk 2 | head -n $TOPK\n\nrm $TEMP_FILE_PREFIX.$$\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u68c0\u6d4b\u6307\u5b9a\u7aef\u53e3\u548c\u534f\u8bae\u662f\u5426\u88abiptables\u5c01\u7981",children:"\u68c0\u6d4b\u6307\u5b9a\u7aef\u53e3\u548c\u534f\u8bae\u662f\u5426\u88abiptables\u5c01\u7981"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# ports to be checked, seperated by comma.\nPORTS="{{PORTS}}"\n# supported protocols, available values: all, tcp, udp.\nPROTOCOL="{{PROTOCOL}}"\n\ngen_result() {\n  result=$1\n  err_info=$2\n  if [ "$result" == "success" ]; then\n    echo "result: success"\n  else\n    echo "result: failed"\n    echo "reason: $err_info"\n  fi\n  exit 0;\n}\n\ncheck_param() {\n  protocol=$1\n  if [ "$protocol" != "all" ] && [ "$protocol" != "tcp" ] && [ "$protocol" != "udp" ]; then\n    gen_result "failed" "PROTOCOL $protocol is not valid."\n  fi\n\n  ports=$2\n  IFS=\',\' read -ra arr <<< "$ports"\n  for port in "${arr[@]}"; do\n    [ -n "${port##*[!0-9]*}" ] || gen_result "failed" "port is not number."\n  done\n}\n\n# check if port blocked for specific protocol.\nis_port_blocked() {\n  port=$1\n  protocol=$2\n  blocked=\'false\'\n  if [ "$protocol" == "all" ]; then\n      if iptables -L -n -v | grep "$port" | head -1 | grep \'tcp\\|udp\' | grep "DROP" >/dev/null; then\n        blocked=\'true\'\n      fi\n  else\n      if iptables -L -n -v | grep "$port" | head -1 | grep "$protocol" | grep "DROP" >/dev/null; then\n        blocked=\'true\'\n      fi\n  fi\n  echo "$port: $blocked"\n}\n\nmain() {\n  check_param $PROTOCOL $PORTS\n\n  echo "result: success"\n  IFS=\',\' read -ra arr <<< "$PORTS"\n  for port in "${arr[@]}"; do\n    is_port_blocked "$port" $PROTOCOL\n  done\n}\n\nmain\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5728iptables\u653e\u5f00\u6307\u5b9a\u534f\u8bae\u548c\u7aef\u53e3",children:"\u5728iptables\u653e\u5f00\u6307\u5b9a\u534f\u8bae\u548c\u7aef\u53e3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# ports to be checked, seperated by comma.\nPORTS="{{PORTS}}"\n# supported protocols, available values: all, tcp, udp.\nPROTOCOL="{{PROTOCOL}}"\n\ngen_result() {\n  result=$1\n  err_info=$2\n  if [ "$result" == "success" ]; then\n    echo "result: success"\n  else\n    echo "result: failed"\n    echo "reason: $err_info"\n  fi\n  exit 0;\n}\n\ncheck_param() {\n  protocol=$1\n  if [ "$protocol" != "all" ] && [ "$protocol" != "tcp" ] && [ "$protocol" != "udp" ]; then\n    gen_result "failed" "PROTOCOL $protocol is not valid."\n  fi\n\n  ports=$2\n  IFS=\',\' read -ra arr <<< "$ports"\n  for port in "${arr[@]}"; do\n    [ -n "${port##*[!0-9]*}" ] || gen_result "failed" "port is not number."\n  done\n}\n\nopen_port() {\n  port=$1\n  protocol=$2\n  protocols=($protocol)\n  if [ "$protocol" == "all" ]; then\n    protocols=("tcp" "udp")\n  fi\n\n  for item in "${protocols[@]}"; do\n    # clear outdated `DROP` and `ACCEPT` rules if exists.\n    iptables -D INPUT -p "$item" --dport "$port" -j DROP >/dev/null 2>&1\n    iptables -D INPUT -p "$item" --dport "$port" -j ACCEPT >/dev/null 2>&1\n    # insert new `ACCEPT` rule.\n    iptables -I INPUT -p "$item" --dport "$port" -j ACCEPT\n  done\n}\n\nmain() {\n  check_param $PROTOCOL $PORTS\n\n  IFS=\',\' read -ra arr <<< "$PORTS"\n  for port in "${arr[@]}"; do\n    open_port "$port" $PROTOCOL || gen_result "failed" "open port failed: $port."\n  done\n}\n\nmain && gen_result "success"\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6dfb\u52a0-ssh",children:"\u6dfb\u52a0 ssh"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n# sshPublicKey null \u5f85\u6dfb\u52a0\u7684ssh\u516c\u94a5\uff0c\u9ed8\u8ba4\u4fdd\u5b58\u5728 ~/.ssh/id_rsa.pub \u3002\n\n\n# ssh public key to be added.\nsshPublicKey="{{sshPublicKey}}"\n\nmkdir -p ~/.ssh && chmod 700 ~/.ssh \ntouch ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys\necho $sshPublicKey >> ~/.ssh/authorized_keys\necho "operation success!"\n\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6279\u91cf\u4e0a\u4f20\u6587\u4ef6",children:"\u6279\u91cf\u4e0a\u4f20\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nset -e\n\nfileName="{{fileName}}"\ncontentType="{{contentType}}"\ntargetDir="{{targetDir}}"\nfileOwner="{{fileOwner}}"\nfileGroup="{{fileGroup}}"\nfileMode="{{fileMode}}"\noverWrite="{{overWrite}}"\n\nmkdir -p $targetDir\n\npath=$targetDir/$fileName\n# skip if overWrite is false and file already exists.\nif [ "$overWrite" = "False" ] && [ -f $path ]; then\n  echo "file already exists and overWrite is set false, skip."\n  exit 0\nfi\n\ntmpFile=$(mktemp)\ncat > "$tmpFile" <<\'EOF\'\n{{fileContent}}\nEOF\n\nif [ "$contentType" = "Base64" ]; then\n  base64 -di "$tmpFile" > $path\n  rm -f "$tmpFile"\nelse\n  mv -f "$tmpFile" "$path"\nfi\n\nchgrp $fileGroup "$path"\nchown $fileOwner "$path"\nchmod $fileMode "$path"\n\necho "upload file success."\n\n\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4fee\u6539\u5bc6\u7801",children:"\u4fee\u6539\u5bc6\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" #!/bin/bash\n\nif [ -z '{{userName}}' ]; then\n    echo 'userName is empty'\n    exit 1\nfi\n\nif [ -z '{{newPassword}}' ]; then\n    echo 'newPassword is empty'\n    exit 2\nfi\n\nif passwd --help | grep \"stdin\" > /dev/null 2>&1; then\n    echo '{{newPassword}}' | passwd '{{userName}}' --stdin\nelse\n    echo '{{userName}}:{{newPassword}}' | chpasswd\nfi\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6279\u91cfkill-\u8fdb\u7a0b",children:"\u6279\u91cfkill \u8fdb\u7a0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ps -ef | grep rtprecv | grep -v grep | awk '{print $2}' | xargs kill -9\n\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ps -ef \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7cfb\u7edf\u6240\u6709\u8fdb\u7a0b\uff0c\u5982\u4e0a\u56fe\u6240\u793a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"grep rtprecv \u8fc7\u6ee4\u51fa\u4e0e\u201crtprecv\u201d\u5b57\u7b26\u76f8\u5173\u7684\u6570\u636e\uff08\u4ee5\u884c\u4e3a\u5355\u4f4d\uff09\u3002"}),"\n",(0,s.jsx)(n.li,{children:"grep -v grep \u7684\u4f5c\u7528\u662f\u9664\u53bb\u672c\u6b21\u64cd\u4f5c\u6240\u9020\u6210\u7684\u5f71\u54cd\uff0c-v \u8868\u793a\u53cd\u5411\u9009\u62e9\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["awk ",(0,s.jsx)(n.code,{children:"{print $2}"})," \u8868\u793a\u7b5b\u9009\u51fa\u6211\u4eec\u6240\u5173\u6ce8\u7684\u8fdb\u7a0b\u53f7\uff0c",(0,s.jsx)(n.code,{children:"$2"})," \u8868\u793a\u6bcf\u884c\u7b2c\u4e8c\u4e2a\u53d8\u91cf\uff0c\u5728\u8fd9*\u4e2a\u4f8b\u5b50\u4e2d\u5c31\u662f\u8fdb\u7a0b\u53f7\u3002\u6240\u4ee5\u5982\u679c\u4f60\u4f7f\u7528ps\u5de5\u5177\u4e0d\u4e00\u6837\uff0c\u6216\u8005ps\u5e26\u7684\u53c2\u6570\u4e0d\u4e00\u6837\uff0c\u90a3\u9700\u8981\u5173\u6ce8\u7684\u5c31\u53ef\u80fd\u4e0d\u662f",(0,s.jsx)(n.code,{children:"$2"}),"\uff0c\u53ef\u80fd\u662f",(0,s.jsx)(n.code,{children:"$1"})," \u3002"]}),"\n",(0,s.jsx)(n.li,{children:"xargs kill -9 \u4e2d\u7684 xargs \u547d\u4ee4\u8868\u793a\u7528\u524d\u9762\u547d\u4ee4\u7684\u8f93\u51fa\u7ed3\u679c\uff08\u4e5f\u5c31\u662f\u4e00\u7cfb\u5217\u7684\u8fdb\u7a0b\u53f7\uff09\u4f5c\u4e3a kill -9 \u547d\u4ee4\u7684\u53c2\u6570\uff0c-9 \u8868\u793a\u5f3a\u5236\u7ec8\u6b62\uff0c\u4e0d\u662f\u5fc5\u987b\u7684\u3002"}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>a});var s=i(67294);const l={},r=s.createContext(l);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);