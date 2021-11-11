<script>
    export let primary;
    export let quaternary;
</script>

<div class="benefits-container">
    <h2>The <span style="color: {primary}">benefits</span> of orange juice</h2>
    <div class="benefits-card-wrapper">
        <div class="benefits-card" style="--primary: {primary}">
            <h3>Antioxidants</h3>
            <p>Diam donec adipiscing tristique risus nec feugiat in. Erat velit scelerisque in dictum non consectetur a erat.</p>
        </div>
        <div class="benefits-card" style="--primary: {primary}; background-color: {quaternary}">
            <h3 style="color: white">Nutrients</h3>
            <p style="color: white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="benefits-card" style="--primary: {primary}">
            <h3>Heart Health</h3>
            <p>Blandit turpis cursus in hac habitasse. Fringilla ut morbi tincidunt augue interdum velit euismod in. Dolor sit amet consectetur.</p>
        </div>
    </div>
</div>

<style lang="scss">
    .benefits {
        &-container {
            font-family: "Poppins", sans-serif;
            & h2 {
                font-weight: 500;
                font-size: 2.2rem;
                text-align: center;
                letter-spacing: .02em;

                & span {
                    font-weight: 600
                }
            }
        }

        &-card {
            width: 240px;
            background-color: #ECEAE8;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 4rem 3rem;
            border-top: 4px solid var(--primary);

            & * {
                text-align: center;
                color: #3D3D3D;
            }

            & h3 {
                font-size: 1.8rem;
                margin-bottom: 2rem;
                letter-spacing: .02em;
            }

            & p {
                letter-spacing: .02em;
                line-height: 140%
            }

            &-wrapper {
                display: flex;
                gap: 1.6rem;
                justify-content: center;
                margin-top: 3rem;
            }
        }
    }
</style>