<!DOCTYPE html>
<title>Moshi Classic - Sign In</title>
<?php include('../assets/core/requirements.html') ?>

<body>
    <?php include('../assets/core/nav1.html') ?>
    <div id="main-copy">

        <div class="inner">
            <h2>Sign In</h2>

            <div class="col" id="col-spacer">

                <h4>Enter your login details below</h4>

                <form id="login" name="login" onsubmit="return true;" action="/web/20110615140159/http://www.moshimonsters.com/login/retry" method="post">
                    <input type="hidden" name="target" value>
                    <dl>
                        <dt>
										<label for="login_username">Owner Name</label>
									</dt>
                        <dd>
                            <input class="line-input" name="username" value id="login_username" type="text">

                        </dd>
                        <dt>
										<label for="login_password">Password</label>
									</dt>
                        <dd>
                            <input class="line-input" name="password" id="login_password" type="password">

                        </dd>
                        <br>
                        <p><input class="btn" id="login-btn" type="submit" value="Login"></p>
                </form>
                <h5><a href="/web/20110615140159/http://www.moshimonsters.com/forgotpassword">Reset my password</a> - If you have forgotten your password, then we can send you an email that will let you reset it.</h5>
            </div>
            <div class="col">
                <p class="register-adopt">Don't have a monster? <a href="/web/20110615140159/http://www.moshimonsters.com/adopt">Why not adopt?</a></p>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    <div id="main-footer"></div>
    </div>
    <?php include('../assets/core/nav.html') ?>
    </div>
    <?php include('../assets/core/footer.html') ?>
</body>

</html>