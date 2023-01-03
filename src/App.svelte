<script>
    import Map from "./Map.svelte";
    import { tools } from "./lib/utils.js";
    import { screen, mapArray, mapTemplate, hoveredTile } from "./lib/stores.js";

    window.tools = new tools();

    let ws = new WebSocket("ws://localhost:7777")
    ws.onopen = () => {
        ws.send(JSON.stringify({
            cmd: "GET-TILEMAP"
        }));
    }
    ws.onmessage = (wsdata) => {
        let cmd = JSON.parse(wsdata.data);
        console.log(`%cwebsocket%c< INCOMING%c packet: ${JSON.stringify(cmd)}`, "color: white; background-color: #6a57c9; padding: 2px;", "background-color: black; padding: 3px;", "color: gray; font-style: italic;");
        switch (cmd.cmd) {
            case "TILEMAP-DUMP":
                mapTemplate.set(cmd.payload.tilemap_template);
                mapArray.set(cmd.payload.tilemap);
                break;
            
            default:
                console.log(`Unknown CMD in packet: ${JSON.stringify(cmd)}`);
        }
    }
</script>
{#if $screen === "start"}
    <!-- can't be bothered making a new .svelte file for this lol -->
    <h1>[game name goes here]</h1>
    <button on:click={() => { screen.set("map") }}>continue</button>
{:else if $screen === "map"}
    <p>Hovered tile: {$hoveredTile}</p>
    <Map />
{:else}
    <p>woah, you found a nonexistant page<br><a href="bruh" on:click|preventDefault={() => { screen.set("start") }}>Back to safety</a></p>
{/if}