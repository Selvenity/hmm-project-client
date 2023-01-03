<script>
    import { mapTemplate, mapArray, hoveredTile } from "./lib/stores.js";
</script>

<div class="container-{$mapTemplate}" on:mouseleave={() => { hoveredTile.set(null) }}>
    {#each $mapArray as tile}
        <div class:tile-nouser="{tile.owner === "NOUSER"}" class:tile-blue="{tile.owner === "USER"}" on:mouseenter={() => { hoveredTile.set(tile.idx) }}>
            {#if tile.troops > 0}
                <div class="troopcount"><p>{tile.troops}</p></div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .container-9x9 {
        /* currently unused */
        display: grid;
        grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10%;
        grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10%;
        width: 500px;
        height: 500px;
    }

    .container-19x19 {
        display: grid;
        /*
        grid-template-columns: 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px;
        grid-template-rows: 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px 25px;
        width: 475px;
        height: 475px;
        */
        grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
        grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
        width: 950px;
        height: 950px;
        column-gap: 2px;
        row-gap: 2px;
    }

    .container-13x13 {
        display: grid;
        grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
        grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px;
        width: 650px;
        height: 650px;
        column-gap: 2px;
        row-gap: 2px;
    }

    .tile-nouser {
        background-color: #00a400;
    }

    .tile-nouser:hover {
        background-color: aqua;
    }

    .tile-nouser:active {
        background-color: orange;
    }

    .tile-blue {
        background-color: #0008ff;
    }

    .tile-blue:hover {
        background-color: aqua;
    }

    .tile-blue:active {
        background-color: orange;
    }

    .troopcount {
        display: flex;
        justify-content: center;
    }

    .troopcount p {
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        background-color: black;
    }
</style>