export const createOrder_dialog = `
    <nav id="create-order_dialog" class="n-dialog n-dialog-dark n-d-multistep">
        <form id="create-order-step-1_form">
            <header>
                <button class="btn btn-xs-inline btn-xs-block" type="button" data-close-dialog_btn="create-order_dialog">
                    <picture>
                        <img src="/img/icon/close-light.svg" width="20" height="20">
                    </picture>
                </button>
                <div class="h-heading">
                    <h3>Registrar orden</h3>
                    <p>Empieza por escoger a quien atenderás hoy.</p>
                </div>
            </header>
            <main>
                <div class="card-3">
                    <picture>
                        <img src="/img/illustration/user-search.svg" width="158">
                    </picture>
                </div>
            </main>
            <footer>
                <button class="btn btn-primary btn-submit" type="button" data-search-customer>Seleccionar cliente ya registrado</button>
                <p>
                    ó registrar a un 
                    <button class="btn btn-underline btn-secondary-color btn-bold btn-xs-inline" type="button" data-create-customer>nuevo cliente</button>
                </p>
            </footer>
        </form>

        <form id="create-order-select-customer-step-2_form">
            <header>
                <button class="btn btn-xs-inline btn-xs-block" type="button" data-current-step="create-order-select-customer-step-2_form" data-previous-step_btn="create-order-step-1_form">
                    <picture>
                        <img src="/img/icon/arrow-left-light.svg" width="20" height="20">
                    </picture>
                </button>
                <div class="h-heading">
                    <h3>Seleccionar cliente ya registrado</h3>
                    <p>Busca y agrega un cliente para tu orden.</p>
                </div>
            </header>
            <main class="m-hug">
                <fieldset class="fs-list">
                    <fieldset class="fs-icon">
                        <picture>
                            <img src="/img/icon/search.svg" width="16" height="16">
                        </picture>
                        <input type="text" placeholder="Buscar clientes">
                    </fieldset>
                    <div class="card-10-group">
                        <h3>Recientes</h3>
                        <div class="card-11-group">
                            <input type="radio" name="order-customer" value="client-id-1" id="client-id-1">
                            <label for="client-id-1" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                            <input type="radio" name="order-customer" value="client-id-2" id="client-id-2">
                            <label for="client-id-2" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                            <input type="radio" name="order-customer" value="client-id-4" id="client-id-4">
                            <label for="client-id-4" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                            <input type="radio" name="order-customer" value="client-id-5" id="client-id-5">
                            <label for="client-id-5" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                            <input type="radio" name="order-customer" value="client-id-6" id="client-id-6">
                            <label for="client-id-6" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                            <input type="radio" name="order-customer" value="client-id-7" id="client-id-7">
                            <label for="client-id-7" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                            <input type="radio" name="order-customer" value="client-id-8" id="client-id-8">
                            <label for="client-id-8" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                            <input type="radio" name="order-customer" value="client-id-9" id="client-id-9">
                            <label for="client-id-9" class="btn btn-check">
                                <span>
                                    Nombre de cliente
                                    <br>
                                    <small>Documento de cliente</small>
                                </span>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </main>
            <footer>
                <button class="btn btn-primary btn-submit" type="submit">Continuar</button>
            </footer>
        </form>

        <form id="create-order-device-detail-step-3_form">
            <header>
                <button type="button" class="btn btn-xs-inline btn-xs-block" data-current-step="create-order-device-detail-step-3_form" data-previous-step_btn="create-order-select-customer-step-2_form">
                    <picture>
                        <img src="/img/icon/arrow-left-light.svg" width="20" height="20">
                    </picture>
                </button>
                <div class="h-heading">
                    <h3>Detalles del equipo</h3>
                    <p>Indícanos el detalle del equipo.</p>
                </div>
            </header>
            <main>
                <fieldset>
                    <label for="device-id">IMEI <small>(presiona *#06#*)</small></label>
                    <input id="device-id" type="text" placeholder="Ingresa el IMEI del equipo">
                </fieldset>
                <fieldset>
                    <label for="device-brand">Marca</label>
                    <input id="device-brand" list="device-brand-list" placeholder="Selecciona una marca">
                    <datalist id="device-brand-list">
                        <option value="Apple"></option>
                        <option value="Samsung"></option>
                        <option value="Huawei"></option>
                        <option value="LG"></option>
                    </datalist>
                </fieldset>
                <fieldset>
                    <label for="device-model">Modelo</label>
                    <input id="device-model" list="device-model-list" placeholder="Selecciona una marca">
                    <datalist id="device-model-list">
                        <option value="Modelo 1"></option>
                        <option value="Modelo 2"></option>
                        <option value="Modelo 3"></option>
                        <option value="Modelo 4"></option>
                    </datalist>
                </fieldset>
                <fieldset>
                    <label for="device-password">Contraseña</label>
                    <input id="device-password" type="text" placeholder="Ingresa la contraseña del equipo">
                </fieldset>
                <fieldset>
                    <legend>Estado</legend>
                    <input type="checkbox" class="inp-radio" name="device-status_ison" value="is-on" id="device-status_ison">
                    <label for="device-status_ison" class="btn btn-f-width">El equipo sí enciende</label>

                    <input type="checkbox" class="inp-radio" name="device-status_isdamaged" value="is-damaged" id="device-status_isdamaged">
                    <label for="device-status_isdamaged" class="btn btn-f-width">El equipo posee golpes</label>

                    <input type="checkbox" class="inp-radio" name="device-status_isbatteryok" value="is-battery-ok"
                        id="device-status_isbatteryok">
                    <label for="device-status_isbatteryok" class="btn btn-f-width">La batería del equipo sí
                        funciona</label>

                    <input type="checkbox" class="inp-radio" name="device-status_issimok" value="is-sim-ok" id="device-status_issimok">
                    <label for="device-status_issimok" class="btn btn-f-width">El SIM del equipo sí funciona</label>
                </fieldset>
            </main>
            <footer>
                <button class="btn btn-primary btn-submit" type="submit">Continuar</button>
            </footer>
        </form>

        <form id="create-order-device-failure-step-4_form">
            <header>
                <button type="button" class="btn btn-xs-inline btn-xs-block" data-current-step="create-order-device-failure-step-4_form" data-previous-step_btn="create-order-device-detail-step-3_form">
                    <picture>
                        <img src="/img/icon/arrow-left-light.svg" width="20" height="20">
                    </picture>
                </button>
                <div class="h-heading">
                    <h3>Falla del equipo</h3>
                    <p>Indícanos que es lo que está fallando en el equipo.</p>
                </div>
            </header>
            <main>
                <fieldset>
                    <label for="device-failure">Falla</label>
                    <textarea id="device-failure" placeholder="Indícanos la falla presente en el equipo"></textarea>
                </fieldset>
                <fieldset>
                    <label for="device-failure-obs">Observaciones</label>
                    <textarea id="device-failure-obs" placeholder="Indícanos si hay existen observaciones adicionales"></textarea>
                </fieldset>
                <fieldset>
                    <label for="service-guarantee">Días de garantía</label>
                    <input id="service-guarantee" type="text" placeholder="Índícano los días de garantía del servicio">
                </fieldset>
                <fieldset class="fs-sm">
                    <label for="service-budget">Presupuesto</label>
                    <input id="service-budget" type="number" placeholder="0.00">
                </fieldset>
                <fieldset class="fs-sm">
                    <label for="service-advance">Anticipo</label>
                    <input id="service-advance" type="number" placeholder="0.00">
                </fieldset>
                <fieldset>
                    <label for="service-total">Total</label>
                    <input id="service-total" type="number" placeholder="0.00" disabled>
                </fieldset>
            </main>
            <footer>
                <button class="btn btn-primary btn-submit" type="submit">Continuar</button>
            </footer>
        </form>

        <form id="create-order-confirmation-step-5_form">
            <main>
                <div class="card-3">
                    <picture>
                        <img src="/img/illustration/user-confirmation.svg" width="158">
                    </picture>
                    <div class="h-heading">
                        <h3>Orden de servicio registrada<br>con éxito.</h3>
                    </div>
                </div>
            </main>
            <footer>
                <button class="btn btn-primary btn-submit" type="submit">Listo</button>
            </footer>
        </form>
    </nav>
`