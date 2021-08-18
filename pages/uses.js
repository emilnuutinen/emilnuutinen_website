import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>Uses</title>
      </Head>
      <main>
        <h1>Uses</h1>
        <p>I get often asked what software or hardware I use. So I decided to make a separate page listing everything I use daily.</p>

        <p>I study and work almost 100% from home and I like to separate my freetime and work/study time by using different machines.</p>

        <p>For personal use I have a desktop computer with Arch Linux for daily use and Windows 10 for gaming. I love the minimalist nature of Arch. You get a bare installation and you need to install everything else yourself. For a tinkerer and experimentalist like myself this is a perfect distro. This computer does not have anything work/study related on it. I'm maybe ditching Windows in the future if gaming on Arch gets easier.</p>

        <p>For work and study I use a M1 Macbook Pro. I really love this machine for productivity usage. I'm a Linux user by heart, but from the pure productivity standpoint this little M1 Macbook is perfect for me. Everything just works out of the box. I have used Arch for work too, but I feel that with MacOS you get a much better software support. I often need Adobe products or Microsoft Office etc. Most of these tools are available as web apps, but I'm kind of oldschool and want to install everything on my machine to be able to use the tools offline too.</p>

        <p>There is also one particular app that I have not been able to replicate in Linux. That is <a href='https://flexibits.com/fantastical'>Fantastical</a>. It just has the best support for all the different accounts. I have my iCloud, Microsoft Exchange and two Google accounts connected to it and I can see all my activities (including reminders) in one place.</p>

        <h2>Desktop Setup (daily driver)</h2>
        <ul>
          <li>Fractal Design Case, Intel i5-6500 @ 3.600GHz, 32 GB DDR4, NVIDIA GeForce GTX 1060 3 GB, Kingston 480 GB & 120 GB SSD, Kingston 1 TB HDD</li>
          <li>Dual boot Arch Linux and Windows 10 <sup>1</sup></li>
          <li>LG 38WK95C-C Ultra-Wide</li>
          <li>Corsair K65 LUX RGB Tenkeyless</li>
          <li>Logitech MX Master 2S</li>
          <li>Blue Yeti Blackout microphone</li>
          <li>Sony a6000 with Sigma 30mm f/1.4 (web cam)</li>
        </ul>

        <h3>Software (Arch)</h3>
        <ul>
          <li>i3-gaps is my VM of choice. Picom as a compositor. Rofi as a launcher. Dunst for notifications.</li>
          <li>Most of my development is done with <a href='https://code.visualstudio.com/'>Visual Studio Code</a>. I have my own <a href='https://github.com/emilnuutinen/fresh-dark'>theme</a> for it.</li>
          <li>Vim for quick edits.</li>
          <li>I also write down my thoughts in markdown using Vim. I made <a href='https://github.com/emilnuutinen/dotfiles_mac/tree/master/.scripts'>scripts</a> to automate my todos, daily journals and weekly reflections.</li>
          <li>Terminal client is Kitty with <a href='https://ohmyz.sh/'>Oh My ZSH</a> & <a href='https://github.com/denysdovhan/spaceship-prompt'>Spaceship prompt</a>.</li>
          <li>I use <a href='https://www.ibm.com/plex/'>IBM Plex</a> fonts everywhere, including this website.</li>
          <li>Element, Discord & Weechat for personal communication.</li>
          <li>Firefox for browsing the internet.(Add-ons: Bitwarden, uBlock Origin & Facebook Container)</li>
          <li>Messy dotfiles can be found <a href='https://github.com/emilnuutinen/dotfiles'>here</a>.</li>
        </ul>

        <h2>Macbook Setup (work & school)</h2>
        <ul>
          <li>M1 Macbook Pro 13" with 16 GB RAM & 512 GB SSD</li>
          <li>LG 38WK95C-C Ultra-Wide</li>
          <li>Apple Magic Keyboard & Trackpad 2</li>
        </ul>

        <h3>Software (macOS)</h3>
        <ul>
          <li>Development environment is the same as with Arch. (VSCode, Vim & Kitty)</li>
          <li>Firefox for browsing the internet. (Safari & Chrome for testing)</li>
          <li>Fantastical to manage all the different calendars.</li>
          <li>Apple Mail app for all the email accounts.</li>
          <li>Slack & Microsoft Teams for professional communication.</li>
          <li>Element & Discord for personal communication.</li>
          <li>Mendeley to organize research papers.</li>
        </ul>

        <h2>Others</h2>
        <ul>
          <li>Iphone Xs</li>
          <li>Bose QC35 II</li>
        </ul>

        <small><sup>1</sup> My main distro is Arch Linux, but I use Windows for occasional gaming.</small>
      </main>
    </>
  )
}
