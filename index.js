$(() => {
  const basic = {
    annual: {
      price: 199.99
    },
    monthly: {
      price: 19.99
    }
  };
  const professional = {
    annual: {
      price: 249.99
    },
    monthly: {
      price: 24.99
    }
  };
  const master = {
    annual: {
      price: 399.99
    },
    monthly: {
      price: 39.99
    }
  };

  function setPriceValues(flag) {
    if (flag) {
      $("#basic-price").html("<span>$</span>" + basic.monthly.price);
      $("#professional-price").html("<span>$</span>" + professional.monthly.price);
      $("#master-price").html("<span>$</span>" + master.monthly.price);
    } else {
      $("#basic-price").html("<span>$</span>" + basic.annual.price);
      $("#professional-price").html("<span>$</span>" + professional.annual.price);
      $("#master-price").html("<span>$</span>" + master.annual.price);
    }
  }

  let isChecked = $("#toggle-plans").is(":checked");
  setPriceValues(isChecked);

  $("#toggle-plans").change(function() {
    isChecked = $(this).is(":checked");
    setPriceValues(isChecked);
  });
});
