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

        <h2>Main Setup (work & personal use)</h2>
        <ul>
          <li>M1 Macbook Pro 13" with 16 GB RAM & 512 GB SSD</li>
          <li>LG 38WK95C-C Ultra-Wide</li>
          <li>Apple Magic Keyboard & Trackpad 2</li>
          <li>Blue Yeti Blackout microphone</li>
          <li>Sony a6000 with Sigma 30mm f/1.4 (web cam)</li>
        </ul>

        <h3>Software (macOS)</h3>
        <ul>
          <li>Rectangle for window management.</li>
          <li>Most of my development is done with <a href='https://code.visualstudio.com/'>Visual Studio Code</a>. I have my own <a href='https://github.com/emilnuutinen/fresh-dark'>theme</a> for it.</li>
          <li>Vim for quick edits.</li>
          <li>I also write down my thoughts in markdown using Vim. I made <a href='https://github.com/emilnuutinen/dotfiles_mac/tree/master/.scripts'>scripts</a> to automate my daily journals and weekly reflections.</li>
          <li>Terminal client is Kitty with <a href='https://ohmyz.sh/'>Oh My ZSH</a> & <a href='https://github.com/denysdovhan/spaceship-prompt'>Spaceship prompt</a>.</li>
          <li>My favorite fonts are <a href='https://www.ibm.com/plex/'>IBM Plex Mono</a> and <a href='https://www.jetbrains.com/lp/mono/'>JetBrains Mono</a>.</li>
          <li>Slack & Microsoft Teams for professional communication.</li>
          <li>Telegram & Discord for personal communication.</li>
          <li>Firefox for browsing the internet. (Safari & Chrome for testing)</li>
          <li><a href='https://justgetflux.com/'>f.lux</a> to save me from headaches during the nights.</li>
          <li>Mendeley to organize research papers.</li>
        </ul>

        <h2>Desktop Setup (for dev only)</h2>
        <ul>
          <li>Fractal Design Case, Intel i5-6500 @ 3.600GHz, 32 GB DDR4, NVIDIA GeForce GTX 1060 3 GB, Kingston 480 GB & 120 GB SSD, Kingston 1 TB HDD</li>
          <li>Dual boot Arch Linux and Windows 10 <sup>1</sup></li>
          <li>LG 38WK95C-C Ultra-Wide</li>
          <li>Corsair K65 LUX RGB Tenkeyless</li>
          <li>Logitech MX Master 2S</li>
        </ul>

        <h3>Software (Arch)</h3>
        <ul>
          <li>i3-gaps for window management.</li>
          <li>Development environment is the same as with macOS. (VSCode & Vim)</li>
          <li>I'm currently testing qutebrowser for a more minimalistic browsing experience. I don't use mouse that much on Arch anyway.</li>
          <li>Terminal client is Kitty with <a href='https://ohmyz.sh/'>Oh My ZSH</a> & <a href='https://github.com/denysdovhan/spaceship-prompt'>Spaceship prompt</a>.</li>
          <li>Messy dotfiles can be found <a href='https://github.com/emilnuutinen/dotfiles'>here</a>.</li>
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
