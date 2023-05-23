import { Typography, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";

export default function PaymentForm() {
  const { control } = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <AppTextInput
            name='nameOnCard'
            label='Name on card'
            control={control} />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
             />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </>
  );
}