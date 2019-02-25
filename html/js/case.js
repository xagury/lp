//定义所有变量
var camera, scene, renderer, pager, mask ,iframe ,detail;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };
//初始化
init();
animate();
//设置字块点击后出现的板块.
function initDetail(d){
	var dt = $(detail.clone());
	$('div.head h1',dt).text(d.title);
	$('div.body table tr td span.img',dt).css('backgroundImage','url('+d.root+'index.png'+')');
	$('div.body table tr td h1',dt).text(d.desc);

	dt.click(function(){
		$('#hint').hide();
        $('#interHelp').hide();
		iframe.attr('src',d.root+'index.html');
		
		pager.animate({left:'-100%'},1000);
        
	});
	return dt.show();
}

function init() {
	
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3000;

	scene = new THREE.Scene();
	
	$('#back').click(function(){
        $('#hint').show();
        $('#interHelp').show();
		pager.animate({left:'0%'},1000);
		console.log(element.lastElementChild);
		element.firstElementChild.style.display = 'block';
		element.lastElementChild.style.display = 'none';
	});

	// 表格

	mask = $('<div id="mask"></div>');

	pager = $('#pager');

	iframe = $('#iframe');
	
	

	detail = $('#detail');

	for ( var i = 0; i < table.length; i += 6 ) {

		var element = document.createElement( 'div' );
		element.className = 'element';

		element.detail = table[i+5];
		element.detail = table1[i+5];
		element.onclick = function(){
			if(this.firstElementChild.style.display == 'block'){
				this.firstElementChild.style.display = 'none';
				this.lastElementChild.style.display = 'block';
			}else{
				this.firstElementChild.style.display = 'block';
				this.lastElementChild.style.display = 'none';
			}
			var $maskClone = mask.clone().click(function(){
				var $this = $(this);
				$('div',$this).addClass('holeOut');
				window.setTimeout(function(){
					$this.remove();
				},1000);
			});
			$maskClone.append(initDetail(this.detail));
            $('#hint').hide();
            $('#interHelp').hide();

			$(document.body).append($maskClone);
			
		}

		
		var symbol = document.createElement( 'img' );
		symbol.className = 'symbol';
		symbol.style.display = 'block';
		symbol.src='img/1(' + table[ i ] + ').png';
		symbol.textContent = table[i];
		element.appendChild( symbol );

		var symbol1 = document.createElement( 'div' );
		symbol1.className = 'symbol1';
		symbol1.style.backgroundColor = 'rgba(241,147,156,' + ( Math.random() * 0.5 + 0.25 ) + ')';
		symbol1.style.display = 'none';
		symbol1.textContent = table1[i];
		element.appendChild( symbol1 );
		var cat = table1[i].length;
		if(cat ==2 )
			symbol1.style.font = '700 80px/90px "" ';
		else if(cat == 1)
			symbol1.style.font = '700 80px/180px "" ';
		else if(cat == 3)
			symbol1.style.font = '700 65px/80px "" ';
		


	


		var object = new THREE.CSS3DObject( element );
		object.position.x = Math.random() * 4000 - 2000;
		object.position.y = Math.random() * 4000 - 2000;
		object.position.z = Math.random() * 4000 - 2000;
		scene.add( object );

		objects.push( object );

		//

		var object = new THREE.Object3D();
		object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
		object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

		targets.table.push( object );
	
	}

	// 球体

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = Math.acos( -1 + ( 2 * i ) / l );
		var theta = Math.sqrt( l * Math.PI ) * phi;

		var object = new THREE.Object3D();

		object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
		object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
		object.position.z = 800 * Math.cos( phi );

		vector.copy( object.position ).multiplyScalar( 2 );

		object.lookAt( vector );

		targets.sphere.push( object );

	}

	// 环形

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = i * 0.175 + Math.PI;

		var object = new THREE.Object3D();

		object.position.x = 900 * Math.sin( phi );
		object.position.y = - ( i * 8 ) + 450;
		object.position.z = 900 * Math.cos( phi );

		vector.x = object.position.x * 2;
		vector.y = object.position.y;
		vector.z = object.position.z * 2;

		object.lookAt( vector );

		targets.helix.push( object );

	}

	// 排列

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = new THREE.Object3D();

		object.position.x = ( ( i % 5 ) * 400 ) - 800;
		object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
		object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

		targets.grid.push( object );

	}

	//

	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( renderer.domElement );

	//

	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.minDistance = 500;
	controls.maxDistance = 6000;
	controls.addEventListener( 'change', render );

	var button = document.getElementById( 'table' );
	button.addEventListener( 'click', function ( event ) {

        transform( targets.table, 2000 );

	}, false );

	var button = document.getElementById( 'sphere' );
	button.addEventListener( 'click', function ( event ) {

        transform( targets.sphere, 2000 );

	}, false );

	var button = document.getElementById( 'helix' );
	button.addEventListener( 'click', function ( event ) {

        transform( targets.helix, 2000 );

	}, false );

	var button = document.getElementById( 'grid' );
	button.addEventListener( 'click', function ( event ) {

        transform( targets.grid, 2000 );

	}, false );

    $(button).css('background','rgba(222,28,49,0.5)')
	transform( targets.grid, 5000 ,function(){
		console.log(1)
        transform( targets.helix, 2000 ,function(){
            transform( targets.sphere, 2000 );
		});
	});


	
	window.addEventListener( 'resize', onWindowResize, false );





}

function transform( targets, duration ) {

	TWEEN.removeAll();

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = objects[ i ];
		var target = targets[ i ];

		new TWEEN.Tween( object.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

		new TWEEN.Tween( object.rotation )
			.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

	}

	new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.start();

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function animate() {

	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();

}

function render() {

	renderer.render( scene, camera );

}

 