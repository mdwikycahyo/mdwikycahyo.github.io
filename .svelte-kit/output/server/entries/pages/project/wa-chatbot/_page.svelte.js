import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
const systemDesign = "/_app/immutable/assets/wa-chatbot-system-design.c288c9fe.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="container" class="flex-1 overflow-y-auto my-20" data-svelte-h="svelte-1mk47he"><div class="w-1/4 mb-10 flex items-center justify-center"><a href="/" class="flex items-center justify-center cursor-pointer hover:font-bold"><i class="bi bi-arrow-left text-yellow-500 text-3xl"></i> <div class="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]"></div> <p class="-ml-[25px] mr-2 font-mono">Back to Home</p></a></div> <div id="project-detail" class="mx-36"><p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">Imagine being able to pay your bills without the need for a separate app, saving your phone&#39;s
			storage space. Users can handle the entire process within the familiar environment of
			WhatsApp, a platform everyone uses nowadays.</p> <p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl mt-5">To make this possible, I’ve streamlined the process. I’ve registered a dedicated WhatsApp
			number that acts as our chatbot. All you have to do is send a specific message to this number,
			and our chatbot will respond promptly, guiding you through the payment process step by step.
			The WhatsApp chatbot instantly provides you with the payment details, including the amount due
			and a unique transaction number. No more navigating through complex interfaces or downloading
			multiple apps—everything you need is just a WhatsApp message away.</p> <div class="flex items-center justify-center flex-col my-10"><img${add_attribute("src", systemDesign, 0)} class="w-[680px] border-2 border-black-300 p-10" alt="System Design"> <p class="text-lg font-extralight m-auto">The System Design</p></div> <p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">Behind the scenes, I’ve built the software logic using Node.js. For secure and reliable
			hosting, we&#39;ve deployed our web server on DigitalOcean Droplets, offering a secure HTTPS
			connection for seamless communication with WhatsApp&#39;s Webhook services. To generate
			transaction tickets and facilitate payments, we&#39;ve established a secure connection to our
			client&#39;s RPC (Remote Procedure Call) system through a VPN (Virtual Private Network). With the
			expertise of our client&#39;s networking team, we&#39;ve seamlessly integrated our cloud web server
			with their RPC, enabling quick and secure transactions.</p> <p class="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl mt-5">See the chatbot in operation by viewing the video clip below.</p> <div class="flex items-center justify-center flex-col my-10"><a href="https://youtube.com/shorts/GckBGch0dOs" class="text-lg font-extralight m-auto underline" target="_blank" rel="noopener noreferrer">Watch Chatbot Demo on YouTube</a></div></div></div>`;
});
export {
  Page as default
};
