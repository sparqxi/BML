import { Controller, useFormContext } from "react-hook-form";
import { Grid, TextField, Typography } from "@mui/material";
import { GenerateParamType } from "../../../types/generate";

const InitForm = () => {
  const { control, formState } = useFormContext<Partial<GenerateParamType>>();
  const { errors } = formState;

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <Typography variant="h6">Token Info</Typography>
      </div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Grid
            className="mt-6"
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item md={3} sm={12} xs={12}>
              <Typography sx={{ textAlign: { md: "right", sm: "left" } }}>
                Name
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                label="name"
                error={!!errors.name}
                helperText={errors?.name?.message}
                {...field}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        )}
      />
      <Controller
        name="symbol"
        control={control}
        render={({ field }) => (
          <Grid
            className="mt-6"
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item md={3} sm={12} xs={12}>
              <Typography sx={{ textAlign: { md: "right", sm: "left" } }}>
                $Symbol
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                label="$symbol"
                error={!!errors.symbol}
                helperText={errors?.symbol?.message}
                {...field}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        )}
      />
      <Controller
        name="decimal"
        control={control}
        render={({ field }) => (
          <Grid
            className="mt-6"
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item md={3} sm={12} xs={12}>
              <Typography sx={{ textAlign: { md: "right", sm: "left" } }}>
                Decimal
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="number"
                label="decimal"
                error={!!errors.decimal}
                helperText={errors?.decimal?.message}
                {...field}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        )}
      />
      <div className="flex justify-center items-center mt-5">
        <Typography variant="h6">Tokenomics</Typography>
      </div>
      <Controller
        name="supply"
        control={control}
        render={({ field }) => (
          <Grid
            className="mt-6"
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item md={3} sm={12} xs={12}>
              <Typography sx={{ textAlign: { md: "right", sm: "left" } }}>
                Supply
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="number"
                label="supply"
                error={!!errors.supply}
                helperText={errors?.supply?.message}
                {...field}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        )}
      />
      <Controller
        name="maxBuy"
        control={control}
        render={({ field }) => (
          <Grid
            className="mt-6"
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item md={3} sm={12} xs={12}>
              <Typography sx={{ textAlign: { md: "right", sm: "left" } }}>
                Max Buy
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="number"
                label="max buy"
                error={!!errors.maxBuy}
                helperText={errors?.maxBuy?.message}
                {...field}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        )}
      />
      <Controller
        name="initialLP"
        control={control}
        render={({ field }) => (
          <Grid
            className="mt-6"
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item md={3} sm={12} xs={12}>
              <Typography sx={{ textAlign: { md: "right", sm: "left" } }}>
                Initial LP
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="number"
                label="Initial LP"
                error={!!errors.initialLP}
                helperText={errors?.initialLP?.message}
                {...field}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        )}
      />
    </>
  );
};

export default InitForm;
