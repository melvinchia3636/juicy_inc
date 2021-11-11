<script>
    export let primary;

    const navItem = [
        "home",
        "juices",
        "blog",
        "about"
    ]
</script>

<nav style="color: {primary}">
    <h1 class="brand">Juicy Inc.</h1>

    <div class="nav-item-wrapper">
        {#each navItem as item, i}
            <a class={"nav-item " + (i == 1 && "active")} href="#{item}">{item}</a>
        {/each}
    </div>
</nav>

<style lang="scss">
    nav {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items:center;
        width: calc(100% - 4rem);
        font-family: "Poppins", sans-serif;
        padding: 1.6rem 2rem;

        & .brand {
            font-size: 1.9rem;
            font-weight: 600;
        }

        & .nav-item {
            color: inherit;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.1rem;
            letter-spacing: 0.05em;
            position: relative;

            &-wrapper {
                display: flex;
                gap: 4rem;
            }

            &.active::before {
                content: "";
                position: absolute;
                bottom: -.4em;
                left: 50%;
                transform: translateX(-50%);
                width: .3rem;
                height: .3rem;
                background-color: currentColor;
                border-radius: .6rem;
            }
        }
    }
</style>