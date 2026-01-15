---
title: "Misadventures in Linux: Fixing the GNU GRUB Boot Screen"
date: 2026-01-13
toc: true
donate: true
comment: true
heroImage: /images/2026/grubrescue.jpg
ogImage: /images/2026/grubrescue.jpg
category:
    - blogging
    - projects
tags:
    - linux
preview: |-
    Try Out Linux they said, its more stable then Windows they said.
    Well it finally happened one day I could boot into Linux, the next I couldn´t´ only to GRUB mode. Here´s how I fixed it.
description: |-
    Try Out Linux they said, its better then Windows they said.
     It finally happened one day I could boot into Linux, the next I couldn´t. Here´s how I fixed it.
---

Try out Linux they said.... It´s Better and Stable than Windows they said...

Oh boy was this one´s a doozy. I don´t remember if I already mentioned on this site, but months ago I decided to give Linux a try. Seeing as I have an old spare hand-me down Laptop lying around with Windows 7 of all of things, I ended up installing Linux Mint on it.

I´ve using to get a grasp of how it works, learning to use its command line, using its built in cd drive to watch some dvds, and maybe learn to get some games to work with Wine/Lutris (mind you only kinda old games or ones that don´t have very high hardware requirements).

And for a while it worked fine, no complaints whatsoever, then one day I try to boot it like always, and well I was confronted by a black screen.

![a black computer screen on the top its says GNU GRUB version 2.06. On the bottom its says Minimal BASH-like line editing is supported. For the first word, TAB lists possible command completions. Anywhere else TAB lists possible device or file completions. grub>](/images/2026/grubrescue.jpg#center)

Man, I was so lost, just what the heck is this!? GNU, how do I get out of here and boot into my OS?

This ended me do a full on search and maybe waste a whole afternoon trying to make heads or tails of this.

So, what I´ve found is that this was happening because one of the boot files got corrupted, probably after I updated it. I booted Mint from my usb me drive and found that yes, all my files and my installed system is still there and acessible.

The way I see it I had a couple of options: [use the boot repair app](https://linuxvox.com/blog/linux-mint-boot-repair/),  use the command line to reinstall or update the boot file that got corrupted,  figure out the commmands needed to bypass the GNU Grub screen, or as a last resort reinstall linux.

Let´s see how these worked out for me.



## Option 1: Repair Boot 

Oh look the Linux Mint ISO from my USB Pen has a [handy app](https://sourceforge.net/projects/boot-repair/) already preinstalled that allows you to fix your boot problems If things go wrong, how convenient, maybe I´ll get this fixed in mere minutes! What could possibily go wro...

![A text box that says The Current Session is in BIOS compatibility mode. Please disable BIOS Compatibility/CSM/Legacy mode in your UEFI firmware , and use this software from a live-CD or Live-USB that is compatible with UEFI booting mode. For example, use a live USB of Boot-Repair-Disk-64 bit www.sourceforge.net/p/boot-repair-cd, after making sure your BIOS is set up to boot USB in EFI mode. This will enable this feature.](/images/2026/bootrepairfail.jpg)


Damnit.

Yes it demands I go into BIOs and change some of the settings, except that considering how BIOS was set up and seeing that this is a very old PC, I mean I´m pretty sure it was already comatible with UEFI, I guess that´s now impossible.

Ok there´s 3 more to go.

## Option 2: Manual Grub Repair

The ones that requires knowing which commands to use, which to a newbie like myself requires to find a list of the rights ones to use.

It went wrong immediately.

Use the command line to mount your root partition? Either I´m bad at this or it doesnt seem to recognize when its mounted.

Ok so I mount through another way, turns out there´s a disk program you can click and it mounts.

Ok so can get you try get into Chroot system? Nope. can you reinstall Grub to the correct disk? Nope again.

I´m either missing something or soemthing really went wrong with my file system.

## Option 3: Grub Rescue Mode

I´m back to the start and confronting the black grub screen. As I´ve mentioned, my system is still acessible I just have to figure what to type in order to acess it.

I tried [reading up on it](https://phoenixnap.com/kb/grub-rescue) at first but seeing I´m more of a visual learner I got to see good old Chris Titus Tech

<iframe width="560" height="315" src="https://www.youtube.com/embed/r7meKJsjqfY?si=SLqI8fiE_7-JI_rm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


I got the gist of it more or less, which led me to type this:


```
ls
ls (hd0,gpt3)/
set root=(hd0,gpt3)
linux /boot/vmlinuz root=/devsda3
initrd boot/initrd.img
boot
```

ok so  the *ls*  command allows me to my partitions and what´s in them, *set root* allows me to set my root partition, and finally loading the kernel and then disk image.

By the way I had to take note of the names and location of those files which where in the boot folder in my system files, which I did by booting up my usd pen again to see where it was, otherwise I wouldn´t get any results.

And it worked! I booted in Linux! Hooray!

Just one problem, now everytime I opened my laptop here was that darn grub boot screen again.

Remember when I mentioned that maybe one of grub boot files maybe have been corrupted? Well I could try to reinstall grub again but my main system directly, but instead of doing that I used the [Timeshift program.](https://github.com/linuxmint/timeshift)

I was lucky enough to have had set it up to take snapshots automatically specially before it got corrupted, so I clicked restore, waited several minutes while it did its thing, and now everything is back to normal.

No over complicated commands, no having to reinstall linux and having to install all the apps again (including setting up video codecs for the dvds).

I´m sure other might have a better methods for this, but I´m just showing what worked for me.


## Lessons Learned

So, what have we learned kids? First one is obvious, always make sytem backups, put it somewhere safe if you have too. Keep a bootable pen drive on hand.

If its a software issue, it´s probably fixable. Prepare to set aside a day specially if you never dones this before.

And lastly write down what you did just in case the problem ever shows up again.


Anyway thanks for reading about me fumbling my way through Linux as a complete beginner, may ysll get something useful out of this.