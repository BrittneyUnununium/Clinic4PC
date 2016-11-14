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

	$service_types = array(

		'ONL' => 'Online',
		'INS' => 'In-Store',
		'INH' => 'In-Home'

	);
	$services = array(

		'CC'        => array(
			'text' => 'Computer Cleaning',
			'opts' => array('INS' => 1999)
		),
		'VSR'       => array(
			'text' => 'Virus & Spyware Removal',
			'opts' => array('ONL' => 3999, 'INS' => 4999, 'INH' => 7999)
		),
		'CTU'       => array(
			'text' => 'Computer Tune-Up',
			'opts' => array('ONL' => 3999, 'INS' => 4999, 'INH' => 5999)
		),
		'HOSU'     	=> array(
			'text' => 'Hardware & Operating System Update & Optimization',
			'opts' => array('INS' => 2999)
		),
		'HINPB_I' 	=> array(
			'text' => 'Hardware Installation (Internal, not pre-bought)',
			'opts' => array('INS' => 4999, 'INH' => 7999)
		),
		'HIPB_I'  	=> array(
			'text' => 'Hardware Installation (Internal, pre-bought)',
			'opts' => array('INS' => 3999, 'INH' => 7999)
		),
		'HIPB_E'   	=> array(
			'text' => 'Hardware Installation (External)',
			'opts' => array('INS' => 1999, 'INH' => 4999)
		),
		'OSI'       => array(
			'text' => 'Operating System Installation',
			'opts' => array('INS' => 3999, 'INH' => 7999)
		),
		'DBT'       => array(
			'text' => 'Data Backup or Transfer',
			'opts' => array('ONL' => 1999, 'INS' => 3999, 'INH' => 7999)
		),
		'CS'       	=> array(
			'text' => 'Computer Setup',
			'opts' => array('INH' => 7999)
		),
		'CDS'      	=> array(
			'text' => 'Computer Defense Setup',
			'opts' => array('ONL' => 2999, 'INS' => 3999, 'INH' => 5999)
		),
		'SIS'       => array(
			'text' => 'Software Install & Setup',
			'opts' => array('ONL' => 1999, 'INS' => 1999, 'INH' => 4999)
		),
		'PRNT'      => array(
			'text' => 'Printer Setup',
			'opts' => array('ONL' => 1999, 'INH' => 4999)
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
				'<th></th>' .
				'<th>Service</th>' .
				'<th>Location</th>' .
				'<th>Amount</th>' .
				'<th>Comments</th>' .
			'</tr>';

	$service_total = 0;
	foreach ($services as $i => $service) {
		if (
			($item = getPost($i, false)) &&
			isset($item['item']) && isset($item['opts']) &&
			isset($service['opts'][$item['opts']])
		) {

			$email_msg .=
				'<tr style="background-color: #dffdc7;">' .
					'<td>&bull;</td>' .
					'<td>' . htmlentities($service['text']) . '</td>' .
					'<td>' . htmlentities($service_types[$item['opts']]) . '</td>' .
					'<td>$' . number_format((int)($service['opts'][$item['opts']]) / 100, 2, '.', ',') . '</td>' .
					'<td>' . (isset($item['comm']) && trim($item['comm']) ? str_replace(array("\r", "\n"), array('', '<br />'), htmlentities(trim($item['comm']))) : '&nbsp;') . '</td>' .
				'</tr>';

			$service_total += $service['opts'][$item['opts']];

		} else {

			$email_msg .=
				'<tr>' .
					'<td></td>' .
					'<td>' . htmlentities($service['text']) . '</td>' .
					'<td colspan="3"></td>' .
				'</tr>';

		}
	}

	$email_msg .=
			'<tr style="font-weight: bold;">' .
				'<td colspan="2"></td>' .
				'<td>Total</td>' .
				'<td>$' . number_format($service_total / 100, 2, '.', ',') . '</td>' .
				'<td></td>' .
			'</tr>' .
		'</table>';

	echo @mail(
		'brittneyoftedahl@gmail.com',
		'Standard Service Form - Filled',
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
