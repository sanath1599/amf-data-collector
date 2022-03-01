import { React, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material/";
import {
  MENTOR_COACH,
  MENTOR_PE,
  MENTOR_PHYSIO,
} from "../../containers/Patient/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CandidatePerformanceMentoringForm({
  candidateDetails,
  formik,
  mentorType,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log("dt", formik.values.date);
  return (
    <Grid container spacing={3} style={{ marginTop: "5px" }}>
      <Grid item xs={12}>
        <Typography color="inherit" style={{ textAlign: "center" }}>
          {mentorType} feedback
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="name"
          required
          label="Student's name"
          fullWidth
          variant="standard"
          value={
            (candidateDetails && candidateDetails.name) || formik.values.name
          }
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="id"
          label="Student's ID"
          fullWidth
          variant="standard"
          value={(candidateDetails && candidateDetails.id) || formik.values.id}
          onChange={formik.handleChange}
          error={formik.touched.id && Boolean(formik.errors.id)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="category"
          label="Student's Category"
          fullWidth
          variant="standard"
          value={
            (candidateDetails && candidateDetails.category) ||
            formik.values.category
          }
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
        />
      </Grid>
      <Grid item xs={12}>
        <div style={{ display: "inline-block" }}>Date: </div>
        <div style={{ display: "inline-block", marginLeft: "20px" }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              formik.setFieldValue("date", date);
            }}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </Grid>
      {mentorType === MENTOR_COACH && (
        <>
          <Grid item xs={12}>
            <TextField
              id="technical-skill"
              label="Technical skill"
              fullWidth
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.technicalSkill) ||
                formik.values.coach.technicalSkill
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  technicalSkill: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="short-put"
              label="Short put"
              fullWidth
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.shortPut) ||
                formik.values.coach.shortPut
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  shortPut: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="leg-position-rt"
              label="Leg position rt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.legPosition.rt) ||
                formik.values.coach.legPosition.rt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  legPosition: {
                    ...formik.values.coach.legPosition,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="leg-position-lt"
              label="Leg position lt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.legPosition.lt) ||
                formik.values.coach.legPosition.lt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  legPosition: {
                    ...formik.values.coach.legPosition,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="foot-rt"
              label="Foot rt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.foot.rt) ||
                formik.values.coach.foot.rt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  foot: {
                    ...formik.values.coach.foot,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="foot-lt"
              label="Foot lt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.foot.lt) ||
                formik.values.coach.foot.lt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  foot: {
                    ...formik.values.coach.foot,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="ankle-rt"
              label="Ankle rt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.ankle.rt) ||
                formik.values.coach.ankle.rt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  ankle: {
                    ...formik.values.coach.ankle,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="ankle-lt"
              label="Ankle lt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.ankle.lt) ||
                formik.values.coach.ankle.lt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  ankle: {
                    ...formik.values.coach.ankle,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="knee-rt"
              label="Knee rt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.knee.rt) ||
                formik.values.coach.knee.rt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  knee: {
                    ...formik.values.coach.knee,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="knee-lt"
              label="Knee lt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.knee.lt) ||
                formik.values.coach.knee.lt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  knee: {
                    ...formik.values.coach.knee,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="hip-rt"
              label="Hip rt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.hip.rt) ||
                formik.values.coach.hip.rt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  hip: {
                    ...formik.values.coach.hip,
                    rt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="hip-lt"
              label="Hip lt"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.hip.lt) ||
                formik.values.coach.hip.lt
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  hip: {
                    ...formik.values.coach.hip,
                    lt: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="upperbodyBendFromShoulder"
              label="Upper body bend from shoulder"
              fullWidth
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.upperbodyBendFromShoulder) ||
                formik.values.coach.upperbodyBendFromShoulder
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  upperbodyBendFromShoulder: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="rightHandFourFingersTouchInNeckBelowEar"
              label="Right hand four fingers touch in neck below ear"
              fullWidth
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach
                    .rightHandFourFingersTouchInNeckBelowEar) ||
                formik.values.coach.rightHandFourFingersTouchInNeckBelowEar
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  rightHandFourFingersTouchInNeckBelowEar: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="trunkBendingPosition"
              label="Trunk bending position"
              fullWidth
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.trunkBendingPosition) ||
                formik.values.coach.trunkBendingPosition
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  trunkBendingPosition: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="takeOffPositionFullBody"
              label="Take off position full body"
              fullWidth
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.takeOffPositionFullBody) ||
                formik.values.coach.takeOffPositionFullBody
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  takeOffPositionFullBody: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="right-shoulder-rotation"
              label="Right shoulder rotation"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.rightShoulder.rotation) ||
                formik.values.coach.rightShoulder.rotation
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  rightShoulder: {
                    ...formik.values.coach.rightShoulder,
                    rotation: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="right-shoulder-push"
              label="Right shoulder push"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.rightShoulder.push) ||
                formik.values.coach.rightShoulder.push
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  rightShoulder: {
                    ...formik.values.coach.rightShoulder,
                    push: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="left-shoulder-rotation"
              label="Left shoulder rotation"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.leftShoulder.rotation) ||
                formik.values.coach.leftShoulder.rotation
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  leftShoulder: {
                    ...formik.values.coach.leftShoulder,
                    rotation: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="left-shoulder-push"
              label="Left shoulder push"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.leftShoulder.push) ||
                formik.values.coach.leftShoulder.push
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  leftShoulder: {
                    ...formik.values.coach.leftShoulder,
                    push: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="trunk-twist"
              label="Trunk twist"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.trunk.twist) ||
                formik.values.coach.trunk.twist
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  trunk: {
                    ...formik.values.coach.trunk,
                    twist: e.target.value,
                  },
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="trunk-balance"
              label="Trunk balance"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.coach &&
                  candidateDetails.coach.trunk.balance) ||
                formik.values.coach.trunk.balance
              }
              onChange={(e) =>
                formik.setFieldValue("coach", {
                  ...formik.values.coach,
                  trunk: {
                    ...formik.values.coach.trunk,
                    balance: e.target.value,
                  },
                })
              }
            />
          </Grid>
        </>
      )}
      {mentorType === MENTOR_PHYSIO && (
        <Grid item xs={12}>
          <TextField
            id="exercise"
            label="Exercise"
            fullWidth
            multiline
            variant="standard"
            value={
              (candidateDetails &&
                candidateDetails.physioTherapist &&
                candidateDetails.physioTherapist.exercise) ||
              formik.values.physioTherapist.exercise
            }
            onChange={(e) =>
              formik.setFieldValue("physioTherapist", {
                ...formik.values.physioTherapist,
                exercise: e.target.value,
              })
            }
          />
        </Grid>
      )}
      {mentorType === MENTOR_PE && (
        <>
          <Grid item xs={12}>
            <TextField
              id="trainingUpdate"
              label="Training update"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.physicalEducators &&
                  candidateDetails.physicalEducators.trainingUpdate) ||
                formik.values.physicalEducators.trainingUpdate
              }
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  trainingUpdate: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="distance"
              label="Distance"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.physicalEducators &&
                  candidateDetails.physicalEducators.distance) ||
                formik.values.physicalEducators.distance
              }
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  distance: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="trainingVideo"
              label="Training video"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.physicalEducators &&
                  candidateDetails.physicalEducators.trainingVideo) ||
                formik.values.physicalEducators.trainingVideo
              }
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  trainingVideo: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="strengthConditioningFeedback"
              label="Strength conditioning feedback"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.physicalEducators &&
                  candidateDetails.physicalEducators
                    .strengthConditioningFeedback) ||
                formik.values.physicalEducators.strengthConditioningFeedback
              }
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  strengthConditioningFeedback: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="technicalSkillsFeedback"
              label="Technical skills feedback"
              fullWidth
              multiline
              variant="standard"
              value={
                (candidateDetails &&
                  candidateDetails.physicalEducators &&
                  candidateDetails.physicalEducators.technicalSkillsFeedback) ||
                formik.values.physicalEducators.technicalSkillsFeedback
              }
              onChange={(e) =>
                formik.setFieldValue("physicalEducators", {
                  ...formik.values.physicalEducators,
                  technicalSkillsFeedback: e.target.value,
                })
              }
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
