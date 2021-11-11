<script>

    export let primary;
    export let secondary;
    export let tertiary;

    const sideNavItem = [
        "benefits",
        "recipes",
        "pricing"
    ]
</script>

<div class="hero" style="background-color: {secondary}">
    <div class="side-nav-wrapper" style="color: {primary}">
        {#each sideNavItem as item}
            <a class="side-nav" href="#{item}">{item}</a>
        {/each}
    </div>
    <div class="center-content">
        <img src="./assets/orange.png" alt="lemon"/>
        <h1 class="name-small" style="color: {primary}">Sweet Orange</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <h1 class="name-big" style="color: {tertiary}">orange juice</h1>
</div>

<style lang="scss">

    .hero {
        width: calc(100% - 4rem);
        height: 100vh;
        border-bottom-left-radius: 18rem;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Poppins", sans-serif;
        position: relative;

        & .side-nav {
            color: inherit;
            font-size: 1.2rem;
            letter-spacing: .02em;

            &-wrapper {
                display: flex;
                padding-bottom: 8rem;
                gap: 4rem;
                text-orientation: mixed;
                writing-mode: sideways-lr;
            }
        }

        & .name {
            &-big {
                text-orientation: mixed;
                writing-mode: sideways-lr;
                font-size: 7.6rem;
                font-weight: 600;
            }

            &-small {
                font-size: 2.6rem;
                letter-spacing: .02em;
                font-weight: 600;
            }
        }

        & .center-content {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: translate(-50%, -50%);

            & p {
                font-size: 1.1rem;
                margin-top: .4rem;
                color: #535353;
                text-align: center;
                line-height: 140%;
                font-weight: 400;
                letter-spacing: .02em;
                padding-bottom: 2rem;;
            }
        }
    }
</style>