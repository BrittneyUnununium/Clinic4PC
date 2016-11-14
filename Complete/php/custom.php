<?php

	/**
	 * Searches the $_POST array for an item, or returns a default value
	 * @param string $name Used as a key for reading an array item value
	 * @param mixed $default The default value returned if the item does not exist
	 * @return mixed
	 */
	function getPost($name, $default = '')
	{
		return isset($_POST[$name]) ? $_POST[$name] : $default;
	}

	$custom = array(

		'pricerange' => array(
			'text' => 'Ideal price range for PC build'
		),
		'usagetype' => array(
			'text' => 'General intention of use'
		),
		'memoryhddssd' => array(
			'text' => 'Storage'
		),
		'opticaldrive' => array(
			'text' => 'Optical Drive'
		),
		'cpu' => array(
			'text' => 'CPU'
		),
		'cpucooler' => array(
			'text' => 'CPU Cooler'
		),
		'motherboard' => array(
			'text' => 'Motherboard'
		),
		'ram' => array(
			'text' => 'RAM (Memory)'
		),
		'vga' => array(
			'text' => 'Video Card'
		),
		'power' => array(
			'text' => 'Power Supply'
		),
		'case' => array(
			'text' => 'Case'
		),
		'expansioncardsnetworking' => array(
			'text' => 'Additional components'
		),
		'LEDFan' => array(
			'text' => 'LED Fan'
		),
		'operatingsystem' => array(
			'text' => 'Operating System'
		)

	);

	$email_msg =
		'<div>Full Name: <b>' .             htmlentities(getPost('FullName'))         . '</b></div>' .
		'<div>Phone Number: <b>' .          htmlentities(getPost('PhoneNumber'))      . '</b></div>' .
		'<div>Email Address: <b>' .         htmlentities(getPost('EmailAddress'))     . '</b></div>' .
		'<div>Physical Address: <b>' .      htmlentities(getPost('PhysicalAddress'))  . '</b></div>' .
		'<div>Location: <b>' .              htmlentities(getPost('Location'))         . '</b></div>' .
		'<div>Service Date and Time: <b>' . htmlentities(getPost('ServiceTimeFrame')) . '</b></div>' .
		'<br>';

	$email_msg .=
		'<table border="1" cellspacing="4" cellpadding="4">' .
			'<tr>' .
				'<th>Item</th>' .
				'<th>Options</th>' .
				'<th>Comments</th>' .
			'</tr>';

	foreach ($custom as $i => $service) {
		if ($item = getPost($i, false)) {

			$email_msg .=
				'<tr style="background-color: #dffdc7;">' .
					'<td>' . htmlentities($service['text']) . '</td>' .
					'<td>' .
						(isset($item['opts']) && isset($item['item']) ?
							(isset($item['opts']) ? (is_array($item['opts']) ? '&bull; ' . implode('<br />&bull; ', $item['opts']) : $item['opts']) : '&nbsp;')
							:
							(isset($item['item']) ? (is_array($item['item']) ? '&bull; ' . implode('<br />&bull; ', $item['item']) : $item['item']) : '&nbsp;')
						) .
					'</td>' .
					'<td>' . (isset($item['comm']) && trim($item['comm']) ? str_replace(array("\r", "\n"), array('', '<br />'), htmlentities(trim($item['comm']))) : '&nbsp;') . '</td>' .
				'</tr>';

		}
	}

	$email_msg .=
		'</table>';

	echo @mail(
		'brittneyoftedahl@gmail.com',
		'Custom Build Form - Filled',
		$email_msg,
		implode("\r\n", array(
			'From: ' . 'Clinic4PC <clinic4pc.spokane@gmail.com>', //getPost('EmailAddress'),
			'MIME-Version: 1.0',
			'Content-Type: text/html; charset=ISO-8859-1'
		))
		) ? 'Your form was successfully submitted! Thank you for choosing Clinic4PC.<br />
		<p>
		Your order will be addressed in a timely fashion. Feel free to call us at <b>319-535-0069</b> if you\'d like to rush service. :)<br />
		<p>
		<b>Online customers: Please visit our <a href="/contact.html">contact</a> page to download TeamViewer, and email us your TeamViewer login information from the email address you have provided us.</b>' : '<b>Error sending form data. Please try again, or call us at 319-535-0069 for assistance.</b>';

	echo '<br /><br />' . $email_msg; //TODO: REMOVE ME
