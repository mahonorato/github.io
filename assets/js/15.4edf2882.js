(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{253:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("h2",{attrs:{id:"handling-docker-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-docker-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Handling Docker Containers")]),e._v(" "),a("h3",{attrs:{id:"downloading-the-first-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-the-first-docker-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Downloading the first Docker image")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker pullbusybox")])]),e._v(" "),a("p",[e._v("Once the images have been downloaded, they can be verified by using the docker images subcommand, as shown here:")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker images")])]),e._v(" "),a("h2",{attrs:{id:"running-the-first-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-first-docker-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Running the first Docker container")]),e._v(" "),a("p",[a("code",[e._v('$sudo docker runbusyboxecho "Hello World!"')])]),e._v(" "),a("p",[e._v("$ sudo docker run --hostnamemarcos_host  --namemarcos_vm")]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("Most of the time, you will not encounter any issues when installing Docker. However, unplanned failures might occur. Therefore, it is necessary to discuss prominent troubleshooting techniques and tips. Let's begin by discussing the troubleshooting knowhow in this section. The first tip is that the running status of Docker should be checked by using the following command:")]),e._v(" "),a("p",[a("code",[e._v("$sudoservice docker status")])]),e._v(" "),a("h2",{attrs:{id:"a-docker-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-docker-layer","aria-hidden":"true"}},[e._v("#")]),e._v(" A Docker layer")]),e._v(" "),a("p",[e._v("A Docker layer could represent either read-only images or read-write images. However, the top layer of a container stack is always the read-write (writable) layer, which hosts a Docker container.")]),e._v(" "),a("h2",{attrs:{id:"a-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-docker-container","aria-hidden":"true"}},[e._v("#")]),e._v(" A Docker container")]),e._v(" "),a("p",[e._v("From the preceding diagram, it is clear that the read-write layer is the container layer. There could be several read-only images beneath the container layer. Typically, a container originates from a read-only image through the act of a commit . When you start a container, you actually refer to an image through its unique ID . Docker pulls the required image and its parent image. It continues to pull all the parent images until it reaches the base image.")]),e._v(" "),a("h2",{attrs:{id:"docker-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Registry")]),e._v(" "),a("p",[e._v("A Docker Registry is a place where the Docker images can be stored in order to be publicly found, accessed, and used by the worldwide developers for quickly crafting fresh and composite applications without any risks. Because all the stored images would have gone through multiple validations, verifications, and refinements, the quality of those images will be really high. Using the Docker push command, you can dispatch your Docker image to the Registry so that it is registered and deposited.\nAs a clarification, the registry is for registering the Docker images, whereas the repository is for storing those registered Docker images in a publicly discoverable and centralized place. A Docker image is stored within a Repository in the Docker Registry. Each Repository is unique for each user or account.")]),e._v(" "),a("h2",{attrs:{id:"docker-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Repository")]),e._v(" "),a("p",[e._v("A Docker Repository is a namespace that is used for storing a Docker image. For instance, if your app is namedhelloworldand your username or namespace for the Registry isthedockerbookthen, in the Docker Repository, where this image would be stored in the Docker Registry would be namedthedockerbook/helloworld.\nThe base images are stored in the Docker Repository. The base images are the fountainheads for realizing the bigger and better images with the help of a careful addition of new modules. The child images are the ones that have their own parent images. The base image does not have any parent image. The images sitting on a base image are named as parent images because the parent images bear the child images.")]),e._v(" "),a("h2",{attrs:{id:"searching-docker-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searching-docker-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Searching Docker images")]),e._v(" "),a("p",[e._v("The Docker Hub repository typically hosts both the official images as well as the images that have been contributed by the third-party Docker enthusiasts. You can search for the Docker images in the Docker Hub Registry by using the docker search subcommand, as shown in this example:")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker searchmysql")])]),e._v(" "),a("h2",{attrs:{id:"working-with-an-interactive-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-an-interactive-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with an interactive container")]),e._v(" "),a("p",[e._v("The docker run subcommand takes an image as an input and launches it as a container. You have to pass the-t and -iflagsto the docker run subcommand in order to make the container interactive. The -iflag is the key driver, which makes the container interactive by grabbing the standard input ( STDIN ) of the container. The -t flag allocates a pseudo-TTY or a pseudo terminal (terminal emulator) and then assigns that to the container.\nIn the following example, we are going to launch an interactive container by using the ubuntu:14.04 image and /bin/bash as the command:")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker run -i-t ubuntu:14.04 /bin/bash")])]),e._v(" "),a("p",[a("code",[e._v("$sudo docker run --hostnamemarcos_host--namemarcos_vm-i-t ubuntu:14.04 /bin/bash")])]),e._v(" "),a("h2",{attrs:{id:"attach-anddettach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attach-anddettach","aria-hidden":"true"}},[e._v("#")]),e._v(" Attach andDettach")]),e._v(" "),a("p",[e._v("Now, let's use one of the niche features of Docker for detaching it from the interactive container and then look at the details that Docker manages for this container. Yes, we can detach it from our container by using the Ctrl + P and Ctrl + Qescape sequence. This escape sequence will detach the TTY from the container and land us in the Docker host prompt $ , however the container will continue to run.")]),e._v(" "),a("h2",{attrs:{id:"pssubcommander"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pssubcommander","aria-hidden":"true"}},[e._v("#")]),e._v(" PSsubcommander")]),e._v(" "),a("p",[e._v("The dockerpssubcommand will list all the running containers and their important properties, as shown here:")]),e._v(" "),a("p",[a("code",[e._v("$sudo dockerps")])]),e._v(" "),a("h2",{attrs:{id:"tracking-changes-inside-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tracking-changes-inside-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Tracking changes inside containers")]),e._v(" "),a("p",[e._v("The Docker engine elegantly manages its filesystem and it allows us to inspect a container filesystem by using the docker diff subcommand. In order to inspect the container filesystem, we can either detach it from the container or use another terminal of our Docker host and then issue the docker diffsubcommand.")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker diff d5ad60f174d3")])]),e._v(" "),a("p",[e._v("In the given example, the docker diff subcommand will generate four lines, shown here:\nC /home\nA /home/abc\nA /home/cde\nA /home/fgh")]),e._v(" "),a("p",[e._v("The preceding output indicates that the /home directory has been modified, which has been denoted by C, and the /home/abc, /home/cdeand the /home/fghfiles have been added, and these are denoted by A . In addition, D denotes deletion. Since we have not deleted any files, it is not in our sample output.")]),e._v(" "),a("h2",{attrs:{id:"controlling-docker-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controlling-docker-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Controlling Docker containers")]),e._v(" "),a("p",[e._v("Now, let's launch our container and experiment with the docker stop subcommand, as shown here:")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker run -i-t ubuntu:14.04 /bin/bash")])]),e._v(" "),a("p",[e._v("root@da1c0f7daa2a:/#  "),a("a",{attrs:{href:"mailto:root@da1c0f7daa2a"}},[e._v("mailto:root@da1c0f7daa2a")]),e._v("\nHaving launched the container, let's run the docker stop subcommand on this container by using the container ID that was taken from the prompt.\nLet's start the previously stopped container by using the docker start subcommand, as follows:")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker start da1c0f7daa2a")])]),e._v(" "),a("p",[e._v("The restartcommand is a combination of the stop and the start functionality.\nIn other words, the restart command will stop a running container by following the precise steps followed by the docker stop subcommand and then it will initiate the start process. This functionality will be executed by default through the docker restart subcommand.\nThe next important set of container-controlling subcommands are docker pauseand dockerunpause. The docker pause subcommands will essentially freeze the execution of all the processes within that container. Conversely, the dockerunpausesubcommand will unfreeze the execution of all the processes within that container and resume the execution from the point where it was frozen.")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker run -i-t ubuntu:14.04 /bin/bash")])]),e._v(" "),a("p",[a("code",[e._v("$sudo docker pause c439077aa80a")])]),e._v(" "),a("p",[a("code",[e._v("$sudo dockerunpausec439077aa80a")])]),e._v(" "),a("h2",{attrs:{id:"housekeeping-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#housekeeping-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Housekeeping containers")]),e._v(" "),a("p",[e._v("In many of the previous examples, when we issued dockerps-awe saw the many stopped containers. These containers could continue to stay in the stopped status for ages, if we chose not to intervene. At the outset, it may look like a glitch, but in reality, we can perform operations, such as committing an image from a container, restarting the stopped container, and so on. However, not all the stopped containers will be reused, and each of these unused containers will take up the disk space in the filesystem of the Docker host. The Docker engine provides a couple of ways to alleviate this issue. Let's start exploring them.")]),e._v(" "),a("p",[e._v("Two docker subcommands, that is, dockerrmand dockerps, could be combined to automatically delete all the containers that are not currently running, as shown in the following command:")]),e._v(" "),a("p",[a("code",[e._v("$sudo dockerrm$(sudodockerps-aq)")])]),e._v(" "),a("p",[e._v("In the preceding command, the command inside the back quotes will produce a list of the full container IDs of every container, running or otherwise, which will become the argument for the dockerrmsubcommand. Unless forced with the -f option to do otherwise, the dockerrmsubcommand will only remove the container that is not in the running state.")]),e._v(" "),a("h2",{attrs:{id:"building-images-from-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-images-from-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" Building images from containers")]),e._v(" "),a("p",[e._v("Let's take ubuntu:14.04 as our base image, install thewgetapplication, and then convert the running container to an image by performing the following steps:")]),e._v(" "),a("ol",[a("li",[a("pre",[a("code",[e._v("Launch an ubuntu:14.04 container by using the docker run subcommand, shown here: \n")])])])]),e._v(" "),a("p",[a("code",[e._v("$sudo docker run -i-t ubuntu:14.04 /bin/bash")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("pre",[a("code",[e._v("Having launched the container, let's quickly verify ifwgetis available for our image or not. We have used the which command withwgetas an argument for this purpose and, in our case, it returns empty, which essentially means that it could not find anywgetinstallation in this container. This command is run as follows: \n")])])])]),e._v(" "),a("p",[e._v("root@472c96295678:/# whichwget  "),a("a",{attrs:{href:"mailto:root@472c96295678"}},[e._v("mailto:root@472c96295678")]),e._v("\nroot@472c96295678:/#  "),a("a",{attrs:{href:"mailto:root@472c96295678"}},[e._v("mailto:root@472c96295678")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("pre",[a("code",[e._v("Now let's move on to the next step which involves thewgetinstallation. Since it is a brand new ubuntu container, before installingwget, we must synchronize with the ubuntu package repository, as shown here: \n")])])])]),e._v(" "),a("p",[e._v("root@472c96295678:/# apt-get update  "),a("a",{attrs:{href:"mailto:root@472c96295678"}},[e._v("mailto:root@472c96295678")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("pre",[a("code",[e._v("Once the ubuntu package repository synchronization is over, we can proceed toward installingwget, as shown here: \n")])])])]),e._v(" "),a("p",[e._v("root@472c96295678:/# apt-get install -ywget  "),a("a",{attrs:{href:"mailto:root@472c96295678"}},[e._v("mailto:root@472c96295678")])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("pre",[a("code",[e._v("Having completed thewgetinstallation, let's confirm our installation ofwget \n")])])])]),e._v(" "),a("p",[e._v("by invoking the which command withwgetas an argument, as shown here:\nroot@472c96295678:/#whichwget  "),a("a",{attrs:{href:"mailto:root@472c96295678"}},[e._v("mailto:root@472c96295678")]),e._v("\n/usr/bin/wget\nroot@472c96295678:/#  "),a("a",{attrs:{href:"mailto:root@472c96295678"}},[e._v("mailto:root@472c96295678")])]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("pre",[a("code",[e._v("Installation of any software would alter the base image composition, which we can also trace by using the docker diff subcommand introduced in Tracking changes inside containers section of this chapter. From a second terminal or screen, we can issue the docker diff subcommand, as follows: \n")])])])]),e._v(" "),a("p",[a("code",[e._v("$sudo docker diff 472c96295678")])]),e._v(" "),a("p",[e._v("The preceding command would show a few hundred lines of modification to the ubuntu image. This modification includes the update on package repository,wgetbinary, and the support files forwget.")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("pre",[a("code",[e._v("Finally, let's move to the most important step of committing the image. The Docker commit subcommand can be performed on a running or a stopped container. When commit is performed on a running container, the Docker engine will pause the container during the commit operation in order to avoid any data inconsistency. We strongly recommend performing the commit operation on a stopped container. We can commit a container to an image by the docker commit subcommand, as shown here: \n")])])])]),e._v(" "),a("p",[a("code",[e._v("$sudo docker commit 472c96295678 \\learningdocker/ubuntu_wget")])]),e._v(" "),a("p",[e._v("A530f0a0238654fa741813fac39bba2cc14457aee079a7ae1fe1c64dc7e1ac25\nWe have committed our image by using the namelearningdocker/ubuntu_wget. Step by step, we saw how to create an image from a container. Now, let's quickly list the images of our Docker host and see if this newly created image is a part of the image list by using the following command:")]),e._v(" "),a("p",[a("code",[e._v("$sudo docker images")])]),e._v(" "),a("p",[e._v("REPOSITORY                                       TAG             IMAGE  ID              CREATED                      VIRTUAL SIZE\nlearningdocker/ubuntu_wget   latest   a530f0a02386    48 seconds ago                221.3 MB")])])},[],!1,null,null,null);t.default=n.exports}}]);